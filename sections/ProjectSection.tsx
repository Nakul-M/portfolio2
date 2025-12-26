import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/projects/terminal-portfolio.webp";
import haruFashion from "public/projects/haru-fashion.webp";
import haruApi from "public/projects/haru-api.webp";
import astroPaper from "public/projects/astro-paper.webp";
import nextBookstore from "public/projects/next-bookstore.webp";
import shadcnAdmin from "public/projects/shadcn-admin.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/Nakul-M"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "AI-Based DPR & Proposal Analysis Platform",
    type: "Full Stack + AI",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="AI DPR Analysis Platform"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An AI-powered system for automated evaluation of Detailed Project Reports (DPRs), proposals, and tenders. The platform verifies section completeness, policy compliance, budget consistency, and generates structured AI-assisted review summaries with annotated PDF outputs.",
    tags: ["MERN", "LLMs", "NLP", "PDF Processing", "AI Agents"],
    liveUrl: "#",
    codeUrl: "https://api.github.com/repos/Nakul-M/MIRFANY/voidframe2",
    bgColor: "bg-[#D6EAF8]",
    githubApi: "https://api.github.com/repos/Nakul-M/MIRFANY/voidframe2",
  },
  {
    title: "School Management System",
    type: "Full Stack",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="School Management System"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A complete school management system with role-based authentication for admins, teachers, and students. Includes student records, attendance, fee management with Razorpay integration, result visibility control, and Cloudinary-based image uploads.",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Razorpay"],
    liveUrl: "#",
    codeUrl: "https://github.com/your-username/school-management-system",
    bgColor: "bg-[#E8F8F5]",
    githubApi: "https://api.github.com/repos/your-username/school-management-system",
  },
  {
    title: "CoreAstra – AI Assisted Terminal Interface",
    type: "System Tool + AI",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="CoreAstra AI Terminal"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A professional-grade AI-assisted terminal and control interface that integrates multiple LLM engines, permission-based execution, logging, and audit trails for safe system operations.",
    tags: ["React", "Node.js", "LLMs", "System Design", "AI Safety"],
    liveUrl: "#",
    codeUrl: "https://github.com/your-username/coreastra",
    bgColor: "bg-[#FDF2E9]",
    githubApi: "https://api.github.com/repos/your-username/coreastra",
  },
  {
    title: "Student Fee Payment System",
    type: "Backend + Payments",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="Student Fee Payment System"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A month-wise student fee management system supporting variable fee structures per student. Integrated with Razorpay for secure online payments and real-time transaction tracking.",
    tags: ["Express", "MongoDB", "Razorpay", "REST APIs"],
    liveUrl: "#",
    codeUrl: "https://github.com/your-username/student-fee-payment-system",
    bgColor: "bg-[#FEF9E7]",
    githubApi: "https://api.github.com/repos/your-username/student-fee-payment-system",
  },
  {
    title: "WhatsApp-Based Automated Bill Payment System",
    type: "Automation + AI",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="WhatsApp Bill Automation"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A WhatsApp-based autonomous system where users can fetch electricity bill details using a consumer ID, authorize payment via a payment gateway, and receive receipts and status updates directly on WhatsApp.",
    tags: ["Node.js", "WhatsApp API", "Payments", "Automation"],
    liveUrl: "#",
    codeUrl: "https://github.com/your-username/whatsapp-bill-payment-bot",
    bgColor: "bg-[#E9F7EF]",
    githubApi: "https://api.github.com/repos/your-username/whatsapp-bill-payment-bot",
  },
];

export default ProjectSection;
