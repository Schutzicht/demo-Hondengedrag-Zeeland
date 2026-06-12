// Content-laag — Hondengedrag Zeeland (demo door Agensea)
// Echte gegevens, diensten en aanpak, aangescherpt met het kennismakingsgesprek.

export const site = {
  name: "Hondengedrag Zeeland",
  owner: "Pieternel van Haaften",
  role: "Hondengedragsconsulent",
  tagline: "Achter elk gedrag zit een reden.",
  intro:
    "Puppycursus en hulp bij probleemgedrag, bij jou thuis of in een klein groepje. Rustig, respectvol en gericht op begrip.",
  phoneDisplay: "06 2555 5386",
  phoneHref: "tel:+31625555386",
  whatsapp: "https://wa.me/31625555386",
  email: "hondengedragzeeland@gmail.com",
  kvk: "95911189",
  btw: "NL005181961B24",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  region:
    "Goes, Kapelle, Middelburg, Vlissingen, Zierikzee, Terneuzen, Tholen en heel Walcheren, de Bevelanden en Schouwen-Duiveland.",
  towns: ["Goes", "Kapelle", "Middelburg", "Vlissingen", "Terneuzen", "Tholen"],
};

export const reviews = {
  rating: "5,0",
  platform: "Google",
  label: "Vijf sterren op Google",
};

export const nav = [
  { label: "Aanpak", href: "/aanpak" },
  { label: "Diensten", href: "/diensten" },
  { label: "Over Pieternel", href: "/over-pieternel" },
  { label: "Tarieven", href: "/tarieven" },
  { label: "Contact", href: "/contact" },
];

// De aanpak in vier stappen, met Pieternels eigen werkwijze.
export const steps = [
  {
    n: "01",
    title: "Luisteren",
    line: "Het begint met jouw verhaal.",
    body: "Je belt of mailt, en meestal bel ik dezelfde dag nog terug. We bespreken rustig wat er speelt: wat gebeurt er, wanneer, en wat heb je al geprobeerd. Geen oordeel, eerst het hele plaatje.",
  },
  {
    n: "02",
    title: "Kijken",
    line: "Niet naar de hond, naar jullie samen.",
    body: "Bij jou thuis vraag ik je gewoon te doen wat je anders ook doet. Ik kijk vooral naar jou: hoe je loopt, hoe je de lijn hanteert, hoe je communiceert. Daar zit de informatie die het gedrag verklaart.",
  },
  {
    n: "03",
    title: "Begrijpen",
    line: "Je hond doet wat hij doet.",
    body: "Gedrag is communicatie. De hond hoeft niet te veranderen, jij leert anders communiceren. Ik leg uit wat je hond probeert te zeggen, zodat jullie elkaar weer verstaan. Pas als je het begrijpt, kun je het veranderen.",
  },
  {
    n: "04",
    title: "Begeleiden",
    line: "Eerst rust, dan pas belonen.",
    body: "Ik werk niet met trucjes. We zoeken eerst rust en samenwerking, en pas als je hond in een goede toestand is, bevestigen we dat. Je krijgt duidelijke handvatten en blijvende ondersteuning, in jullie eigen tempo.",
  },
];

