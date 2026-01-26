import React, { useState, Suspense } from 'react';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { DesignWorks } from './components/DesignWorks';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';

// Lazy load project pages
const SkillSwapProject = React.lazy(() => import('./pages/SkillSwapProject').then(module => ({ default: module.SkillSwapProject })));
const HacktoberfestProject = React.lazy(() => import('./pages/HacktoberfestProject').then(module => ({ default: module.HacktoberfestProject })));
const PortfolioProject = React.lazy(() => import('./pages/PortfolioProject').then(module => ({ default: module.PortfolioProject })));

const PageLoader = () => (
  <div className="min-h-screen bg-[#FDF6E3] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
      <Suspense fallback={<PageLoader />}>
        <div className="min-h-screen bg-[#FDF6E3] cursor-none">
          <CustomCursor />
          <SkillSwapProject onBack={handleBackToHome} />
        </div>
      </Suspense>
    );
  }

  if (currentPage === 'hacktoberfest') {
    return (
      <Suspense fallback={<PageLoader />}>
        <div className="min-h-screen bg-[#FDF6E3] cursor-none">
          <CustomCursor />
          <HacktoberfestProject onBack={handleBackToHome} />
        </div>
      </Suspense>
    );
  }

  if (currentPage === 'portfolio') {
    return (
      <Suspense fallback={<PageLoader />}>
        <div className="min-h-screen bg-[#FDF6E3] cursor-none">
          <CustomCursor />
          <PortfolioProject onBack={handleBackToHome} />
        </div>
      </Suspense>
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