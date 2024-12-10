"use client";

const Education = () => {
  const educationDetails = [
    {
      institute: "Vidyavardhini's College of Engineering and Technology",
      degree: "Bachelor of Engineering",
      field: "Electronics and Telecomminication Engineering",
      cgpa: "8.28",
      duration: "August 2017 - June 2021",
    },
    {
      institute: "Thakur College of Science and Commerce",
      degree: "HSC | XII",
      field: "Science (Computer Science)",
      percentage: "65.54%",
      duration: "March 2017",
    },
    {
      institute: "Abhinav Vidya School",
      degree: "SSC | X",
      cgpa: "85.20",
      duration: "March 2014",
    },
  ];

  return (
    <section id="education" className="p-8 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-orange-600">Education</h2>
      <div className="space-y-8">
        {educationDetails.map((education, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h3 className="text-2xl font-semibold">{education.institute}</h3>
              <p className="text-lg font-medium text-gray-600">
                {education.degree}
              </p>
              {education.field && (
                <p className="text-gray-500 text-sm mt-1">{education.field}</p>
              )}
              {education.cgpa && (
                <p className="text-gray-500 text-sm mt-1">
                  CGPA: {education.cgpa}
                </p>
              )}
              {education.percentage && (
                <p className="text-gray-500 text-sm mt-1">
                  Percentage: {education.percentage}
                </p>
              )}
            </div>
            <p className="text-orange-600 font-medium mt-4 md:mt-0 text-sm md:text-base">
              {education.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
