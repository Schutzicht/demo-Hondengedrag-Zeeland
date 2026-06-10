// Content-laag — Hondengedrag Zeeland (demo door Agensea)
// Echte gegevens en diensten, herschreven op merk. Concept "De Lijn".

export const site = {
  name: "Hondengedrag Zeeland",
  owner: "Pieternel van Haaften",
  role: "Hondengedragsconsulent",
  tagline: "Achter elk gedrag zit een reden.",
  intro:
    "Hondengedragsbegeleiding in heel Zeeland. Rustig, respectvol en gericht op begrip, voor jou en je hond.",
  phoneDisplay: "06 2555 5386",
  phoneHref: "tel:+31625555386",
  whatsapp: "https://wa.me/31625555386",
  email: "hondengedragzeeland@gmail.com",
  kvk: "95911189",
  btw: "NL005181961B24",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  region:
    "Goes, Middelburg, Vlissingen, Zierikzee, Terneuzen, Tholen en heel Walcheren, Bevelanden en Schouwen-Duiveland.",
  towns: ["Goes", "Middelburg", "Vlissingen", "Zierikzee", "Terneuzen", "Tholen"],
};

export const nav = [
  { label: "Aanpak", href: "/aanpak" },
  { label: "Diensten", href: "/diensten" },
  { label: "Over Pieternel", href: "/over-pieternel" },
  { label: "Tarieven", href: "/tarieven" },
  { label: "Contact", href: "/contact" },
];

// De aanpak: vier stappen. De lijn gaat mee van strak (onrust) naar los (vertrouwen).
export const steps = [
  {
    n: "01",
    title: "Luisteren",
    line: "Het begint met jouw verhaal.",
    body: "We bellen rustig over wat er speelt. Wat gebeurt er precies, wanneer, sinds wanneer, en wat heb je al geprobeerd. Geen oordeel, eerst het hele plaatje.",
    tension: 0.92,
  },
  {
    n: "02",
    title: "Lezen",
    line: "Kijken naar wat je hond zegt.",
    body: "In de echte situatie observeer ik je hond. Lichaamstaal, houding, de kleine signalen. Daar zit de informatie die het gedrag verklaart.",
    tension: 0.62,
  },
  {
    n: "03",
    title: "Begrijpen",
    line: "De reden achter het gedrag.",
    body: "Gedrag is communicatie. Ik leg uit wat je hond probeert te zeggen, zodat jullie elkaar weer verstaan. Pas als je het begrijpt, kun je het veranderen.",
    tension: 0.34,
  },
  {
    n: "04",
    title: "Begeleiden",
    line: "Rustig, in jullie eigen tempo.",
    body: "Je krijgt duidelijke, praktische handvatten en blijvende ondersteuning. De spanning mag eraf. Wat overblijft is rust, duidelijkheid en vertrouwen.",
    tension: 0.08,
  },
];

// De stille taal: leren een hond te lezen. Elk signaal in twee toestanden.
export const signals = [
  {
    key: "oren",
    label: "De oren",
    calm: "Zacht en los, in hun natuurlijke stand. Een hond die ontspannen waarneemt wat er om hem heen gebeurt.",
    tense: "Strak naar voren gericht of plat naar achteren geklemd. Hier is alertheid of onzekerheid in het spel.",
  },
  {
    key: "ogen",
    label: "De ogen",
    calm: "Een zachte blik met rustig knipperen, de oogleden los. Geen spanning rond de ogen.",
    tense: "Hard en star, of juist veel oogwit dat oplicht. De blik die zegt: ik vertrouw dit niet.",
  },
  {
    key: "bek",
    label: "De bek",
    calm: "Los en iets geopend, soms een rustig hijgen. De spieren rond de snuit zijn ontspannen.",
    tense: "Strak dichtgeknepen, lippen naar voren of juist ver naar achteren. De bek verraadt de spanning het eerst.",
  },
  {
    key: "houding",
    label: "De houding",
    calm: "Het gewicht gelijk verdeeld, het lijf los en open. Een neutrale, zelfverzekerde basis.",
    tense: "Naar voren geleund of laag en klein gemaakt. Het lijf bereidt zich voor, op afstand nemen of standhouden.",
  },
  {
    key: "staart",
    label: "De staart",
    calm: "Laag en los, rustig meebewegend op het ritme van de hond. Ontspanning die je kunt zien.",
    tense: "Stijf rechtop of strak tussen de benen geklemd. Twee uitersten, allebei een vorm van spanning.",
  },
];

