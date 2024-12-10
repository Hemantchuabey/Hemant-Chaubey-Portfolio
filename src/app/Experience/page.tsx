"use client";

const Experience = () => {
  const experiences = [
    {
      title: "System Enginner",
      company: "Tata Consultancy Services",
      duration: "July 2021 - Present",
      details: [
        "Developed a responsive e-commerce website with product filtering, search, and cart management features.",
        "Extensive experience with Next.js in building server-side rendered (SSR) and static applications",
        "React.js, Redux, JavaScript, HTML, and CSS were used to create a dynamic user experience Collaborated with team members and utilized Git for version control",
        "Conducted code refactoring and debugging for a code repository, resulting in a 30% reduction in bug reports",
        "Assists in post-implementation and continuous-improvement efforts to enhance performance and improve future outcomes of services",
        "Proficient in writing automated test cases for React components and end-to-end workflows using tools like Selenium, Python, Jest, and Cypress.",
        "Improved existing automation using efficient data structures, achieving better performance.",
        "Familiarity with ITIL processes like Incident Management, Service Requests, and Change Requests.",
        "Actively Participating with the Client in Stand-up Calls and Contributing to the Team in a Brainstorming Session",
      ],
    },
  ];

  return (
    <div className="px-6 py-10" id="experience">
      <h1 className="text-4xl font-bold text-orange-600 mb-6">Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-700">
            {exp.title}
          </h2>
          <div className="flex justify-between">
            <h3 className="text-lg text-gray-600 italic">{exp.company}</h3>
            <p className="text-sm text-orange-500 mb-4">{exp.duration}</p>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {exp.details.map((detail, i) => (
              <li key={i} className=" text-gray-600 hover:text-gray-900">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
