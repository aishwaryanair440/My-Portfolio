import React from 'react';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">AISHWARYA A NAIR</div>
          <div className="hidden md:flex gap-8 font-bold text-sm">
            <a href="#projects" className="hover:text-blue-700 transition-colors">PROJECTS</a>
            <a href="#design" className="hover:text-pink-700 transition-colors">DESIGN</a>
            <a href="#skills" className="hover:text-green-700 transition-colors">SKILLS</a>
            <a href="#about" className="hover:text-orange-700 transition-colors">ABOUT</a>
            <a href="#contact" className="hover:text-purple-700 transition-colors">CONTACT</a>
          </div>
        </div>
      </div>
    </nav>
  );
}