export type Service = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  price: string;
  duration: string;
  short: string;
  body: string[];
  points: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "consult-aan-huis",
    index: "01",
    title: "Consult aan huis",
    kicker: "Daar waar het gedrag ontstaat",
    price: "vanaf € 150",
    duration: "ongeveer 1,5 uur",
    short:
      "Bij jullie thuis kijk ik mee waar het gedrag echt ontstaat. Geen trucjes, maar begrijpen waarom je hond doet wat hij doet.",
    body: [
      "We beginnen met een telefonische intake over de situatie en wat je wilt bereiken. Daarna kom ik bij jullie thuis, observeer ik je hond in zijn eigen omgeving en leg ik uit wat ik zie.",
      "Je leert hondentaal lezen en krijgt duidelijke uitleg met praktische handvatten. Voor- en nazorg via app of telefoon zit erbij, en een vervolgconsult kan altijd.",
    ],
    points: [
      "Overmatig blaffen",
      "Angst of onzekerheid",
      "Trekken aan de lijn",
      "Uitvallen naar andere honden",
      "Onrust in huis",
      "Moeilijk alleen kunnen zijn",
    ],
    image: "/images/real/pup-of-herplaatser.jpg",
    imageAlt: "Rustige hond die ontspannen ligt te rusten",
  },
  {
    slug: "pup-of-herplaatser",
    index: "02",
    title: "Pup of herplaatser",
    kicker: "Online theorieles",
    price: "€ 20",
    duration: "1 tot 1,5 uur",
    short:
      "De eerste weken bepalen hoe jullie relatie zich ontwikkelt. Begin rustig, duidelijk en met vertrouwen, vanaf dag één.",
    body: [
      "Een online theorieles voor iedereen die een pup of een herplaatser in huis haalt, of dat nog overweegt. Je leert een kalme en veilige start maken: hondentaal, basisbehoeften en de juiste volgorde van beweging, regels en affectie.",
      "Daarnaast praktisch advies voor de eerste weken: rust, slaap, wandelen, voeding en contact. De les is online via een persoonlijke link en los te volgen van een cursus.",
    ],
    points: [
      "Een rustige, veilige start in huis",
      "Hondentaal en basisbehoeften",
      "De volgorde: beweging, regels, affectie",
      "Praktisch advies voor de eerste weken",
      "Elke eerste maandag van de maand, 19:15",
      "Online, ook geschikt als je nog twijfelt",
    ],
    image: "/images/real/puppycursus.jpg",
    imageAlt: "Puppy die speelt in het gras",
  },
  {
    slug: "cursussen",
    index: "03",
    title: "Puppy- en jonge hondencursus",
    kicker: "In kleine groepen, op echte plekken",
    price: "Puppy € 200 · Jonge hond € 225",
    duration: "8 of 6 lessen, max 4 honden",
    short:
      "Leren in kleine groepjes op wisselende plekken in Zeeland. Rust, duidelijkheid en vertrouwen, midden in de echte wereld.",
    body: [
      "De puppycursus telt acht praktijklessen van ongeveer een half uur, in een groep van maximaal vier pups tot zes maanden. We werken aan socialisatie, de balans tussen spel en rust, wennen aan aanraken, loslopen en het opbouwen van gewenst gedrag vanuit verbinding.",
      "De jonge honden- en pubercursus is voor honden vanaf zes maanden: zes lessen van drie kwartier, wekelijks, in een groep van maximaal vier. Impulscontrole, aandacht en contact, rustig omgaan met prikkels en de balans tussen lijf en kop.",
    ],
    points: [
      "Puppycursus: 8 lessen, max 4 pups tot 6 maanden",
      "Jonge hondencursus: 6 lessen, vanaf 6 maanden",
      "Wisselende locaties: winkelgebied, markt, dierenarts",
      "Echte prikkels, stap voor stap opgebouwd",
      "Socialisatie, loslopen en impulscontrole",
      "Theorieles apart te volgen",
    ],
    image: "/images/real/groepswandeling.jpg",
    imageAlt: "Honden die rustig naast hun eigenaren zitten",
  },
  {
    slug: "groepswandeling",
    index: "04",
    title: "Groepswandeling",
    kicker: "Theorie en praktijk in beweging",
    price: "€ 37,50 per eigenaar met hond",
    duration: "ongeveer 1,5 uur, max 8 honden",
    short:
      "Eerst uitleg over de psychologie van je hond, dan samen op pad. Lezen, bijsturen en verbinden, in een rustige groep.",
    body: [
      "Vooraf geef ik uitleg over de psychologie van de hond en het lezen van lichaamstaal. Daarna gaan we ongeveer anderhalf uur samen wandelen, met maximaal acht honden zodat het rustig en persoonlijk blijft.",
      "Onderweg werken we aan loslopen, omgaan met prikkels, samenwerking en grenzen rustig stellen. Je krijgt individuele feedback en tips die bij jouw hond passen. Trekt je hond nog stevig aan de lijn, dan plannen we eerst een consult.",
    ],
    points: [
      "Uitleg over psychologie en lichaamstaal vooraf",
      "Loslopen en omgaan met prikkels",
      "Samenwerking en verbinding versterken",
      "Grenzen rustig en duidelijk stellen",
      "Individuele feedback tijdens de wandeling",
      "Maximaal 8 honden, extra deelnemer € 20",
    ],
    image: "/images/real/hond-aan-lijn.jpg",
    imageAlt: "Hond die rustig aan een losse lijn meeloopt",
  },
];

