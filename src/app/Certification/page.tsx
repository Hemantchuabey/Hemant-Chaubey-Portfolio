"use client";

const Certifications = () => {
  const certifications = [
    {
      date: "2023",
      title: "Mastering Typescript",
    },
    {
      date: "2024",
      title: "Test Automation Foundation",
    },
    {
      date: "2024",
      title: "Python Certification",
    },
    {
      date: "March 2023",
      title: "Javascript (Intermidiate) Certificate",
    },
    {
      date: "March 2023",
      title: "Javascript (Basic) Certificate",
    },
    {
      date: "March 2023",
      title: "CSS Certificate",
    },
    {
      date: "July 2018",
      title: "CMP InfoTech programming in C",
    },
  ];

  return (
    <section id="certification" className="p-8 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-orange-600">
        Certifications
      </h2>
      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <li key={index} className="flex items-start space-x-4">
            <span className="text-orange-600 text-lg">⭐</span>
            <div>
              <p className="text-lg font-medium text-gray-600 hover:text-gray-900">
                {cert.date} - {cert.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
