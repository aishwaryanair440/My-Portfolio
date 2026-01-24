import React from 'react';
import { ExternalLink, Users, Target, Lightbulb, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { SpiralElement } from '../components/NeobrutalismElements';
import { ProjectCarousel } from '../components/ProjectCarousel';
import skillswapImage1 from 'figma:asset/e3b1f9c197e889eddf727d7cf026cc510b4ee754.png';
import skillswapImage2 from 'figma:asset/b26ac141f4dfaf8688ecac1f7fe4c476edffe4f5.png';
import skillswapImage3 from 'figma:asset/a522bdcbb01d2585786d252d30cb11a8b5926b99.png';
import skillswapImage4 from 'figma:asset/7c4520fe3b3de9b3b0b5f20ef4574f5781e6b90c.png';

interface SkillSwapProjectProps {
  onBack: () => void;
}

export function SkillSwapProject({ onBack }: SkillSwapProjectProps) {
  // Carousel images for SkillSwap project
  const carouselImages = [
    skillswapImage1,
    skillswapImage2,
    skillswapImage3,
    skillswapImage4
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
                className="text-5xl font-black text-purple-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                01
              </motion.span>
              <div>
                <h3 className="text-3xl font-black mb-1">SkillSwap</h3>
                <p className="text-lg font-medium text-gray-600">UI/UX Hackathon Case Study</p>
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
                  <Target className="w-6 h-6 text-purple-600" />
                  <h4 className="text-xl font-bold">OVERVIEW</h4>
                </div>
                <p className="text-base font-medium leading-relaxed text-gray-700">
                  SkillSwap is a peer-to-peer skill exchange platform designed during a UI/UX hackathon to enable structured and low-friction learning among college students.
                </p>
              </motion.div>

              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-pink-600" />
                  <h4 className="text-xl font-bold">PROBLEM</h4>
                </div>
                <p className="text-base font-medium leading-relaxed text-gray-700">
                  Students lack intuitive ways to discover, teach, and learn skills from peers within campus environments.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="mb-8 bg-blue-50 border-2 border-black p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold mb-4">SOLUTION</h4>
              <ul className="space-y-3 text-base font-medium">
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Designed clear user flows and information hierarchy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Created wireframes and high-fidelity screens</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Built an interactive Figma prototype</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                  <span className="text-gray-700">Presented UX decisions during the hackathon</span>
                </li>
              </ul>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <motion.div 
                className="bg-orange-100 border-2 border-black p-5"
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="text-base font-bold mb-2">MY ROLE</h5>
                <p className="font-medium text-sm text-gray-700">Wireframing & visual design</p>
                <p className="font-medium text-sm text-gray-700">UX decisions and interaction design</p>
              </motion.div>

              <motion.div 
                className="bg-green-100 border-2 border-black p-5"
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="text-base font-bold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  TEAM
                </h5>
                <p className="font-medium text-sm text-gray-700">Team Auralune</p>
              </motion.div>

              <motion.div 
                className="bg-cyan-100 border-2 border-black p-5"
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="text-base font-bold mb-2">TOOLS</h5>
                <p className="font-medium text-sm text-gray-700">Figma · UX Research</p>
                <p className="font-medium text-sm text-gray-700">Prototyping · Visual Design</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://www.figma.com/proto/XXtawj2UqG3c2UUqL90zKi/Aurelune-Workspace?node-id=146-448&starting-point-node-id=93%3A781&t=8DlafNWJ25XT2QK3-1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-purple-500 text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm cursor-pointer"
                whileHover={{ 
                  x: 2,
                  y: 2,
                  boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                VIEW PROTOTYPE
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}