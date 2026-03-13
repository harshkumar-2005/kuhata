
import Section from "./Section";
import Card from "./Card";

const Projects = () => (
  <Section id="projects" title="Featured Projects">
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="group">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">Sellora Ecommerce</h3>
          <div className="flex gap-3">
            <a href="#" className="text-slate-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
            <a href="#" className="text-slate-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
          </div>
        </div>
        <p className="text-slate-400 mb-6">A full-featured ecommerce platform with cart management, secure checkout, and an admin dashboard for inventory control.</p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-mono text-blue-300">React</span>
          <span className="text-xs font-mono text-blue-300">Node.js</span>
          <span className="text-xs font-mono text-blue-300">MongoDB</span>
        </div>
      </Card>
      <Card className="group">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">Weather Dashboard</h3>
          <div className="flex gap-3">
            <a href="#" className="text-slate-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
          </div>
        </div>
        <p className="text-slate-400 mb-6">Real-time weather application featuring geolocation services, 5-day forecasting, and a responsive dark-mode UI.</p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-mono text-blue-300">React</span>
          <span className="text-xs font-mono text-blue-300">OpenWeather API</span>
          <span className="text-xs font-mono text-blue-300">Tailwind</span>
        </div>
      </Card>
    </div>
  </Section>
);
export default Projects;
