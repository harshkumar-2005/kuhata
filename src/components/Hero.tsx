import Button from "./Button";
import profileImage from "../assets/profileImage.jpg";

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="animate-fade-in">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
          <img
            src={profileImage}
            alt="Harsh Thakur"
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-[#0f172a] object-cover shadow-2xl"
          />
        </div>
        
            <h1 className="text-5xl md:text-7xl font-extrabold mb-2 tracking-tight text-white">
              Harsh <span className="text-gradient">Thakur</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-4 font-light">
              Full Stack Developer & DevOps Enthusiast
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Button href="#projects" variant="primary">View Work</Button>
              <Button href="#contact" variant="secondary">Contact Me</Button>
            </div>
      </div>
    </section>
  );
};

export default Hero;