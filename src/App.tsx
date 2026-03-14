import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden relative">
      {/* Unique Animated SVG Background */}
      <svg className="fixed inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 1920 1080" fill="none">
        <defs>
          <linearGradient id="bgGradient" x1="0" y1="0" x2="1920" y2="1080" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <path d="M0,0 C800,200 1200,900 1920,1080" stroke="url(#bgGradient)" strokeWidth="120" fill="none" opacity="0.15">
          <animate attributeName="d" values="M0,0 C800,200 1200,900 1920,1080; M0,0 C900,300 1100,800 1920,1080; M0,0 C800,200 1200,900 1920,1080" dur="8s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Glassmorphic Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-4xl z-50 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg flex justify-between items-center px-8 py-4 animate-fade-in">
        <div className="text-2xl font-extrabold text-gradient tracking-tight">kuhata</div>
        <div className="hidden md:flex gap-10 text-base font-semibold">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gradient transition-all duration-300">
              {item}
            </a>
          ))}
        </div>
        <a href="/harsh_resume.pdf" download className="px-5 py-2 text-base font-bold bg-linear-to-r from-blue-400 to-purple-400 text-white rounded-full shadow hover:scale-105 transition-transform">
          Resume
        </a>
      </nav>

      {/* Asymmetric Section Layouts */}
      <section className="pt-32 md:pt-40 animate-fade-in">
        <Hero />
      </section>
      <section className="relative z-10 animate-fade-in">
        <About />
      </section>
      <section className="relative z-10 animate-fade-in">
        <Skills />
      </section>
      <section className="relative z-10 animate-fade-in">
        <Projects />
      </section>
      <section className="relative z-10 animate-fade-in">
        <Contact />
      </section>
      <section className="relative z-10 animate-fade-in">
        <Footer />
      </section>
    </div>
  );
};

export default App;