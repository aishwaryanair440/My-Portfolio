import React from 'react';
import { ExternalLink, ArrowLeft, Palette, Code, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { StarDoodle } from '../components/NeobrutalismElements';
import { ProjectCarousel } from '../components/ProjectCarousel';
import portfolioImage1 from 'figma:asset/98fc7c70f10917012cc6dd485498440fb0943851.png';
import portfolioImage2 from 'figma:asset/707d4f299b804b5c608c9ed61ffc07bcd025b8ef.png';
import portfolioImage3 from 'figma:asset/8cb690158bd70ffe599a36cd64682af265699746.png';
import portfolioImage4 from 'figma:asset/71f68305a499db0053d0f35b33579b914f9633ff.png';

interface PortfolioProjectProps {
  onBack: () => void;
}

export function PortfolioProject({ onBack }: PortfolioProjectProps) {
  // Carousel images for Portfolio project
  const carouselImages = [
    portfolioImage1,
    portfolioImage2,
    portfolioImage3,
    portfolioImage4
  ];

  return (
    <div className="min-h-screen bg-[#FDF6E3] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button
          onClick={onBack}
          className="mb-8 px-5 py-2.5 bg-black text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm cursor-pointer"
          whileHover={{ 
            x: -2,
            y: 2,
            boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO PORTFOLIO
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <motion.span 
                className="text-5xl font-black text-orange-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                03
              </motion.span>
              <div>
                <h3 className="text-3xl font-black mb-1">PERSONAL PORTFOLIO WEBSITE</h3>
                <p className="text-lg font-medium text-gray-600">Personal Portfolio · React · Tailwind CSS</p>
              </div>
            </div>

            {/* Project Images Carousel */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ProjectCarousel images={carouselImages} />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <Palette className="w-6 h-6 text-orange-600" />
                  <h4 className="text-xl font-bold">OVERVIEW</h4>
                </div>
                <p className="text-base font-medium leading-relaxed text-gray-700">
                  A bold, modern portfolio website built with React.js and Tailwind CSS, showcasing UI/UX design work and frontend development skills through a distinctive neobrutalism aesthetic.
                </p>
              </motion.div>

              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  <h4 className="text-xl font-bold">CHALLENGE</h4>
                </div>
                <p className="text-base font-medium leading-relaxed text-gray-700">
                  Create a visually striking portfolio that stands out while maintaining excellent user experience and showcasing both design sensibility and technical skills.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="mb-8 bg-orange-50 border-2 border-black p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold mb-4">KEY FEATURES</h4>
              <ul className="space-y-3 text-base font-medium">
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Neobrutalism design with thick borders, hard shadows, and bold colors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Comprehensive Framer Motion animations for each section</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Custom cursor with particle effects and hover states</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Multi-page routing with React Router for project case studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Interactive project carousels with smooth transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Responsive design optimized for all devices</span>
                </li>
              </ul>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <motion.div 
                className="bg-pink-100 border-2 border-black p-5"
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="text-base font-bold mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  MY ROLE
                </h5>
                <p className="font-medium text-sm text-gray-700">Full-stack development</p>
                <p className="font-medium text-sm text-gray-700">UI/UX design & implementation</p>
              </motion.div>

              <motion.div 
                className="bg-blue-100 border-2 border-black p-5"
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="text-base font-bold mb-2">TIMELINE</h5>
                <p className="font-medium text-sm text-gray-700">January 2026</p>
                <p className="font-medium text-sm text-gray-700">Ongoing iterations</p>
              </motion.div>

              <motion.div 
                className="bg-yellow-100 border-2 border-black p-5"
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="text-base font-bold mb-2">TECH STACK</h5>
                <p className="font-medium text-sm text-gray-700">React.js · TypeScript</p>
                <p className="font-medium text-sm text-gray-700">Tailwind CSS · Framer Motion</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/"
                className="px-5 py-2.5 bg-orange-500 text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm cursor-pointer"
                whileHover={{ 
                  x: 2,
                  y: 2,
                  boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                VIEW LIVE SITE
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}