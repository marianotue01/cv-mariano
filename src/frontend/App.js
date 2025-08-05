import React from "react";
import ChatBot from "../components/ChatBot"; // o ajustá el path según tu estructura
import ExperienceTimeline from "../components/ExperienceTimeline";
import "react-vertical-timeline-component/style.min.css";
import '../index.css';

export default function AgileCV() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-gray-900 bg-gray-50 min-h-screen relative">
      {/* Imagen en esquina superior derecha */}
      <img
        src="/4x4.jpg"
        alt="Foto de Mariano Tuero"
        className="absolute top-6 right-6 w-32 h392 object-cover rounded-full border-[1px] border-grey shadow-md"
      />

      <header className="mb-8">
        <h1 className="text-4xl font-bold">Mariano Tuero</h1>
        <p className="text-lg text-indigo-700 font-semibold">
          Senior Product Manager | Agile Leader | Multilingual (ES/EN/PT)
        </p>
        <p className="text-sm text-gray-600">
          Warsaw, Poland | mariano.tuero@email.com
        </p>
        <p className="text-sm text-gray-600">
          +48 573 824 000 |{" "}
          <a
            href="https://linkedin.com/in/mariano-tuero"
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
          With over 27 years of IT experience, including 17 years applying Agile methodologies and 12 years leading teams and projects, I 
          am a seasoned Senior Product Manager currently at EY. I am currently leading the vision, strategy, and long-term roadmap for a 
          global financial reporting and research platform. 
          My career spans multiple industries—telecommunications, financial services, oil and gas, and IT consulting—where I’ve consistently 
          delivered high-impact digital products that drive automation, efficiency, and cloud transformation.
          Certified as a Scrum Product Owner, Scrum Master, SAFe Agilist, and PMI-ACP, I collaborate effectively with cross-functional teams 
          and stakeholders to align business goals with user needs and technical feasibility. With a background in IT forensics, I bring a deep 
          commitment to operational integrity, excellence, and continuous improvement.
          Fluent in Spanish, English, and Portuguese. EU citizen (Italian passport) currently based in Warsaw, Poland, and open to relocation. 
          Passionate about mentoring, soccer, and global collaboration
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
              Technical Product Manager (Associate Director) - Defined the vision, strategy, and long-term roadmap for EY’s Atlas, a SaaS product used for audits, assurance, and accounting as a central source of technical knowledge.
            </li>
            <li>
              Planned and tracked five critical workstreams: Quality and Regulatory Compliance (content preservation), Digital Asset Management (Ovitas CMS to AEM migration), Client Edition subscription model, Intelligent Content Management (metadata and taxonomy standardization).
            </li>
            <li>
              Led multiple strategic initiatives within the Atlas Program, including Aha!-Azure DevOps integration, fiscal year budget prioritization, legacy release decommissioning, and Product Increment (PI) coordination.
            </li>
            <li>
              Utilized Aha!, Azure DevOps, and Power BI; delivered high-impact presentations to large audiences to drive stakeholder engagement and adoption.
            </li>
            <li>
              Served as a people manager and career counselor, fostering skill development, career growth, and high-performing teams.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">J.P. Morgan | Senior Product Manager / People Manager</h3>
          <p className="text-sm text-blue-600 mb-2">[July 2021 – Aug 2022]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Global Network Services Product Manager (Executive Director) - Led strategic vision and execution for a suite of network products, ensuring seamless integration and operational efficiency.
            </li>
            <li>
              Drove automation initiatives such as Logical Build Readiness, an event-driven architecture to enhance resilience and streamline data center site preparation.
            </li>
            <li>
              Managed NETLs microservices optimizing network device data retrieval, transformation, and consolidation for improved accessibility via REST APIs.
            </li>
            <li>
              Oversaw DART implementation (Device Automation, Reporting, and Tasking) enabling efficient network management system maintenance.
            </li>
            <li>
              Served as a people manager and career counselor, fostering skill development, career growth, and high-performing teams.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">ExxonMobil | Senior Scrum Master / Product Owner / Manager</h3>
          <p className="text-sm text-blue-600 mb-2">[O]ct 2014 – June 2021]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Technical Software Platform PM and Agile Coach (IT Manager) - Led innovative solutions and unified building blocks for centralized self-service platforms and standards.
            </li>
            <li>
              Managed portfolio of five products ensuring alignment with business objectives, technical excellence, and integration.
            </li>
            <li>
              Drove standardization and scalability, fostering consistent platform architecture.
            </li>
            <li>
              Collaborated cross-functionally with engineering, leadership, and stakeholders for product strategy and continuous improvements.
            </li>
          </ul>
          <p className="text-sm text-blue-600 mb-2">[Apr 2013 – Sept 2014]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              License Management Senior Product Owner - Delivered the License Automation Tool (LAT), a hybrid on-prem/cloud solution to streamline concurrent license installation via drag-and-drop interface.
            </li>
          </ul>
          <p className="text-sm text-blue-600 mb-2">[Mar 2008 – Mar 2013]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              License Management Scrum Master (Manager) - Guided Agile adoption, Scrum ceremonies, coaching teams, backlog management, and IT leadership support with metrics and root cause analysis.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">IBM | Supervisor / Team Lead / Technical Writer</h3>
          <p className="text-sm text-blue-600 mb-2">[Oct 2004 – Feb 2008]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              System Programmer Supervisor - Led Mainframe system programming team, ensured staffing and training.
            </li>
            <li>
              Supported Z/Os administration, software product support, security fixes, upgrades, monitoring, and automation.
            </li>
          </ul>
          <p className="text-sm text-blue-600 mb-2">[Dec 2002 – Sept 2004]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Reporting Team Lead - Led performance reporting, stakeholder requirements, mainframe architecture knowledge, JCL programming, SQL, and SLA management.
            </li>
          </ul>
          <p className="text-sm text-blue-600 mb-2">[Sept 2001 – Nov 2002]</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Outsourcing Technical Writer - Developed comprehensive documentation for change & problem management, capacity planning, SLA, disaster recovery, etc.
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
    </div>
  );
}
