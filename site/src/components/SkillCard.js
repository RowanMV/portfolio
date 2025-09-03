export default function SkillCard({ skill }) {
  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <div className="text-[#1173d4] bg-[#111a22] rounded-full p-4">
        <span className="material-symbols-outlined text-4xl">
          {skill.icon}
        </span>
      </div>
      <h3 className="text-white text-base font-bold leading-tight mt-2">
        {skill.title}
      </h3>
    </div>
  );
}
