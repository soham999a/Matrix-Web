export type CapabilitySection = {
  label: string;
  items: string[];
};

export type Capability = {
  slug: string;
  numeral: string;
  title: string;
  tagline: string;
  description: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  sections: CapabilitySection[];
};

export const CAPABILITIES: Capability[] = [
  {
    slug: "ai",
    numeral: "I",
    title: "Artificial Intelligence",
    tagline: "Intelligence that works, and understands itself.",
    description:
      "The applied and exploratory core of the studio. We build copilots, agents, and evaluation systems that earn their place in real operations — and we study the harder questions of causal, self-evolving, and multimodal intelligence in parallel.",
    seo: {
      title: "Artificial Intelligence — Copilots, Agents & AI Research",
      description:
        "Matrix capability I: enterprise AI, AI copilots, custom agents, natural-language analytics, decision intelligence, and research into causal, agentic, and self-evolving intelligence.",
      keywords: [
        "Matrix AI",
        "artificial intelligence",
        "AI agents",
        "AI copilots",
        "enterprise AI",
        "decision intelligence",
        "causal AI",
        "agentic systems",
        "AI evaluation",
      ],
    },
    sections: [
      {
        label: "Commercial practice",
        items: [
          "AI copilots",
          "Enterprise AI",
          "AI agents",
          "Natural-language analytics",
          "Decision intelligence",
          "AI automation",
          "AI evaluation systems",
          "Intelligent reporting",
        ],
      },
      {
        label: "Research",
        items: [
          "Causal AI",
          "Self-evolving models",
          "Agentic systems",
          "Multimodal intelligence",
          "Human-AI collaboration",
          "AI reasoning",
        ],
      },
    ],
  },
  {
    slug: "systems",
    numeral: "II",
    title: "Systems",
    tagline: "Architectures that outlive their authors.",
    description:
      "Enterprise-grade intelligence built on the CES-QN framework — from ERP and supply-chain platforms to digital twins and decision systems. Humming, ARPS, and Datum are the first manifestations of a single coherent architecture.",
    seo: {
      title: "Systems — Enterprise Architecture, ARPS & Operational Intelligence",
      description:
        "Matrix capability II: enterprise architecture, ERP and supply-chain intelligence, digital twins, decision systems — anchored by the Humming, ARPS, and Datum platforms.",
      keywords: [
        "Matrix systems",
        "enterprise architecture",
        "supply chain intelligence",
        "operational intelligence",
        "ERP integration",
        "digital twins",
        "decision systems",
        "Humming",
        "ARPS",
        "Datum",
      ],
    },
    sections: [
      {
        label: "Commercial practice",
        items: [
          "Enterprise architecture",
          "ERP integration",
          "APS",
          "Supply-chain intelligence",
          "Digital transformation",
          "Operational intelligence",
          "Decision systems",
          "Digital twins",
          "Knowledge systems",
        ],
      },
      {
        label: "Products",
        items: [
          "Humming — Operational Intelligence Platform",
          "ARPS — Supply Chain Intelligence Platform",
          "Datum — Analytics Intelligence",
        ],
      },
      {
        label: "Research",
        items: [
          "Autonomous procurement",
          "Demand intelligence",
          "Multi-agent enterprise systems",
          "Complex-system modelling",
          "Computational decision systems",
        ],
      },
    ],
  },
  {
    slug: "engineering",
    numeral: "III",
    title: "Engineering",
    tagline: "Where intelligence meets the physical.",
    description:
      "We design and prototype the instruments, devices, and materials that sense, actuate, and embody intelligence — from edge computing and robotics to photonics and the quiet mathematics of cymatics.",
    seo: {
      title: "Engineering — Robotics, Sensors & Cymatics Instruments",
      description:
        "Matrix capability III: edge computing, intelligent sensors, embedded intelligence, robotics, photonic devices, scientific instruments, and resonance and cymatics research.",
      keywords: [
        "Matrix engineering",
        "edge computing",
        "intelligent sensors",
        "embedded intelligence",
        "robotics",
        "cymatics",
        "photonic devices",
        "scientific instruments",
        "vibroacoustic instrumentation",
      ],
    },
    sections: [
      {
        label: "Engineering · products & prototypes",
        items: [
          "Edge computing",
          "Intelligent sensors",
          "Embedded intelligence",
          "Robotics",
          "Instrumentation",
          "Resonant materials",
          "Photonic devices",
          "Acoustic / cymatics instrumentation",
          "Experimental computing hardware",
          "Scientific instruments",
          "Energy prototypes",
          "Origami and crafts",
        ],
      },
      {
        label: "Frequency · sound · cymatics",
        items: [
          "Cymatics visualization instruments",
          "Resonance measurement systems",
          "Acoustic material testing",
          "Vibroacoustic instrumentation",
          "Non-destructive testing",
          "Sound-based environmental sensing",
          "Music technology",
          "Resonance-aware architectural systems",
        ],
      },
    ],
  },
  {
    slug: "consulting",
    numeral: "IV",
    title: "Consulting",
    tagline: "A bridge between where you are and what you intend.",
    description:
      "Strategic counsel and digital products for governments, institutions, and founders — from AI strategy and enterprise architecture to the micro-apps and dashboards that turn advice into working systems.",
    seo: {
      title: "Consulting — AI Strategy, Advisory & Digital Products",
      description:
        "Matrix capability IV: AI strategy, digital transformation, technology advisory, enterprise architecture, research and grant counsel, plus custom digital products and micro-apps.",
      keywords: [
        "Matrix consulting",
        "AI strategy consulting",
        "digital transformation",
        "technology advisory",
        "data analytics consulting",
        "enterprise architecture",
        "innovation consulting",
        "AI implementation",
      ],
    },
    sections: [
      {
        label: "Matrix consulting",
        items: [
          "AI strategy",
          "Digital transformation",
          "Technology advisory",
          "Data & analytics consulting",
          "Enterprise architecture",
          "AI implementation",
          "Product strategy",
          "Innovation consulting",
          "Research consulting",
          "Grant / R&D advisory",
          "Institutional consulting",
          "Knowledge assets",
          "Training / workshops",
        ],
      },
      {
        label: "Digital products",
        items: [
          "Micro-apps",
          "SaaS",
          "Dashboards",
          "Assessment systems",
          "Knowledge products",
          "AI tools",
          "Enterprise applications",
          "Custom digital solutions",
        ],
      },
    ],
  },
  {
    slug: "futurology",
    numeral: "V",
    title: "Futurology",
    tagline: "The future is a design constraint.",
    description:
      "Long-horizon research into the interfaces, infrastructures, and institutions of the next century — from post-smartphone intelligence and ambient computing to civilization-scale systems, space infrastructure, and the architecture of future governance.",
    seo: {
      title: "Futurology — Post-Smartphone AI & Civilization-Scale R&D",
      description:
        "Matrix capability V: Neo post-smartphone personal intelligence, ambient and spatial computing, future cities, space systems, and civilization-scale research.",
      keywords: [
        "Matrix futurology",
        "post-smartphone intelligence",
        "ambient computing",
        "spatial intelligence",
        "future computing",
        "space systems",
        "civilization-scale intelligence",
        "future governance",
        "Neo",
      ],
    },
    sections: [
      {
        label: "Neo",
        items: ["Post-smartphone personal intelligence"],
      },
      {
        label: "Future computing",
        items: [
          "Ambient computing",
          "Post-screen interfaces",
          "Spatial intelligence",
          "Human-machine symbiosis",
        ],
      },
      {
        label: "Civilization-scale R&D",
        items: [
          "Future cities",
          "Civilization-scale intelligence",
          "Space systems",
          "Orbital infrastructure",
          "Zero-gravity experimentation",
          "Advanced propulsion research",
          "Dyson-sphere concepts",
          "Planetary systems",
          "Long-horizon energy architectures",
          "Future governance",
          "Technological civilization scenarios",
          "Cosmic intelligence",
          "Akashic record",
          "Structural intelligence",
        ],
      },
    ],
  },
  {
    slug: "sustainability",
    numeral: "VI",
    title: "Sustainability",
    tagline: "Intelligence for the living systems we depend on.",
    description:
      "Mangrove — our sustainability intelligence platform — sits above a long research programme in water, carbon, climate, biodiversity, and clean energy. The environment is not a sector; it is the substrate.",
    seo: {
      title: "Sustainability — Mangrove, Climate & Clean Energy Intelligence",
      description:
        "Matrix capability VI: Mangrove sustainability platform, water, carbon and climate intelligence, biodiversity, ecological modelling, and clean energy research.",
      keywords: [
        "Matrix sustainability",
        "Mangrove",
        "carbon intelligence",
        "water intelligence",
        "climate intelligence",
        "clean energy",
        "biodiversity",
        "circular economy",
        "ESG platform",
      ],
    },
    sections: [
      {
        label: "Platform",
        items: ["Mangrove — Sustainability Intelligence Platform"],
      },
      {
        label: "Research",
        items: [
          "Water intelligence",
          "Groundwater",
          "Air quality",
          "Carbon intelligence",
          "Climate intelligence",
          "Biodiversity",
          "Agriculture",
          "Food security",
          "Environmental monitoring",
          "Ecological modelling",
          "Circular economy",
          "Waste intelligence",
        ],
      },
      {
        label: "Clean energy",
        items: [
          "Solar",
          "Storage",
          "Microgrids",
          "Energy efficiency",
          "Waste-to-energy",
          "Clean industrial systems",
          "Water-energy nexus",
          "Nature-based indigenous solutions",
        ],
      },
    ],
  },
  {
    slug: "education",
    numeral: "VII",
    title: "Education & Social Innovation",
    tagline: "Capability is the original infrastructure.",
    description:
      "QiDS — the Quadrant Intelligence Development System — anchors this capability. Around it, the studio works on public-sector intelligence, civic innovation, digital inclusion, and the liberal arts as instruments of human capability.",
    seo: {
      title: "Education & Social Innovation — QiDS & Civic Intelligence",
      description:
        "Matrix capability VII: QiDS human intelligence platform, public-sector intelligence, civic innovation, digital inclusion, and future-of-work systems.",
      keywords: [
        "Matrix education",
        "QiDS",
        "social innovation",
        "public sector intelligence",
        "civic innovation",
        "digital inclusion",
        "future of work",
        "human capability",
        "liberal arts",
      ],
    },
    sections: [
      {
        label: "QiDS",
        items: ["Design & Human Intelligence"],
      },
      {
        label: "Possibilities under study",
        items: [
          "Social capability platforms",
          "Public-sector intelligence",
          "Community development",
          "Civic innovation",
          "Digital inclusion",
          "Future-of-work systems",
          "Human capability mapping",
          "Contemporary philosophy",
          "Music instruments",
          "Liberal arts",
          "Creative economy",
        ],
      },
    ],
  },
  {
    slug: "quanta",
    numeral: "VIII",
    title: "Quanta",
    tagline: "The smallest scales are the next frontier.",
    description:
      "Quantum science and energy research, built on the CES-QN framework and supported by our AI, systems, and engineering disciplines — from quantum computing and sensing to bio-photonics and the fundamental physics of energy.",
    seo: {
      title: "Quanta — Quantum Computing, Photonics & Energy Research",
      description:
        "Matrix capability VIII: quantum computing, quantum machine learning and sensing, quantum photonics and materials, bio-photonics, and fundamental energy research.",
      keywords: [
        "Matrix Quanta",
        "quantum computing",
        "quantum machine learning",
        "quantum sensing",
        "quantum photonics",
        "quantum materials",
        "bio-photonics",
        "fusion research",
        "CES-QN",
      ],
    },
    sections: [
      {
        label: "Primary",
        items: ["Quanta"],
      },
      {
        label: "Supporting disciplines",
        items: ["AI", "Systems", "Engineering"],
      },
      {
        label: "Research",
        items: [
          "Quantum computing",
          "Quantum machine learning",
          "Quantum sensing",
          "Quantum optimisation",
          "Quantum biology",
          "Quantum photonics",
          "Quantum materials",
          "Resonant materials",
          "Bio-photonics",
          "Nano-bio photonics",
          "Fundamental energy research",
        ],
      },
      {
        label: "Energy",
        items: [
          "Fusion research",
          "Advanced energy materials",
          "Quantum energy systems",
          "Novel energy conversion",
          "Photonic energy systems",
        ],
      },
    ],
  },
  {
    slug: "design",
    numeral: "IX",
    title: "Design & Human Intelligence",
    tagline: "The human is the product.",
    description:
      "QiDS assesses and develops human capability; MindMuse explores the creative and musical intelligence of the human-machine pair; and a liberal-arts core keeps the studio humanist to its centre.",
    seo: {
      title: "Design & Human Intelligence — QiDS, MindMuse & Liberal Arts",
      description:
        "Matrix capability IX: QiDS human intelligence assessment, MindMuse creative intelligence, IQ/EQ/SQ/AQ profiling, and the liberal arts that keep intelligence human.",
      keywords: [
        "Matrix design",
        "human intelligence",
        "QiDS",
        "MindMuse",
        "IQ EQ SQ AQ",
        "human capability assessment",
        "cognitive profiling",
        "creative intelligence",
        "liberal arts",
      ],
    },
    sections: [
      {
        label: "QiDS · primary product",
        items: [
          "Human intelligence",
          "IQ / EQ / SQ / AQ",
          "Human capability assessment",
          "Career intelligence",
          "Human development",
          "Cognitive profiling",
          "Human-AI collaboration",
        ],
      },
      {
        label: "MindMuse · creative intelligence",
        items: [
          "Music",
          "Art",
          "Creative cognition",
          "Knowledge creation",
          "Generative creativity",
          "Human-machine creativity",
        ],
      },
      {
        label: "Liberal arts",
        items: [
          "Philosophy",
          "History",
          "Anthropology",
          "Civilization studies",
          "Literature",
          "Arts",
          "Cultural systems",
          "Semiotics",
          "Aesthetics",
          "Musicology",
        ],
      },
    ],
  },
];

export function getCapability(slug: string): Capability | undefined {
  return CAPABILITIES.find((d) => d.slug === slug);
}
