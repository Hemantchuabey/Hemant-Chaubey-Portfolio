import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

const About = () => (
  <div
    className="header flex flex-col gap-[1.2rem] m-16 md:m-8 lg:m-auto h-full"
    id="about"
  >
    <h1 className="lg:text-7xl md:text-6xl text-5xl text-blue-950 p-0 m-0">
      Hemant <span className="font-semibold text-orange-700">Chaubey</span>
    </h1>
    <h2 className="lg:text-2xl text-xl text-gray-400">
      Mumbai, Maharashtra -{" "}
      <a
        href="mailto:hementchaubey@gmail.com"
        className="text-orange-700 hover:text-orange-600 hover:underline transition-all 0.3 ease-in"
      >
        hementchaubey@gmail.com
      </a>
    </h2>
    <p className="lg:text-xl text-lg text-blue-950">
      Front-end enthusiast seeking opportunities and challenges that will expand
      my skill set.Worked through hours on HTML, CSS, JavaScript, Reactjs,
      NextJS, Redux, TypeScript, Redux-Toolkit, RTK-Query, MySql, Tailwind CSS,
      and GIT. Eager to tackle web development/design challenges to achieve
      long-lasting impact on user experience..
    </p>
    <div className="social-links flex flex-col gap-2">
      <h2 className="font-bold lg:text-xl text-lg">Connect With Me</h2>
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/hemant-chaubey-9400a1267/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-all 0.3 ease-in"
          title="Linkedin"
        >
          <FaLinkedin size={35} color="darkblue" />
        </a>
        <a
          href="https://github.com/Hemantchuabey"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-all 0.3 ease-in"
          title="Github"
        >
          <FaGithubSquare size={35} color="" />
        </a>
        <a
          href="https://leetcode.com/u/hemant_chaubey/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-all 0.3 ease-in"
          title="Leetcode"
        >
          <SiLeetcode size={35} color="orange" />
        </a>
        <a
          href="https://x.com/Hemant1905"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-all 0.3 ease-in"
          title="X(Twitter)"
        >
          <FaSquareXTwitter size={35} color="" />
        </a>
      </div>
    </div>
  </div>
);

export default About;
