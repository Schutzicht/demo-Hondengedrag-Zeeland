import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "node:fs";
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { timeout: 120000 },
});

const BRAND =
  "Photorealistic cinematic editorial photograph for Hondengedrag Zeeland, a calm premium dog-behaviour consultancy on the coast of Zeeland, the Netherlands. " +
  "Magazine quality in the spirit of Kinfolk and Cereal, soft natural Northern-European light, gentle film grain, a quiet and trusting mood, muted warm palette of linen, sage green, soft clay terracotta and deep teal. " +
  "The dog is a calm, healthy ordinary family dog. Any human is anonymous: shown only from behind or as a silhouette, never a recognisable face. " +
  "Wide 16:9 cinematic composition with generous calm negative space on the LEFT for a headline. No text, no logos, no watermarks.";

const VARIANTS = [
  {
    name: "hero-a",
    prompt:
      "Golden hour. A person seen from behind walks a calm medium dog on a loose, slack leash along a grassy sea dike in Zeeland. Warm low sun behind them, long soft shadows, misty tidal flats and a sandbank beyond, marram dune grass in the foreground. The dog walks happily mid-stride, clearly visible and relaxed. Empty warm sky on the left third. Shot on 35mm, warm cinematic grade.",
  },
  {
    name: "hero-b",
    prompt:
      "Soft overcast first light on a wide, empty Zeeland beach at low tide. A person seen from behind walks a medium dog on a loose leash across rippled wet sand with mirror-like reflections, the dog trotting content beside them. A vast pale luminous sky, a low horizon, deep sense of space and calm, lots of negative space on the left. Shot on 50mm, muted warm tones.",
  },
  {
    name: "hero-c",
    prompt:
      "Low, intimate angle along a sandy dune path at dawn. A calm dog in the soft foreground looks back over its shoulder toward its owner, the leash hanging slack between them, the owner a soft out-of-focus figure behind seen from the side without a visible face. Dune grass framing, warm misty light, shallow depth of field, tender and quiet. Open sky on the left.",
  },
  {
    name: "hero-d",
    prompt:
      "Wide cinematic Zeeland dike at sunrise, pink and amber sky filling two thirds of the frame. Far down the dike, small but striking, the backlit silhouette of a person walking a dog on a leash, long shadow trailing toward the camera, mist over the water, dune grass. Epic, calm, minimal, a deep sense of space. Plenty of room on the left for a headline.",
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function gen({ name, prompt }) {
  const out = `public/images/art/${name}.png`;
  for (let a = 1; a <= 5; a++) {
    try {
      const resp = await ai.models.generateContent({
        model: "gemini-3-pro-image-preview",
        contents: `${BRAND}\n\n${prompt}`,
        config: { imageConfig: { aspectRatio: "16:9" } },
      });
      const part = resp.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
      if (part) {
        fs.writeFileSync(out, Buffer.from(part.inlineData.data, "base64"));
        console.log(`saved ${name}.png`);
        return;
      }
      console.log(`${name}: geen data (poging ${a})`);
    } catch (e) {
      const msg = String(e?.message || e);
      console.log(`${name} poging ${a}: ${msg.slice(0, 60)}`);
      if (a === 5) { console.log(`FAILED ${name}`); return; }
      await sleep(Math.min(30000, 4000 * 2 ** (a - 1)));
    }
  }
}

for (const v of VARIANTS) await gen(v);
console.log("KLAAR");
