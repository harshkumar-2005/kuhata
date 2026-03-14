
import Card from "./Card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
          <p>
            I'm Harshkumar Thakur, a passionate developer focused on building scalable backend systems and modern web applications. 
            Currently pursuing my BE (2027), I bridge the gap between frontend aesthetics and backend logic.
          </p>
          <p>
            My journey involves mastering the MERN stack with TypeScript and SQL, containerization with Docker, and cloud deployment on AWS. 
            I thrive in environments where I can solve complex problems and learn new technologies.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">2027</h3>
            <p className="text-sm text-slate-400">Graduation</p>
          </Card>
          <Card className="text-center">
            <h3 className="text-3xl font-bold text-purple-400 mb-2">MERN</h3>
            <p className="text-sm text-slate-400">Core Stack</p>
          </Card>
          <Card className="text-center">
            <h3 className="text-3xl font-bold text-green-400 mb-2">DevOps</h3>
            <p className="text-sm text-slate-400">CI/CD & Cloud</p>
          </Card>
          <Card className="text-center">
            <h3 className="text-3xl font-bold text-orange-400 mb-2">Open</h3>
            <p className="text-sm text-slate-400">For Internships</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;