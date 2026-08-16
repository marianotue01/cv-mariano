/*
==================================================
File: data.js
Summary:
- Input: None; this file defines static CV and career data.
- Process: Provides structured information used across the CV PoC for:
  1. AI prompts
  2. UI rendering
  3. Component display
- Output: Exported constants representing About, Core Competencies, Experience, Certifications, Education, and Languages.
==================================================
*/

// -------------------------------------------------
// About section
// Description: A detailed narrative summary of Mariano's professional background, skills, and personal details.
export const about = `Senior Product Leader with 25+ years of experience leading enterprise portfolios, defining product strategy, and delivering AI-enabled platforms across Healthcare, Financial Services, Energy, and Consulting. Proven track record of translating business strategy into scalable products by leading global cross-functional teams and complex digital transformation initiatives. Recent work focuses on Portfolio Management, Knowledge Graphs, Graph RAG, Enterprise AI, data platforms, and LLM-powered solutions. Strong expertise in Product Strategy, Data Governance, Enterprise Architecture, and stakeholder management, with a consistent focus on delivering measurable business outcomes through innovation, data, and technology. Based in Slovakia. Open to relocation.
Italian passport. Based in Poland but willing to relocate.
Born in Argentina, holds dual citizenship (Italian and Argentinian), and is a Systems Engineer.
As of 2025, he is 46 years old.`;

// -------------------------------------------------
// Core Competencies
// Description: Key professional skills and abilities summarized as an array of strings.
export const coreCompetencies = [
  "Proven ability to communicate with impact, engaging and influencing both business partners and client stakeholders to foster alignment and drive collaboration.",
  "Extensive experience in Product Lifecycle Management, leveraging Agile methodologies and tools to deliver continuous value.",
  "Strong balance of technical expertise and strategic business insight, enabling effective decision-making across product development.",
  "Successful track record of leading globally distributed teams across multiple time zones with a focus on collaboration and delivery.",
  "Experienced in formal and informal coaching, helping team members reach their full potential through ongoing mentorship and on-the-job development."
];

