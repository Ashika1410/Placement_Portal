export default function StudentProjects() {
    const projects = [
      {
        title: "Online Voting System",
        description: "A secure online voting portal using blockchain.",
        technologies: ["React", "Node.js", "Solidity"],
        duration: "Jan 2024 - Mar 2024",
        link: "https://github.com/username/online-voting",
      },
    ];
  
    return (
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <p className="text-sm text-gray-600">Duration: {project.duration}</p>
            <div className="text-sm text-gray-800">
              Tech Stack: {project.technologies.join(", ")}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline text-sm"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    );
  }
  