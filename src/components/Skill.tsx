
import Card from "./Card";

const Skills = () => {
  const categories = [
    { title: "Frontend", items: ["React", "Tailwind", "HTML5", "CSS3", "JavaScript"] },
    { title: "Backend", items: ["Node.js", "Express", "MongoDB", "MySQL", "Prisma"] },
    { title: "DevOps", items: ["Docker", "AWS", "Nginx", "CI/CD", "Linux"] },
    { title: "Tools", items: ["Git", "Postman", "VS Code"] },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <Card key={idx} className="h-full">
            <h3 className="text-xl font-bold mb-4 text-white border-b border-slate-200/50 pb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-blue-200 border border-slate-200/50 hover:bg-white/10 transition">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;