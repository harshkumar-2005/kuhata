import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];



  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
          HT.
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="/harsh_resume.pdf" download className="px-4 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? <line x1="18" y1="6" x2="6" y2="18"></line> : <line x1="3" y1="12" x2="21" y2="12"></line>}
            {isOpen ? <line x1="6" y1="6" x2="18" y2="18"></line> : <line x1="3" y1="6" x2="21" y2="6"></line>}
            {isOpen ? <line x1="6" y1="18" x2="18" y2="6"></line> : <line x1="3" y1="18" x2="21" y2="18"></line>}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-slate-200/50 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="/harsh_resume.pdf" download className="text-center px-4 py-2 bg-white text-black rounded-full">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;