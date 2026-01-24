import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CrossDoodle } from '../components/NeobrutalismElements';
import { ProjectCarousel } from '../components/ProjectCarousel';
import hacktoberfestImage1 from 'figma:asset/de2a63df5f92b736ce909a8bd04d92fd0c7b0bf0.png';
import hacktoberfestImage2 from 'figma:asset/8634172eeb1770311f89bf7d274d5c26d57ff69b.png';
import hacktoberfestImage3 from 'figma:asset/dbc6cf39e8d561aeb11b431189e27dcdead37c4d.png';

interface HacktoberfestProjectProps {
  onBack: () => void;
}

export function HacktoberfestProject({ onBack }: HacktoberfestProjectProps) {
  // Carousel images for Hacktoberfest project
  const carouselImages = [
    hacktoberfestImage1,
    hacktoberfestImage2,
    hacktoberfestImage3
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
                className="text-5xl font-black text-green-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                02
              </motion.span>
              <div>
                <h3 className="text-3xl font-black mb-1">Hacktoberfest Contribution</h3>
                <p className="text-lg font-medium text-gray-600">Open Source · Frontend</p>
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

            <motion.div 
              className="mb-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <h4 className="text-xl font-bold mb-3">DESCRIPTION</h4>
                <p className="text-base font-medium leading-relaxed text-gray-700 mb-6">
                  Contributed a UI card component to an open-source repository during Hacktoberfest.
                </p>
              </div>

              <div className="bg-green-50 border-2 border-black p-6">
                <h5 className="text-lg font-bold mb-3">WHAT I DID</h5>
                <ul className="space-y-3 text-base font-medium">
                  <li className="flex items-start gap-3">
                    <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                    <span className="text-gray-700">Designed a reusable UI card</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                    <span className="text-gray-700">Implemented frontend code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-black text-white px-2 py-1 font-bold flex-shrink-0 text-sm">→</span>
                    <span className="text-gray-700">Submitted and merged pull request</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <div className="bg-cyan-100 border-2 border-black p-5 mb-6 inline-block">
              <h5 className="text-base font-bold mb-1">TOOLS</h5>
              <p className="font-medium text-sm text-gray-700">HTML · CSS · GitHub</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://github.com/gtech-mulearn/mulearnhome/pull/104/checks"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-green-600 text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm cursor-pointer"
                whileHover={{ 
                  x: 2,
                  y: 2,
                  boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                VIEW PULL REQUEST
              </motion.a>
              <motion.a
                href="https://github.com/aishwaryanair440/mulearnhome"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 text-sm cursor-pointer"
                whileHover={{ 
                  x: 2,
                  y: 2,
                  boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                VIEW REPOSITORY
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}