import Button from "./Button";
import profileImage from "../assets/profileImage.jpg";
import reactLogo from "../assets/reactJS.jpg";
import nodeLogo from "../assets/nodeJS.jpg";
import dockerLogo from "../assets/docker.jpg";
import awsLogo from "../assets/aws.jpg";
import tailwindLogo from "../assets/tailwind.jpg";
import mongoLogo from "../assets/mongoDB.jpg";
import htmlLogo from "../assets/html5.jpg";
import cssLogo from "../assets/css.jpg";
import jsLogo from "../assets/js.jpg";
import mysqlLogo from "../assets/mysql.jpg";
import postgresLogo from "../assets/postgreSQL .jpg";
import gitLogo from "../assets/git.jpg";
import githubLogo from "../assets/github.jpg";

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="animate-fade-in">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
          <img
            src={profileImage}
            alt="Harshkumar Thakur"
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-[#0f172a] object-cover shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white">
          Harshkumar <span className="text-gradient">Thakur</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
          Full Stack Developer & DevOps Enthusiast
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button href="#projects" variant="primary">View Work</Button>
          <Button href="#contact" variant="secondary">Contact Me</Button>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-80">
          <img src={reactLogo} alt="React" title="React" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={nodeLogo} alt="Node.js" title="Node.js" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={dockerLogo} alt="Docker" title="Docker" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={awsLogo} alt="AWS" title="AWS" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={tailwindLogo} alt="Tailwind" title="Tailwind" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={mongoLogo} alt="MongoDB" title="MongoDB" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={htmlLogo} alt="HTML5" title="HTML5" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={cssLogo} alt="CSS3" title="CSS3" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={jsLogo} alt="JavaScript" title="JavaScript" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={mysqlLogo} alt="MySQL" title="MySQL" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={postgresLogo} alt="PostgreSQL" title="PostgreSQL" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={gitLogo} alt="Git" title="Git" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
          <img src={githubLogo} alt="GitHub" title="GitHub" className="w-12 h-12 rounded-xl bg-white/10 border border-slate-200/50 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;