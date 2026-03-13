import Section from "./Section";
import Card from "./Card";
import reactLogo from "../assets/reactJS.jpg";
import htmlLogo from "../assets/html5.jpg";
import cssLogo from "../assets/css.jpg";
import jsLogo from "../assets/js.jpg";
import nodeLogo from "../assets/nodeJS.jpg";
import mongoLogo from "../assets/mongoDB.jpg";
import mysqlLogo from "../assets/mysql.jpg";
import awsLogo from "../assets/aws.jpg";
import dockerLogo from "../assets/docker.jpg";
import gitLogo from "../assets/git.jpg";
import githubLogo from "../assets/github.jpg";

const skills = [
  { title: "Frontend", items: [
    { name: "React", logo: reactLogo },
    { name: "HTML5", logo: htmlLogo },
    { name: "CSS3", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "TypeScript" },
    { name: "Tailwind" } // No logo found
  ] },
  { title: "Backend", items: [
    { name: "Node.js", logo: nodeLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "Prisma" },
    { name: "Express" }
  ] },
  { title: "DevOps", items: [
    { name: "AWS", logo: awsLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "Nginx" },
    { name: "CI/CD" },
    { name: "Linux" }
  ] },
  { title: "Tools", items: [
    { name: "Git", logo: gitLogo },
    { name: "Postman" },
    { name: "VS Code" },
    { name: "Figma" },
    { name: "Jira" },
    { name: "GitHub", logo: githubLogo }
  ] },
];

const Skills = () => (
  <Section id="skills" title="Tech Stack">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((category, idx) => (
        <Card key={idx} className="h-full">
          <h3 className="text-xl font-bold mb-4 text-white border-b border-slate-200/50 pb-2">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.items.map((skill) => (
              skill.logo ? (
                <img
                  key={skill.name}
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-slate-200/50 object-contain"
                  title={skill.name}
                />
              ) : null
            ))}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);
export default Skills;
