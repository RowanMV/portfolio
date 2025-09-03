export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#192633] rounded-lg overflow-hidden border border-[#324d67] transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div 
        className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
        style={{ backgroundImage: `url("${project.imageUrl}")` }}
      />
      <div className="p-6">
        <h3 className="text-white text-xl font-bold leading-tight">
          {project.title}
        </h3>
        <p className="text-[#92adc9] text-sm font-normal leading-normal mt-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}