export const prices = [
  { name: "Consult aan huis", note: "eerste consult, ca. 1,5 uur, incl. voor- en nazorg", price: "vanaf € 150" },
  { name: "Vervolgconsult", note: "wanneer een volgende stap nodig is", price: "vanaf € 100" },
  { name: "Online theorieles", note: "pup of herplaatser, 1 tot 1,5 uur", price: "€ 20" },
  { name: "Puppycursus", note: "8 lessen, max 4 pups, theorieles apart", price: "€ 200" },
  { name: "Jonge hondencursus", note: "6 lessen, max 4 honden", price: "€ 225" },
  { name: "Groepswandeling", note: "per eigenaar met hond, extra deelnemer € 20", price: "€ 37,50" },
];

export const about = {
  lead:
    "Dertig jaar werkte ik in de zorg voor mensen met een verstandelijke beperking. Daar leerde ik wat echt contact vraagt: geduld, rust en heel goed kijken.",
  body: [
    "Niet sturen op gedrag, maar op begrip. Wie de ander wil bereiken, begint met luisteren en lezen. Precies die houding nam ik mee naar honden.",
    "Jarenlang verdiepte ik me in gedrag, psychologie en lichaamstaal van de hond, en haalde ik meerdere diploma's in hondenpsychologie. Mijn benadering is rustig, respectvol en positief.",
    "Want achter gedrag zit altijd een reden. Mijn werk is die reden samen met jou vinden, zodat jij en je hond elkaar weer verstaan.",
  ],
  diplomas: [
    { src: "/images/real/diploma-1.jpg", alt: "Diploma hondenpsychologie Pieternel van Haaften" },
    { src: "/images/real/diploma-2.jpg", alt: "Diploma hondengedrag Pieternel van Haaften" },
    { src: "/images/real/diploma-3.jpg", alt: "Diploma hondengedragsconsulent Pieternel van Haaften" },
  ],
};