// De stille taal: een rustige hond lezen (alleen de ontspannen toestand gebruikt).
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
  featured?: boolean;
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
      "Bij jou thuis, in de echte situatie. Ik help niet de hond maar jou: hoe je communiceert, hoe je de lijn hanteert, hoe je rust brengt.",
    body: [
      "We beginnen met een telefonische intake, vaak nog dezelfde dag. Daarna kom ik bij je thuis. Ik vraag je gewoon te doen wat je anders ook doet, en ik kijk: hoe lopen jullie, hoe reageert je hond, en vooral wat jij anders kunt doen.",
      "Want je hond doet wat hij doet. De verandering zit in de handling, de lengte van de lijn en hoe je met je hond communiceert. Voor- en nazorg via app of telefoon zit erbij, een vervolgconsult kan altijd.",
    ],
    points: [
      "Trekken aan de lijn",
      "Uitvallen naar andere honden",
      "Blaffen of opspringen",
      "Onrust of onzekerheid in huis",
      "Moeilijk alleen kunnen zijn",
      "Voor pup (een half uur) of volwassen hond",
    ],
    image: "/images/real/pup-of-herplaatser.jpg",
    imageAlt: "Rustige hond die ontspannen ligt",
  },
  {
    slug: "puppycursus",
    index: "02",
    title: "Puppycursus",
    kicker: "De basis begint al bij de pup",
    price: "€ 200 · 8 lessen",
    duration: "max 4 pups, kleine groepjes",
    short:
      "De belangrijkste weken van je hond. In een klein groepje leg je samen een rustige, zelfverzekerde basis, midden in de echte wereld.",
    body: [
      "Acht praktijklessen van ongeveer een half uur, met maximaal vier pups, zodat er voor jou en je pup echt aandacht is. We werken aan socialisatie, de balans tussen spel en rust, wennen aan aanraken, loslopen en het opbouwen van gewenst gedrag vanuit verbinding.",
      "We oefenen op wisselende plekken in Zeeland, zodat je pup de wereld stap voor stap leert kennen. Rustig, duidelijk en met vertrouwen.",
    ],
    points: [
      "Voor pups tot ongeveer 6 maanden",
      "Socialisatie en zelfvertrouwen",
      "Balans tussen spel en rust",
      "Loslopen en omgaan met prikkels",
      "Kleine groepjes, persoonlijke aandacht",
      "Op wisselende locaties in Zeeland",
    ],
    image: "/images/real/puppycursus.jpg",
    imageAlt: "Puppy die speelt in het gras",
    featured: true,
  },
  {
    slug: "jonge-hondencursus",
    index: "03",
    title: "Jonge hondencursus",
    kicker: "Door de puberteit heen",
    price: "€ 225 · 6 lessen",
    duration: "max 4 honden, wekelijks",
    short:
      "Je pup is geen pup meer. In de pubertijd zet je door wat je hebt opgebouwd: aandacht, zelfbeheersing en rust, ook met afleiding.",
    body: [
      "Zes lessen van drie kwartier, wekelijks, in een groep van maximaal vier honden, voor honden vanaf ongeveer zes maanden. We werken aan impulscontrole, aandacht en contact, rustig loslopen en het omgaan met prikkels.",
      "Heb je de puppycursus of een vergelijkbare basis gedaan, dan bouwen we daarop verder. Vaak stromen mensen vanuit een consult of de puppycursus hier rustig in door.",
    ],
    points: [
      "Voor honden vanaf ongeveer 6 maanden",
      "Impulscontrole en zelfbeheersing",
      "Aandacht en contact met afleiding",
      "Rustig loslopen",
      "Kleine groepjes van maximaal 4",
      "Sluit aan op consult of puppycursus",
    ],
    image: "/images/real/groepswandeling.jpg",
    imageAlt: "Jonge honden die rustig naast hun eigenaren zitten",
  },
  {
    slug: "online-theorieles",
    index: "04",
    title: "Online theorieles",
    kicker: "Pup of herplaatser, voor je begint",
    price: "€ 20",
    duration: "1 tot 1,5 uur, online",
    short:
      "Nog voordat je pup of herplaatser thuiskomt. Begin met de juiste kennis, zodat de eerste weken rustig en duidelijk verlopen.",
    body: [
      "Een online theorieles voor iedereen die een pup of herplaatser in huis haalt, of dat nog overweegt. Je leert een kalme, veilige start maken: hondentaal, basisbehoeften en de juiste volgorde van beweging, regels en affectie.",
      "Daarnaast praktisch advies voor de eerste weken: rust, slaap, wandelen, voeding en contact. Los te volgen, gewoon vanuit huis via een persoonlijke link.",
    ],
    points: [
      "Voor pup of herplaatser",
      "Een rustige, veilige start in huis",
      "Hondentaal en basisbehoeften",
      "De volgorde: beweging, regels, affectie",
      "Praktisch advies voor de eerste weken",
      "Ook geschikt als je nog twijfelt",
    ],
    image: "/images/real/hond-aan-lijn.jpg",
    imageAlt: "Hond die rustig aan de lijn meeloopt",
  },
];

export const prices = [
  { name: "Consult aan huis", note: "eerste consult, ca. 1,5 uur, incl. voor- en nazorg", price: "vanaf € 150" },
  { name: "Vervolgconsult", note: "wanneer een volgende stap nodig is", price: "vanaf € 100" },
  { name: "Puppycursus", note: "8 lessen, max 4 pups, kleine groepjes", price: "€ 200" },
  { name: "Jonge hondencursus", note: "6 lessen, max 4 honden", price: "€ 225" },
  { name: "Online theorieles", note: "pup of herplaatser, 1 tot 1,5 uur", price: "€ 20" },
];

export const about = {
  lead:
    "Dertig jaar werkte ik in de zorg voor mensen met een verstandelijke beperking. Daar leerde ik wat echt contact vraagt: geduld, rust en heel goed kijken.",
  body: [
    "Zelf had ik een lastige Duitse herder. Door hem ben ik alles gaan uitzoeken: consulten aan huis, bootcamptraining, boeken en cursussen. En ik raakte zo overtuigd van hoeveel rust en begrip kunnen doen, dat ik er mijn werk van wilde maken.",
    "Niet sturen op gedrag, maar op begrip. Met meerdere diploma's in hondenpsychologie en een rustige, respectvolle en positieve benadering. Ik help niet zozeer de hond, maar de mens erachter.",
    "Want achter gedrag zit altijd een reden. Mijn werk is die reden samen met jou vinden, zodat jij en je hond elkaar weer verstaan.",
  ],
  diplomas: [
    { src: "/images/real/diploma-1.jpg", alt: "Diploma hondenpsychologie Pieternel van Haaften" },
    { src: "/images/real/diploma-2.jpg", alt: "Diploma hondengedrag Pieternel van Haaften" },
    { src: "/images/real/diploma-3.jpg", alt: "Diploma hondengedragsconsulent Pieternel van Haaften" },
  ],
};
