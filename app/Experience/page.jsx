"use client";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Engineer",
      company: "Deloitte USI",
      duration: "July 2019 - Present",
      details: [
        "Built 30+ automations to streamline business processes across SAP, HR, and Finance domains.",
        "Improved existing automations using efficient data structures, achieving better performance.",
        "Collaborated with clients for requirement gathering, feasibility checks, and testing support (FUT/UAT/Beta).",
        "Developed REST APIs for data cleansing and automation, integrating RPA solutions with AWS.",
        "Designed end-to-end solutions using Blue Prism, Python, and AWS services.",
        "Built predictive ML models for credit approval, integrating the system with SAP Fiori.",
      ],
    },
    {
      title: "Intern",
      company: "Atneva Labs Pvt. Ltd.",
      duration: "April 2019 - August 2019",
      details: [
        "Trained on SAP ABAP/HANA in a consulting environment.",
        "Developed a data pipeline for processing and cleansing raw data for analytics.",
      ],
    },
  ];

  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-700">{exp.title}</h2>
          <h3 className="text-lg text-gray-600 italic">{exp.company}</h3>
          <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
