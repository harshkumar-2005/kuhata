import React from "react";
import Card from "./Card";

// Define the shape of a Project object
interface Project {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  icon: React.ReactNode; 
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Sellora Ecommerce",
      desc: "A full-featured ecommerce platform with cart management, secure checkout, and an admin dashboard for inventory control.",
      tags: ["MySQL", "TypeScript", "Express", "Prisma ORM"],
      github: "https://github.com/harshkumar-2005/Sellora",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></svg>
      ),
    },
    {
      title: "Institute Management App",
      desc: "A comprehensive platform for managing institute operations, including student records, attendance, and staff management.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/harshkumar-2005/slrtce_IMS",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></svg>
      ),
    },
    {
      title: "Dockerized Backend",
      desc: "Production-ready Node.js backend, fully dockerized for easy deployment and scalability.",
      tags: ["Node.js", "Docker", "Express"],
      github: "https://github.com/harshkumar-2005/dockerized-backend",
      icon: (
        <span role="img" aria-label="docker">🐳</span>
      ),
    },
    {
      title: "Node + Nginx AWS Deployment",
      desc: "Automated deployment pipeline for Node.js apps using Nginx and AWS EC2, featuring CI/CD best practices.",
      tags: ["Node.js", "Nginx", "AWS", "CI/CD"],
      github: "https://github.com/harshkumar-2005/node-nginx-aws-deployment",
      icon: (
        <span role="img" aria-label="aws">☁️</span>
      ),
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-[#0f172a]">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <Card key={idx} className="group bg-[#1a2236] text-white">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                {project.icon}
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.47v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .25.16.56.67.47A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>
            </div>
            <p className="text-slate-400 mb-6">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-blue-300 bg-white/10 px-2 py-1 rounded-3xl">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;