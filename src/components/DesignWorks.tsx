import React from 'react';
import { Palette, Circle, Sparkles, Hexagon } from 'lucide-react';
import { motion } from 'motion/react';
import { StarDoodle, ScribbleCircle, ArrowDoodle, SpiralElement, ZigzagElement, CrossDoodle } from './NeobrutalismElements';
import poster1 from 'figma:asset/21df0db79fb08af0aa2d159f624efe10bc1d5e41.png';
import poster2 from 'figma:asset/633da636983523e0aa9ae629a3ae256bb0e62b53.png';
import poster3 from 'figma:asset/f36ed2e1239a89e38b3035d65112d484bf9b2f7f.png';

export function DesignWorks() {
  const posters = [
    {
      image: poster1,
      gradient: 'from-pink-400 to-orange-400'
    },
    {
      image: poster2,
      gradient: 'from-blue-400 to-purple-400'
    },
    {
      image: poster3,
      gradient: 'from-green-400 to-teal-400'
    }
  ];

  return (
    <section id="design" className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-pink-50 to-purple-50 border-y-4 border-black my-20 relative overflow-hidden">
      {/* Enhanced Decorative shapes with animation */}
      <StarDoodle className="absolute top-10 right-10 opacity-40 hidden lg:block" size={70} color="#FCD34D" />
      <ScribbleCircle className="absolute bottom-10 left-10 opacity-30 hidden lg:block" size={80} color="#F472B6" />
      <ArrowDoodle className="absolute top-1/2 right-1/4 opacity-30 hidden lg:block" color="#60A5FA" />
      <SpiralElement className="absolute bottom-20 right-1/3 opacity-30 hidden lg:block" size={75} color="#4ADE80" />
      <ZigzagElement className="absolute top-1/3 left-1/4 opacity-30 hidden lg:block" color="#A78BFA" />
      <CrossDoodle className="absolute top-20 right-20 opacity-30 hidden lg:block" size={50} color="#F472B6" />
      
      <motion.div 
        className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          rotate: [45, 65, 45],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Circle className="absolute bottom-10 left-10 w-20 h-20 text-pink-400 fill-pink-400 opacity-30 hidden lg:block" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-blue-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-10 w-20 h-20 bg-green-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          rotate: [-45, 45, -45],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles className="absolute top-1/3 right-1/3 w-10 h-10 text-yellow-400 opacity-40 hidden lg:block" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Hexagon className="absolute bottom-1/3 left-1/4 w-12 h-12 text-purple-400 opacity-30 hidden lg:block" />
      </motion.div>
      
      <motion.div 
        className="flex items-center gap-4 mb-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Palette className="w-10 h-10" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black">DESIGN WORKS</h2>
      </motion.div>
      <p className="text-xl font-bold mb-10 text-gray-700">Posters & Visual Explorations</p>

      {/* Grid Layout - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {posters.map((poster, index) => (
          <motion.div
            key={index}
            className="aspect-[3/4] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer overflow-hidden relative group"
            initial={{ 
              opacity: 0, 
              scale: 0.3,
              rotate: 180,
              y: 100
            }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              rotate: 0,
              y: 0
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: index * 0.15,
              duration: 0.8
            }}
            whileHover={{ 
              x: 3,
              y: 3,
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
              scale: 1.02,
              rotate: 2
            }}
          >
            {/* Gradient Background - Always visible */}
            <div className={`bg-gradient-to-br ${poster.gradient} w-full h-full absolute inset-0`} />
            
            {/* Poster Image - Overlaid on gradient */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={poster.image}
                alt={`Poster ${index + 1}`}
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            
            {/* Decorative element on each poster */}
            <motion.div 
              className="absolute top-2 right-2 w-8 h-8 bg-white border-2 border-black opacity-70 z-20"
              animate={{ 
                rotate: [0, 180, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-white border-2 border-black opacity-70 z-20"
              animate={{ 
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          x: 3,
          y: 3,
          boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)"
        }}
      >
        <motion.div 
          className="absolute -top-3 -left-3 w-10 h-10 bg-pink-300 border-2 border-black"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <h3 className="text-xl font-bold mb-3">ABOUT THIS WORK</h3>
        <p className="text-base font-medium leading-relaxed mb-5 text-gray-700">
          A collection of posters and visual designs created using Figma and Canva for student communities and events, focusing on visual hierarchy, clarity, and communication.
        </p>
        <div className="bg-pink-100 border-2 border-black px-4 py-2 inline-block">
          <p className="font-bold text-sm">TOOLS: Figma · Canva</p>
        </div>
      </motion.div>
    </section>
  );
}