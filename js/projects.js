 /* ==========================================================
   projects.js (data) — single source of truth for all projects.
   Used by: home page cards (featured ones) and the Projects page
   (filter + sort). Plain JS instead of JSON so it also works when
   the site is opened directly from the file system.
 
   Fields
   - filter:   group used by the filter buttons ("product" | "ux" | "3d")
   - category: label shown on the card
   - date:     YYYY-MM, used for sorting  (TODO: replace with real dates)
   - featured: true = shown in "Selected Projects" on the home page
   - cover:    image used on the home card
   ========================================================== */
 
const IMG = "assets/images/projects/";
const SELECTED_IMG = "assets/images/selected-work/";
const PROJECTS = [
  {
    id: 1,
    title: "Travel Phone Holder",
    filter: "product",
    category: "Product Design",
    date: "2025-03",
    featured: true,
    selected: true,
    thumbnail: SELECTED_IMG + "phone-holder-selected.webp",
    summary: "A compact 3D-printed phone holder for comfortable, practical, hands-free travel.",
    concept:
      "A compact, adjustable phone holder designed for travelers who need hands-free access to their devices. The design adapts to different environments, including luggage, tables, and airplane seats, while focusing on portability and stability.",
    process: [
      "Research", "Sketching", "3D Modeling", "Joint Development",
      "3D Printing", "Prototype Testing", "Design Refinement",
    ],
    details: "",
    tools: ["Blender", "Autodesk Fusion", "3D Printing"],
    cover: { src: IMG + "phone-holder-1.webp", alt: "3D-printed travel phone holder attached to a suitcase handle" },
    images: [
      { src: IMG + "phone-holder-1.webp", alt: "Phone holder mounted on a suitcase handle holding a phone" },
      { src: IMG + "phone-holder-2.webp", alt: "Close-up of the phone holder gripping a phone" },
    ],
  },
  {
    id: 2,
    title: "Nabeeh",
    filter: "ux",
    category: "Smart Safety Concept",
    date: "2025-05",
    featured: true,
    selected: true,
    thumbnail: SELECTED_IMG + "nabeeh-selected.webp",
    summary: "A digital twin concept that detects camel crossings and alerts drivers to nearby hazards.",
    concept:
      "NABEEH is a digital twin-based road safety concept designed to reduce camel-vehicle collisions on Saudi highways. The system uses real-time detection and a mobile application to warn drivers of nearby hazards through clear visual and audio alerts.",
    process: [
      "Problem Identification", "User Research", "Benchmarking",
      "UI/UX Design", "Interactive Prototyping", "Usability Testing",
    ],
    details:
      "Developed an interactive mobile prototype featuring live risk maps, audio and visual alerts, hazard reporting, bilingual support, and dark mode to improve accessibility and minimize driver distraction.",
    tools: ["Figma", "Maze", "User Surveys", "Benchmarking"],
    cover: { src: IMG + "nabeeh-1.png", alt: "Nabeeh infographic showing how the camel detection system works" },
    images: [
      { src: IMG + "nabeeh-1.png", alt: "Nabeeh infographic: from camel detection to driver alert" },
    ],
  },
  {
    id: 3,
    title: "Light of the Stars",
    filter: "3d",
    category: "Game Development",
    date: "2025-09",
    featured: true,
    selected: true,
    thumbnail: SELECTED_IMG + "light-of-the-stars-selected.webp",
    summary: "Follow the stars through an atmospheric 3D journey inspired by the desert landscape of AlUla.",
    concept:
      "Light of the Stars is an exploration-based 3D game set in a nighttime desert inspired by AlUla. Players guide a lost traveler through the environment, collecting six stars to unlock the final path to safety. The experience combines environmental storytelling, lighting, and interactive gameplay.",
    process: [
      "Story Development", "Environment Modeling", "Unity Integration",
      "Gameplay Programming", "Lighting & Audio", "Testing",
    ],
    details: "",
    tools: ["Blender", "Unity", "C#"],
    cover: { src: IMG + "light-of-the-stars-1.webp", alt: "Red jeep and a traveler in a desert camp from the game" },
    images: [
      { src: IMG + "light-of-the-stars-1.webp", alt: "Game scene: a traveler standing near a red jeep in the desert" },
      { src: IMG + "light-of-the-stars-2.webp", alt: "Game scene: red jeep and a tent with smoke at night" },
    ],
  },
  {
    id: 4,
    title: "MushRoomy Restaurant",
    filter: "3d",
    category: "3D Environment",
    date: "2025-11",
    featured: false,
    summary: "A fantasy mushroom-shaped restaurant with soft pastel colors and a cozy, magical mood.",
    concept:
      "MushRoomy is a fantasy-themed restaurant inspired by nature and mushroom shapes. The design combines soft pastel colors, organic forms, and playful details to create a cozy, magical dining environment.",
    process: [
      "Concept Development", "3D Modeling", "Materials & Texturing",
      "Lighting", "Rendering",
    ],
    details: "",
    tools: ["Blender"],
    cover: { src: IMG + "photo6-mushroomy.webp", alt: "Mushroom-shaped restaurant surrounded by trees at night" },
    images: [
      { src: IMG + "photo6-mushroomy.webp", alt: "MushRoomy restaurant entrance with two giant mushrooms" },
      { src: IMG + "photo7-mushroomy.webp", alt: "MushRoomy restaurant archway and dining area" },
    ],
  },
  {
    id: 5,
    title: "Night Wolf",
    filter: "product",
    category: "Physical Prototype",
    date: "2026-01",
    featured: false,
    summary: "A wearable wolf head built from cardboard, wire, and paper mâché.",
    concept:
      "Night Wolf is a wearable character head prototype inspired by a fantasy wolf character. The project explores how cardboard and simple crafting materials can be transformed into a detailed three-dimensional form through structural design and surface finishing.",
    process: [
      "Ideation & Sketching", "Internal Structure", "Facial Features",
      "Surface Development", "Painting & Finishing",
    ],
    details:
      "Developed a lightweight cardboard structure reinforced with wire, then built the facial features using layered cardboard. Paper mâché was applied to refine the shape and create a smoother surface before painting.",
    tools: ["Cardboard", "Paper Mâché", "Wire", "Hot Glue Gun", "Craft Knife", "Acrylic Paint & Brushes"],
    cover: { src: IMG + "photo8-nightwolf1.webp", alt: "Finished black Night Wolf head" },
    images: [
      { src: IMG + "photo8-nightwolf1.webp", alt: "Finished black Night Wolf head" },
      { src: IMG + "photo9-nightwolf2.webp", alt: "Night Wolf head in a natural cardboard finish" },
      { src: IMG + "photo10-nightwolf3.webp", alt: "Night Wolf head in progress" },
    ],
  },
];
