import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { DesignWorks } from './components/DesignWorks';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { SkillSwapProject } from './pages/SkillSwapProject';
import { HacktoberfestProject } from './pages/HacktoberfestProject';
import { PortfolioProject } from './pages/PortfolioProject';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'skillswap' | 'hacktoberfest' | 'portfolio'>('home');

  const handleProjectClick = (projectId: string) => {
    if (projectId === 'skillswap') {
      setCurrentPage('skillswap');
    } else if (projectId === 'hacktoberfest') {
      setCurrentPage('hacktoberfest');
    } else if (projectId === 'portfolio') {
      setCurrentPage('portfolio');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'skillswap') {
    return (
      <div className="min-h-screen bg-[#FDF6E3] cursor-none">
        <CustomCursor />
        <SkillSwapProject onBack={handleBackToHome} />
      </div>
    );
  }

  if (currentPage === 'hacktoberfest') {
    return (
      <div className="min-h-screen bg-[#FDF6E3] cursor-none">
        <CustomCursor />
        <HacktoberfestProject onBack={handleBackToHome} />
      </div>
    );
  }

  if (currentPage === 'portfolio') {
    return (
      <div className="min-h-screen bg-[#FDF6E3] cursor-none">
        <CustomCursor />
        <PortfolioProject onBack={handleBackToHome} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF6E3] cursor-none">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeaturedProjects onProjectClick={handleProjectClick} />
        <DesignWorks />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}