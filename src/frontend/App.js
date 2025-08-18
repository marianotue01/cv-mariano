import React from "react";
import ChatBot from "../components/ChatBot"; // o ajustá el path según tu estructura
import ExperienceTimeline from "../components/ExperienceTimeline";
import "react-vertical-timeline-component/style.min.css";
import '../index.css';
import AudioPresentation from "../components/AudioPresentation";
import { Analytics } from "@vercel/analytics/react"


export default function AgileCV() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-900 bg-gray-50 min-h-screen relative">
      {/* Imagen en esquina superior derecha */}
      <img
        src="/4x4.jpg"
        alt="Foto de Mariano Tuero"
        className="
          absolute top-4 right-4
          w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32
          object-cover object-[center_20%]
          rounded-full border border-gray-300 shadow-md
        "
      />
      <header className="mb-8">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          Mariano Tuerco
          <AudioPresentation small /> {/* Podés pasarle una prop para versión compacta */}
        </h1>

        <p className="text-lg text-indigo-700 font-semibold">
          Senior Product Manager | Leader | Multilingual (ES/EN/PT)
        </p>
        <p className="text-sm text-gray-600">
          Warsaw, Poland | mariano.tuero@email.com
        </p>
        <p className="text-sm text-gray-600">
          +48 573 824 000 |{" "}
          <a
            href="https://linkedin.com/in/mtuero"
            className="text-indigo-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </header>

      <section className="mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-3 border-b border-indigo-600 pb-1">
          About
        </h2>
        <p>
        Accomplished Senior Product Manager and Agile Leader with 25+ years of experience delivering transformative solutions across financial services, energy, and IT. 
        Skilled at leading cross-functional teams, driving cloud integrations, microservices, and data governance initiatives that enhance efficiency and compliance. 
        Proven track record in mentoring teams, executing strategic roadmaps, and delivering measurable, high-impact results.
        Italian passport. Based in Poland but willing to relocate.
        </p>
      </section>

      <section className="mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-3 border-b border-indigo-600 pb-1">
          Core Competencies
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Proven ability to communicate with impact, engaging and influencing both business partners and client stakeholders to foster alignment and drive collaboration.
          </li>
          <li>
            Extensive experience in Product Lifecycle Management, leveraging Agile methodologies and tools to deliver continuous value.
          </li>
          <li>
            Strong balance of technical expertise and strategic business insight, enabling effective decision-making across product development.
          </li>
          <li>
            Successful track record of leading globally distributed teams across multiple time zones with a focus on collaboration and delivery.
          </li>
          <li>
            Experienced in formal and informal coaching, helping team members reach their full potential through ongoing mentorship and on-the-job development.
          </li>
        </ul>
      </section>

      <section className="mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-3 border-b border-indigo-600 pb-1">
          Experience
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">EY Poland | Senior Product Manager / People Manager</h3>
          <p className="text-sm text-blue-600 mb-2">[Sept 2022 – Present]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Technical Product Manager (Associate Director) - Led the vision, strategy, and multi-year roadmap for a global financial reporting and research platform serving internal and external clients across 40+ countries, aligning business objectives with user needs and technical feasibility. 
            </li>
            <li>
              Coordinated and mentored distributed Agile teams (up to 25 members across 5 regions), ensuring delivery of high-impact features within PI Planning cycles. 
            </li>
            <li>
              Designed and implemented global taxonomy and metadata governance in Atlas and Adobe Experience Manager, standardizing over 2,500 terms and automating metadata validation, reducing classification time by 30%. 
            </li>
            <li>
              Led the CMS migration from Ovitas to Adobe Experience Manager, integrating automated scripts and Azure DevOps pipelines, increasing publishing efficiency by 35% and reducing content errors. 
            </li>
            <li>
              Established governance workflows for content and metadata using AEM, Azure AD, RBAC, and Atlas, ensuring adherence to international regulatory standards. 
            </li>
            <li>
              Defined and monitored key KPIs (NPS, adoption rate, defect rate) using Power BI dashboards, enabling data-driven product decisions.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">J.P. Morgan | Senior Product Manager / People Manager</h3>
          <p className="text-sm text-blue-600 mb-2">[July 2021 – Aug 2022]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Global Network Services Product Manager (Executive Director) - Led the strategy and execution for global network products, ensuring integration and operational efficiency across data centers. 
            </li>
            <li>
              Delivered Logical Build Readiness, an event-driven architecture for rack provisioning, enhancing resilience, reducing preparation time by 25%, and increasing data center readiness accuracy to more than 99%. 
            </li>
            <li>
              Directed NETL microservices in Java/Python, containerized with Docker and orchestrated via Kubernetes, for ingestion, transformation, and exposure of legacy data (syslog, SNMP, flat files); leveraged Kafka Connect/Streams, REST APIs, MongoDB, and Splunk, reducing latency by ~35% and improving real-time monitoring and alerting. 
            </li>
            <li>
              Implemented DART (Device Automation, Reporting, and Tasking), reducing manual network management errors by ~30% and streamlining operational workflows. 
            </li>
            <li>
              Managed and mentored engineering teams, promoting skills, career growth, and high performance.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">ExxonMobil | Senior Product Manager</h3>
          <p className="text-sm text-blue-600 mb-2">[Apr 2013 – June 2021]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Senior Product Manager (IT Manager) - Led the development of innovative solutions and a unified set of building blocks, enabling centralized self-service platforms, reusable libraries, technical guidance, and standards, improving adoption and consistency across teams. 
            </li>
            <li>
              Managed a portfolio of five products, ensuring alignment with business objectives, technical excellence, and seamless integration, achieving on-time delivery for 95% of planned releases. 
            </li>
            <li>
              Drove platform standardization and scalability, fostering consistency in architecture and reducing implementation errors by ~20%. 
            </li>
            <li>
              Collaborated cross-functionally with engineering, leadership, and stakeholders to define product strategy, enhance adoption, and implement continuous improvements. 
            </li>
            <li>
              Accountable for the end-to-end development of the License Automation Tool (LAT), a hybrid on-prem/cloud solution that streamlines concurrent license installation; reduced manual license server management effort by ~30% and enabled users to install licenses efficiently via a drag-and-drop interface.
            </li>
          </ul>
          <p className="text-sm text-blue-600 mb-2">[Mar 2008 – Mar 2013]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Senior Scrum Master (Manager) - Guided teams and the organization in adopting Agile/Scrum methodologies, fostering self-organization and improving delivery efficiency, resulting in 20–25% faster sprint completion. 
            </li>
            <li>
              Served as a servant leader and Agile Coach, removing impediments, facilitating Scrum ceremonies, and coaching multiple teams across the organization to enhance collaboration, productivity, and Agile maturity; supported Product Owners in backlog prioritization and refinement, improving delivery predictability. 
            </li>
            <li>
              Provided value to IT leadership by tracking credible metrics, analyzing incident trends, and delivering training on Problem & Change Management; facilitated Major Incident Review meetings using Root Cause Analysis, reducing recurring incidents by ~15% and improving overall service reliability.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">IBM | Supervisor / Team Lead / Technical Writer</h3>
          <p className="text-sm text-blue-600 mb-2">[Oct 2004 – Feb 2008]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Mainfram System Programmer Z/OS Supervisor - Responsible for building and developing the Mainframe system programmers’ team, ensuring proper staffing, training, and skills development to maintain operational excellence. 
            </li>
            <li>
              Led administration and support of Z/OS systems, including installation of software products, application of security fixes, system upgrades, monitoring, and automation of Z/OS/390 operations. 
            </li>
            <li>
              Oversaw SMP, JCL, TSO/E, and batch processes, ensuring system reliability, high availability, and compliance with internal standards.
            </li>
          </ul>
          <p className="text-sm text-blue-600 mb-2">[Sep 2001 – Sep 2004]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Technical Writer - Developed comprehensive technical documentation adhering to organizational standards, covering Change & Problem Management, Capacity Planning, SLA, Disaster Recovery, and other IT operations processes. 
            </li>
            <li>
              Contributed as a Technical Writer on multiple outsourcing projects, ensuring clarity, accuracy, and compliance with contractual and regulatory requirements. 
            </li>
            <li>
              Collaborated with cross-functional teams to standardize documentation, improving readability and usability for internal and external stakeholders.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-3 border-b border-indigo-600 pb-1">
          Certifications
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Certified SAFe® 6 Product Owner/Product Manager</li>
          <li>Certified Scrum Product Owner (CSPO)</li>
          <li>Scrum Master Certified (SMC)</li>
          <li>PMI Agile Certified Practitioner (PMI-ACP)</li>
          <li>ITIL 3.0 Fundamentals</li>
          <li>Microsoft Certified: Azure Fundamentals</li>
        </ul>
      </section>

      <section className="mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-3 border-b border-indigo-600 pb-1">
          Education
        </h2>
        <p>
          Bachelor's and Master’s degrees in Information Technology – Universidad
          Tecnológica Nacional, Argentina
        </p>
      </section>

      <section className="mb-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-3 border-b border-indigo-600 pb-1">
          Languages
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>English — C1 (Proficient)</li>
          <li>Spanish — Native (Mother tongue)</li>
        </ul>
      </section>

      <ChatBot />
      <ExperienceTimeline />
      <Analytics/>
    </div>
  );
} 
