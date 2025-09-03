import SkillCard from './SkillCard';

const skillsData = [
  {
    id: 1,
    title: "Aerodynamics",
    icon: "airplanemode_active"
  },
  {
    id: 2,
    title: "Propulsion Systems",
    icon: "rocket_launch"
  },
  {
    id: 3,
    title: "CAD Modeling",
    icon: "memory"
  },
  {
    id: 4,
    title: "MATLAB Programming",
    icon: "code"
  }
];

export default function Skills() {
  return (
    <section className="py-16 bg-[#192633]" id="skills">
      <div className="max-w-5xl mx-auto px-10">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {skillsData.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