// -------------------------------------------------
// Experience
// Description: Work history, roles, periods, and responsibilities.
export const experience = [
  {
    company: "Takeda",
    country: "Slovakia",
    role: "Senior Product Manager / Portfolio Manager",
    period: "Dec 2025 – Present",
    description: [
      "Lead Product Management for Takeda’s enterprise Knowledge Graph and Agentic AI platform, defining product vision, strategy, roadmap and operating model across Manufacturing, Quality and Supply Chain, with a roadmap extending to 7+ business domains",
      "Own product strategy and end-to-end lifecycle, translating business use cases into prioritized capabilities across Knowledge Graphs, Graph RAG, LLMs and agentic AI, from discovery and architecture through MVP delivery.",
      "Reframed the Knowledge Graph initiative from architecture-led implementation to a structured POC → MVP strategy, identifying gaps in ontology ownership, relationships, lineage and governance, and reducing downstream implementation risk.",
      "Shaped and prioritized AI use cases across Manufacturing, Quality and Supply Chain, translating business needs into actionable product requirements and connecting them to opportunities such as deviation management, CAPA effectiveness, risk detection and batch genealogy.",
      "Lead Technology Demand and Portfolio Management, shaping and prioritizing strategic initiatives based on business value, strategic alignment, risk, dependencies, feasibility and organizational capacity, ensuring investment decisions are aligned with enterprise priorities.",
      "Established a standardized demand governance framework spanning problem definition, prioritization, funding, architecture review and delivery, improving portfolio transparency, demand quality and decision-making while reducing rework and enabling stronger alignment between business needs and technology investments."
    ],
  },
  {
    company: "EY",
    country: "Poland",
    role: "Senior Product Manager / People Manager",
    period: "Sept 2022 – Nov 2025",
    description: [
      "Led vision, strategy, and multi-year roadmap for a global financial reporting and research platform, serving clients in 40+ countries.",
      "Coordinated and mentored distributed Agile teams (up to 25 members across 5 regions).",
      "Designed and implemented global taxonomy and metadata governance in Atlas and Adobe Experience Manager, standardizing 2,500+ terms and automating validation.",
      "Led CMS migration from Ovitas to Adobe Experience Manager, integrating scripts and Azure DevOps pipelines; increased publishing efficiency by 35%.",
      "Established governance workflows using AEM, Azure AD, RBAC, and Atlas, ensuring regulatory compliance.",
      "Defined and monitored KPIs (NPS, adoption, defect rate) using Power BI dashboards."
    ],
  },
  {
    company: "J.P. Morgan",
    country: "Argentina",
    role: "Senior Product Manager / People Manager",
    period: "July 2021 – Aug 2022",
    description: [
      "Led product strategy and execution for global network products, aligning business, engineering and operations teams to improve data-center integration, resilience and operational efficiency.",
      "Delivered Logical Build Readiness, an event-driven product for rack provisioning that reduced preparation time by 25% and increased data-center readiness accuracy to >99%.",
      "Led the modernization of legacy data capabilities, enabling near-real-time ingestion, transformation and monitoring across network data sources and reducing data latency by ~35%.",
      "Implemented a new data governance framework, improving data quality and compliance with regulatory requirements.",],
  },
  {
    company: "ExxonMobil",
    country: "Argentina",
    role: "Senior Product Manager",
    period: "Apr 2013 – June 2021",
    description: [
      "Led development of reusable platforms and building blocks, improving adoption and consistency.",
      "Managed a portfolio of 5 products with 95% on-time delivery.",
      "Drove platform standardization and scalability, reducing errors by ~20%.",
      "Collaborated cross-functionally to define strategy, enhance adoption, and implement continuous improvements.",
      "Developed License Automation Tool (LAT), a hybrid solution reducing manual license management effort by ~30%."
    ],
  },
  {
    company: "ExxonMobil",
    country: "Argentina",
    role: "Senior Scrum Master (Manager)",
    period: "Mar 2008 – Mar 2013",
    description: [
      "Guided Agile/Scrum adoption, improving sprint completion by 20–25%.",
      "Served as servant leader and Agile coach, facilitating ceremonies and removing impediments.",
      "Tracked metrics, analyzed incidents, and delivered training; reduced recurring incidents by ~15%."
    ],
  },
  {
    company: "IBM",
    country: "Argentina",
    role: "Supervisor / Team Lead / Technical Writer",
    period: "Oct 2004 – Feb 2008",
    description: [
      "Built and led Mainframe system programmers team, ensuring staffing and training.",
      "Administered Z/OS systems: upgrades, fixes, monitoring, and automation.",
      "Oversaw SMP, JCL, TSO/E, and batch processes.",
      "Created comprehensive technical documentation for Change & Problem Management, Capacity Planning, SLA, DRP, etc.",
      "Collaborated with teams to standardize documentation and improve usability."
    ],
  }
];

// -------------------------------------------------
// Certifications
// Description: Professional certifications earned by Mariano.
export const certifications = [
  "Certified SAFe® 6 Product Owner/Product Manager",
  "Certified Scrum Product Owner (CSPO)",
  "Scrum Master Certified (SMC)",
  "PMI Agile Certified Practitioner (PMI-ACP)",
  "ITIL 3.0 Fundamentals",
  "Microsoft Certified: Azure Fundamentals"
];

// -------------------------------------------------
// Education
// Description: Academic background of Mariano.
export const education = "Bachelor's and Master’s degrees in Systems Engineering – Universidad Tecnológica Nacional, Argentina";

// -------------------------------------------------
// Languages
// Description: Languages spoken by Mariano with proficiency levels.
export const languages = [
  "English — C1 (Proficient)",
  "Spanish — Native (Mother tongue)",
  "Portuguese — A1 (Beginner)"
];
