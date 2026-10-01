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

/**
 * FAQ content per capability — rendered on each capability page and emitted
 * as FAQPage JSON-LD. Question-shaped content is what featured snippets,
 * People Also Ask, Google AI Overviews, and chatbot citations quote, so each
 * answer stands alone without needing the rest of the page for context.
 */
export type CapabilityFaq = { q: string; a: string };

export const CAPABILITY_FAQS: Record<string, CapabilityFaq[]> = {
  ai: [
    {
      q: "What does an applied AI studio build for enterprises?",
      a: "An applied AI studio builds copilots, custom AI agents, natural-language analytics, decision intelligence, and evaluation systems that earn their place in real operations — designed around the reasoning layer first, with the product interface derived from it.",
    },
    {
      q: "What is decision intelligence?",
      a: "Decision intelligence is the discipline of designing systems that help organisations make consequential decisions well — combining causal reasoning, multi-agent coordination, and adaptive inference so recommendations can be trusted, audited, and improved over time.",
    },
    {
      q: "Why does Matrix research causal and self-evolving AI?",
      a: "Because deployed intelligence must eventually explain itself. Matrix pairs commercial AI delivery with research into causal, agentic, and self-evolving intelligence so that what ships today is grounded in what will still be true tomorrow.",
    },
  ],
  systems: [
    {
      q: "What is enterprise intelligence architecture?",
      a: "Enterprise intelligence architecture is the coherent design of platforms, data, and reasoning layers so that ERP, supply-chain, and operational systems share one foundation instead of accumulating disconnected tools. Matrix anchors this work in its CES-QN research framework.",
    },
    {
      q: "What is the CES-QN framework?",
      a: "CES-QN (Coherence · Systems · Quantified Reasoning) is Matrix's original, conservation-law-grounded systems framework — drawing on Noether's theorem, the Constructal Law, and West's scaling principles — for AI systems that reason with physical and causal integrity. It is published on Zenodo under open access.",
    },
    {
      q: "What is a digital twin in supply-chain intelligence?",
      a: "A digital twin is a live, simulated model of a supply chain used to test decisions before committing them. Within Matrix's ARPS platform, digital twins combine with risk fusion and graph-based contagion modelling to make procurement resilient.",
    },
  ],
  engineering: [
    {
      q: "What does platform engineering for AI products involve?",
      a: "Platform engineering for AI covers SaaS infrastructure, API architecture, container-based hybrid compute, and the integration of neuromorphic and quantum capabilities — the invisible layer that lets intelligence systems run reliably at enterprise scale.",
    },
    {
      q: "How does Matrix approach SaaS infrastructure?",
      a: "Matrix builds SaaS platforms on shared reasoning infrastructure — capabilities developed for one product become foundational for the next, an approach formalised in its Omega Model architecture so research investment compounds across the portfolio.",
    },
    {
      q: "Why does an AI studio build its own platform engineering practice?",
      a: "Because intelligence is only as trustworthy as the substrate it runs on. Owning the engineering practice keeps evaluation, deployment, and operational monitoring inside the same architectural discipline as the models themselves.",
    },
  ],
  consulting: [
    {
      q: "What is AI readiness assessment?",
      a: "An AI readiness assessment measures how prepared an organisation is to deploy intelligence systems — its data availability, decision processes, governance, and operating model — and produces a prioritised, honest path to adoption rather than a generic transformation plan.",
    },
    {
      q: "How is applied AI advisory different from generic IT consulting?",
      a: "Applied AI advisory is grounded in running research and shipped platforms. Matrix's counsel draws on published frameworks (CES-QN, KALPA) and live products, so recommendations come from built systems, not slideware.",
    },
    {
      q: "Who does Matrix consult for?",
      a: "Enterprises, governments, universities, and institutions — across AI readiness, enterprise transformation, responsible AI governance, and technology strategy. Consulting is the primary entry point into Matrix's capability framework.",
    },
  ],
  futurology: [
    {
      q: "What is post-smartphone intelligence (NEO)?",
      a: "NEO is Matrix's long-horizon research programme into personal intelligence beyond the smartphone — ambient, context-aware systems where computing recedes into the environment instead of demanding a screen.",
    },
    {
      q: "What does a futurology practice actually do?",
      a: "It researches civilisation-scale decision systems, ambient cognition, and post-agentic intelligence — then translates those horizons into engineering choices that remain correct as conditions change. Matrix publishes this work as open-access preprints.",
    },
    {
      q: "What is field-based cognition?",
      a: "Field-based cognition is the research thesis that intelligence systems will move beyond discrete agents toward ambient, field-based architectures — where planning becomes traversal and the boundary between agent and environment dissolves. Matrix's 2026 preprint 'The Architecture of Intelligence' formalises the argument.",
    },
  ],
  sustainability: [
    {
      q: "What is sustainability intelligence?",
      a: "Sustainability intelligence applies AI to ESG measurement, climate risk, water intelligence, and compliance reporting — turning growing regulatory complexity into decision-grade, auditable intelligence.",
    },
    {
      q: "How is AI used for climate risk modelling?",
      a: "AI models climate risk by fusing multi-source data into scenario analysis and forward-looking risk estimates. Matrix's Mangrove platform researches carbon and water intelligence with the same evaluation rigour applied to its enterprise systems.",
    },
    {
      q: "Why does ESG reporting need intelligence systems?",
      a: "Because compliance obligations now outpace manual measurement. Intelligence systems make ESG data continuous, comparable, and decision-ready — the difference between reporting the past and managing the future.",
    },
  ],
  education: [
    {
      q: "What is holistic human intelligence development?",
      a: "Holistic human intelligence development develops capability across cognitive, emotional, social, and adaptive dimensions — IQ, EQ, SQ, and AQ together — rather than optimising test scores in isolation. Matrix's QiDS platform formalises this as an assessment-to-intervention lifecycle.",
    },
    {
      q: "What is the KALPA framework?",
      a: "KALPA (Knowledge · Arts · Liberal Practice) is Matrix's systemic framework for sustainable civilisational intelligence design — bridging technology with culture, ethics, creativity, and human flourishing. It grounds the studio's education and social innovation work.",
    },
    {
      q: "How does AI improve curriculum design?",
      a: "Curriculum intelligence uses AI to adapt learning paths to individual profiles while keeping human judgement in charge of what is worth learning — applied by Matrix to educational equity and institutional capability building through the KALPA framework.",
    },
  ],
  quanta: [
    {
      q: "What is quantum-inspired computation?",
      a: "Quantum-inspired computation applies quantum-mechanical principles to classical hardware to attack NP-hard optimisation problems. Matrix's Quantassical research develops quantum-classical hybrid methods that run on today's infrastructure.",
    },
    {
      q: "What is quantum magnetometry used for?",
      a: "NV-diamond quantum magnetometry senses magnetic fields with extreme precision — the foundation of Matrix's D1 research programme, with applications from materials inspection to biomedical sensing.",
    },
    {
      q: "Why does an applied AI studio research quantum systems?",
      a: "Because the next intelligence layer will need new substrates. Matrix's Quanta capability spans quantum-inspired computation, photonic secure communications, and neuromorphic integration — research-stage work that informs today's architecture decisions.",
    },
  ],
  design: [
    {
      q: "What is applied intelligence design?",
      a: "Applied intelligence design is the discipline that makes complex AI usable and trustworthy — human-centred interaction, information architecture, and visual identity for systems whose output people must be able to depend on.",
    },
    {
      q: "What is a design constitution?",
      a: "Matrix's design constitution is a binding visual operating system applied across every product and publication: Ink and Bone as ground, gold as the only permitted emphasis, a four-colour primary palette, and a documented typographic discipline.",
    },
    {
      q: "Why does trustworthy AI need design?",
      a: "Because trust is earned at the interface. A system that cannot be read, questioned, or understood will not be relied on — design is how intelligence becomes legible to the people who depend on it.",
    },
  ],
};
