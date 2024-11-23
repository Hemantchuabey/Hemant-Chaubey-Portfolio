import { FaReact, FaHtml5, FaJs, FaCss3Alt, FaNode } from "react-icons/fa";

const skills = () => {
  const skillList = [
    { icon: FaReact, label: "React" },
    { icon: FaHtml5, label: "HTML5" },
    { icon: FaJs, label: "JavaScript" },
    { icon: FaCss3Alt, label: "CSS3" },
    { icon: FaNode, label: "Node.js" },
  ];

  return (
    <section id="skills" className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-3 gap-8">
        {skillList.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center opacity-50 hover:opacity-100 transition duration-300"
          >
            <Icon className="text-6xl mb-2" />
            <span className="text-lg">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default skills;