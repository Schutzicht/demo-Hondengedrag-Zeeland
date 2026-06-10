#!/usr/bin/env node
/**
 * Brand image generation via Nano Banana Pro (Gemini 3 Pro Image) — de
 * generate-brand-images skill. Demo door Agensea — Hondengedrag Zeeland.
 *
 * Usage:
 *   npm run generate:images                              # alle ontbrekende
 *   npm run generate:images -- --force                   # alles opnieuw
 *   npm run generate:images -- --only=hero-dijk --force  # eentje
 *
 * Vereist GEMINI_API_KEY (shell-env in ~/.zshrc, of lokale .env).
 */

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "public", "images", "art");

if (!process.env.GEMINI_API_KEY) {
  console.error("\x1b[31mGEMINI_API_KEY is not set.\x1b[0m  source ~/.zshrc en draai opnieuw.");
  process.exit(1);
}

const args = process.argv.slice(2);
const FORCE = args.includes("--force");
const ONLY = args.find((a) => a.startsWith("--only="))?.split("=")[1];

// Nano Banana Pro kan 60s+ duren; ruime timeout zodat de fetch niet vroegtijdig afbreekt.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { timeout: 120000 },
});

/**
 * Gedeelde merk-signatuur. Authenticiteitsregel: alleen de echte eigenares
 * (losse echte foto) heeft een gezicht; elke AI-mens hier is anoniem.
 */
const BRAND = [
  "Photorealistic editorial photography for Hondengedrag Zeeland, a calm, premium dog-behaviour consultancy on the coast of Zeeland, the Netherlands.",
  "Visual language: cinematic and restrained, magazine quality in the spirit of Kinfolk and Cereal.",
  "Soft natural Northern-European light, misty maritime atmosphere, gentle fine film grain, a quiet and trusting mood.",
  "Muted warm palette: warm linen, deep pine-charcoal, sage green, soft clay terracotta, deep teal.",
  "Dogs are calm, relaxed, healthy ordinary family dogs, not show dogs.",
  "Any human is anonymous and incidental: shown only from behind, as a distant silhouette, as hands, or fully out of focus, never with a recognisable face.",
  "Absolutely no text, no logos, no watermarks, no captions, no signage.",
  "Natural and unstyled, authentic reportage feel, never glossy, never a generic stock look.",
].join(" ");

const IMAGES = [
  {
    name: "hero-dijk",
    aspectRatio: "16:9",
    prompt:
      "Wide cinematic landscape, generous soft sky in the upper half. A person seen from behind walks a calm medium-sized dog along a grassy sea dike in Zeeland at first light. " +
      "The leash hangs in a relaxed, slack curve, the dog walks loosely and content beside them. Low mist drifts over tidal water, dune grass in the foreground, a vast pale dawn sky washed soft pink and warm grey. " +
      "Shot on medium format, 50mm, soft golden backlight, long calm horizon, deep sense of space.",
  },
  {
    name: "stille-taal",
    aspectRatio: "4:5",
    prompt:
      "Calm three-quarter body portrait of a gentle mixed-breed family dog standing relaxed on a sandy coastal path. " +
      "Ears soft, weight settled, mouth slightly open and relaxed, gaze just off camera, the whole body readable and clear. " +
      "Soft overcast Zeeland daylight, muted sage and linen background fully blurred, shallow depth of field, the dog sharp with breathing room around it.",
  },
  {
    name: "zeeland-ruimte",
    aspectRatio: "16:9",
    prompt:
      "Ultra-wide Zeeland coastal landscape at golden hour: a long dike and calm tidal water catching warm low light, an enormous soft sky, marram dune grass in the foreground, minimal and serene, a deep sense of openness. No people, no animals.",
  },
  {
    name: "kust-ochtend",
    aspectRatio: "16:9",
    prompt:
      "Calm shallow tidal water over rippled sand on a wide Zeeland beach at dawn, soft warm reflections in the wet sand, a low pale horizon and big soft sky, serene and minimal, film grain. No people, no animals.",
  },
  {
    name: "duin-mist",
    aspectRatio: "16:9",
    prompt:
      "A quiet misty morning over Zeeland dunes and marram grass, soft diffuse fog, muted sage and sand tones, gentle and atmospheric, minimal, cinematic. No people, no animals.",
  },
];

const filtered = ONLY ? IMAGES.filter((i) => i.name === ONLY) : IMAGES;
if (ONLY && filtered.length === 0) {
  console.error(`\x1b[31mNo image named "${ONLY}".\x1b[0m`);
  IMAGES.forEach((i) => console.error(`    ${i.name}`));
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function generateOne({ name, prompt, aspectRatio }) {
  const outPath = path.join(OUTPUT_DIR, `${name}.png`);
  if (fs.existsSync(outPath) && !FORCE) {
    console.log(`\x1b[90mskip (exists): ${name}.png\x1b[0m`);
    return "skip";
  }
  console.log(`\x1b[36mgenerating: ${name} (${aspectRatio})\x1b[0m`);
  const MAX = 2;
  for (let attempt = 1; attempt <= MAX; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-image-preview",
        contents: `${BRAND}\n\n${prompt}`,
        config: { imageConfig: { aspectRatio } },
      });
      const part = response.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
      if (!part) {
        console.warn(`\x1b[33m  ${name}: geen beelddata (poging ${attempt})\x1b[0m`);
        if (attempt === MAX) return "empty";
      } else {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        fs.writeFileSync(outPath, buffer);
        console.log(`\x1b[32msaved: ${name}.png  (${(buffer.length / 1024).toFixed(0)} KB, poging ${attempt})\x1b[0m`);
        return "ok";
      }
    } catch (err) {
      const msg = String(err?.message || err);
      const transient = /503|504|UNAVAILABLE|DEADLINE|overloaded|high demand|429|RESOURCE_EXHAUSTED|500|INTERNAL|fetch failed|ECONNRESET|ETIMEDOUT|EAI_AGAIN|network|socket|aborted|timeout/i.test(msg);
      if (attempt === MAX || !transient) {
        console.error(`\x1b[31mfailed: ${name}  ${msg.slice(0, 90)}\x1b[0m`);
        return "error";
      }
      const wait = Math.min(45000, 4000 * 2 ** (attempt - 1));
      console.log(`\x1b[33m  ${name}: ${msg.slice(0, 50)}... retry in ${(wait / 1000).toFixed(0)}s\x1b[0m`);
      await sleep(wait);
    }
  }
  return "error";
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`\nGenereren (Nano Banana Pro): ${filtered.length} beeld(en) -> public/images/art/\n`);
  const results = [];
  for (const img of filtered) results.push(await generateOne(img));
  const ok = results.filter((r) => r === "ok").length;
  console.log(`\n\x1b[1mKlaar:\x1b[0m ${ok} gegenereerd, ${results.filter((r) => r === "skip").length} overgeslagen, ${results.filter((r) => r !== "ok" && r !== "skip").length} mislukt.\n`);
}

main();
