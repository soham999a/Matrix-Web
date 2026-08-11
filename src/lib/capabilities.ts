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
        "AI Agents",
        "AI Copilots",
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
          "AI Copilots",
          "Enterprise AI",
          "AI Agents",
          "Natural-Language Analytics",
          "Decision Intelligence",
          "AI Automation",
          "AI Evaluation Systems",
          "Intelligent Reporting",
        ],
      },
      {
        label: "Research",
        items: [
          "Causal AI",
          "Self-Evolving Models",
          "Agentic Systems",
          "Multimodal Intelligence",
          "Human-AI Collaboration",
          "AI Reasoning",
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
        "ERP Integration",
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
          "Enterprise Architecture",
          "ERP Integration",
          "Ambient Intelligence",
          "Supply-Chain Intelligence",
          "Digital Transformation",
          "Operational Intelligence",
          "Decision Systems",
          "Digital Twins",
          "Knowledge Systems",
        ],
      },
      {
        label: "Products",
        items: [
          "Humming : Operational Intelligence Platform",
          "ARPS : Supply Chain Intelligence Platform",
          "Datum : Analytics Intelligence",
        ],
      },
      {
        label: "Research",
        items: [
          "Autonomous Procurement",
          "Demand Intelligence",
          "Multi-Agent Enterprise Systems",
          "Complex-System Modelling",
          "Computational Decision Systems",
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
          "Edge Computing",
          "Intelligent Sensors",
          "Embedded Intelligence",
          "Robotics",
          "Instrumentation",
          "Resonant Materials",
          "Photonic Devices",
          "Acoustic / Cymatics Instrumentation",
          "Experimental Computing Hardware",
          "Scientific Instruments",
          "Energy Prototypes",
          "Origami and Crafts",
        ],
      },
      {
        label: "Frequency · sound · cymatics",
        items: [
          "Cymatics Visualization Instruments",
          "Resonance Measurement Systems",
          "Acoustic Material Testing",
          "Vibroacoustic instrumentation",
          "Non-Destructive Testing",
          "Sound-Based Environmental Sensing",
          "Music Technology",
          "Resonance-Aware Architectural Systems",
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
        "AI Implementation",
      ],
    },
    sections: [
      {
        label: "Matrix consulting",
        items: [
          "AI Strategy",
          "Digital Transformation",
          "Technology Advisory",
          "Data & Analytics Consulting",
          "Enterprise Architecture",
          "AI Implementation",
          "Product Strategy",
          "Innovation Consulting",
          "Research Consulting",
          "Grant / R&D Advisory",
          "Institutional Consulting",
          "Knowledge Assets",
          "Training / Workshops",
        ],
      },
      {
        label: "Digital products",
        items: [
          "Micro-apps",
          "SaaS",
          "Dashboards",
          "Assessment Systems",
          "Knowledge Products",
          "AI Tools",
          "Enterprise Applications",
          "Custom Digital Solutions",
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
        items: ["Post-Smartphone Personal Intelligence"],
      },
      {
        label: "Future computing",
        items: [
          "Ambient Computing",
          "Post-Screen Interfaces",
          "Spatial Intelligence",
          "Human-Machine Symbiosis",
        ],
      },
      {
        label: "Civilization-scale R&D",
        items: [
          "Future Cities",
          "Civilization-Scale Intelligence",
          "Space Systems",
          "Orbital Infrastructure",
          "Zero-Gravity Experimentation",
          "Advanced Propulsion Research",
          "Dyson-Sphere Concepts",
          "Planetary Systems",
          "Long-Horizon Energy Architectures",
          "Future Governance",
          "Technological Civilization Scenarios",
          "Cosmic Intelligence",
          "Akashic Record",
          "Structural Intelligence",
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
        items: ["Mangrove : Sustainability Intelligence Platform"],
      },
      {
        label: "Research",
        items: [
          "Water Intelligence",
          "Groundwater",
          "Air Quality",
          "Carbon Intelligence",
          "Climate Intelligence",
          "Biodiversity",
          "Agriculture",
          "Food Security",
          "Environmental Monitoring",
          "Ecological Modelling",
          "Circular Economy",
          "Waste Intelligence",
        ],
      },
      {
        label: "Clean energy",
        items: [
          "Solar",
          "Storage",
          "Microgrids",
          "Energy Efficiency",
          "Waste-To-Energy",
          "Clean Industrial Systems",
          "Water-Energy Nexus",
          "Nature-Based Indigenous Solutions",
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
          "Social Capability Platforms",
          "Public-Sector Intelligence",
          "Community Development",
          "Civic Innovation",
          "Digital Inclusion",
          "Future-Of-Work Systems",
          "Human Capability Mapping",
          "Contemporary Philosophy",
          "Music Instruments",
          "Liberal Arts",
          "Creative Economy",
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
          "Quantum Computing",
          "Quantum Machine Learning",
          "Quantum Sensing",
          "Quantum Optimisation",
          "Quantum Biology",
          "Quantum Photonics",
          "Quantum Materials",
          "Resonant Materials",
          "Bio-photonics",
          "Nano-Bio Photonics",
          "Fundamental Energy Research",
        ],
      },
      {
        label: "Energy",
        items: [
          "Fusion Research",
          "Advanced Energy Materials",
          "Quantum Energy Systems",
          "Novel Energy Conversion",
          "Photonic Energy Systems",
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
          "Human Intelligence",
          "IQ / EQ / SQ / AQ",
          "Human Capability Assessment",
          "Career Intelligence",
          "Human Development",
          "Cognitive Profiling",
          "Human-AI Collaboration",
        ],
      },
      {
        label: "MindMuse · creative intelligence",
        items: [
          "Music",
          "Art",
          "Creative Cognition",
          "Knowledge Creation",
          "Generative Creativity",
          "Human-Machine Creativity",
        ],
      },
      {
        label: "Liberal Arts",
        items: [
          "Philosophy",
          "History",
          "Anthropology",
          "Civilization Studies",
          "Literature",
          "Arts",
          "Cultural Systems",
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
