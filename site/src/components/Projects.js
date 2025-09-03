import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "Autonomous Drone Navigation System",
    description: "Developed a navigation system for autonomous drones using sensor fusion and path planning algorithms.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr3zCEVxbkZnLPFO_Mgfu2oZNlFU9W6F5RT2V8f9TzUDCCb9iN0_sWMl7OfyfvTWn-I-lhTlaiTQj65h3jvlQdGv644O7SRk4QT7-vjmlQ71g8LBUPh3GCfZqoDWemDphzldr71p4OXzCREJUypUa61IIpnyYml6aMQrpsBGP0swf0_KXykeBvUV5kI2tRM5zl98HuNSS3WKbkcQ-x4CXpZj60mhAcQjZWwS2jNs9SIIXvkEQEVovO-2FDhSJ7H6JoWxho3tNdn7M"
  },
  {
    id: 2,
    title: "High-Speed Aircraft Wing Design",
    description: "Designed and analyzed a wing structure for a high-speed aircraft, optimizing for lift and drag characteristics.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKIeSyQ7T1BZ8ATv6Bbsc-Env3xdOI6s6FU9xbsAEeht-xmo9-0bHdNnaCBK8rr_-nvxsrMTce6QULQrIJzRgcYJdgN17kQefN7YDdBbdu1ZP_a29efcD3hEBOK8PDZvu95swYrXdoADiovBNaya9bwb6sr8sZPNtlg4zrUqKs7awHpzXuQEMeO9ZxFZTXKSzNnpWV88buMAAbe7DpWVW3ei-zA3v30e9ROiQcRwGQkW1xct7dqvhK6Az0dfAWoLi4akl4CASVMc8"
  }
];

export default function Projects() {
  return (
    <section className="py-16 px-10" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
