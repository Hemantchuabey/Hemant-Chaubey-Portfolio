"use client";

import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiJest,
  SiPostman,
  SiSelenium,
  SiWebpack,
  SiGithubactions,
  SiCypress,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const Skills = () => {
  const tools = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "NextJS", icon: <RiNextjsLine /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "Cypress", icon: <SiCypress /> },
    { name: "Selenium", icon: <SiSelenium /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "Webpack", icon: <SiWebpack /> },
  ];

  const technicalSkills = [
    "Frontend Development (React, Redux, JavaScript)",
    "Testing Frameworks: Jest, Cypress, Selenium",
    "Responsive UI Design using Tailwind CSS",
    "RESTful APIs Integration",
    "Version Control with Git & GitHub",
    "CI/CD Pipelines using GitHub Actions",
    "Debugging and Performance Optimization",
  ];

  const otherSkills = [
    "Strong problem-solving and analytical skills",
    "Experience with Agile methodologies and teamwork",
    "Good communication skill",
    "Time management and meeting deadlines",
    "Ability to write clean, reusable, and modular code",
  ];

  return (
    <section id="skills" className="p-8">
      <h2 className="text-4xl font-bold mb-6 text-orange-600">Skills</h2>

      <div>
        <h3 className="text-xl font-medium mb-4">
          Programming Languages & Tools
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center text-center hover:scale-110 transition-all"
            >
              <div
                className="text-3xl text-gray-400 hover:text-current transition-all"
                style={{ filter: "grayscale(100%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              >
                {tool.icon}
              </div>
              <p className="mt-2 font-medium text-lg">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          {technicalSkills.map((skill, index) => (
            <li key={index} className="text-gray-600 hover:text-gray-900">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Other Skills */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Other Skills</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          {otherSkills.map((skill, index) => (
            <li key={index} className="text-gray-600 hover:text-gray-900">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
