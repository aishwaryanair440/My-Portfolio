import React from 'react';
import { User, Heart, Sparkles, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { SpiralElement, ZigzagElement, StarDoodle, CrossDoodle } from './NeobrutalismElements';

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-yellow-50 to-orange-50 border-y-4 border-black my-20 relative overflow-hidden">
      {/* Enhanced Decorative elements with animation */}
      <SpiralElement className="absolute top-10 right-10 opacity-40 hidden lg:block" size={90} color="#F472B6" />
      <ZigzagElement className="absolute bottom-10 left-20 opacity-30 hidden lg:block" color="#FCD34D" />
      <StarDoodle className="absolute top-1/2 right-1/4 opacity-30 hidden lg:block" size={70} color="#4ADE80" />
      <CrossDoodle className="absolute bottom-20 right-10 opacity-30 hidden lg:block" size={60} color="#60A5FA" />
      
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Heart className="absolute top-10 right-10 w-16 h-16 text-pink-300 fill-pink-300 opacity-40 hidden lg:block" />
      </motion.div>
      <motion.div
        animate={{ 
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles className="absolute bottom-10 left-10 w-12 h-12 text-yellow-400 opacity-40 hidden lg:block" />
      </motion.div>
      
      <motion.div 
        className="absolute top-20 left-1/4 w-16 h-16 bg-blue-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-10 w-12 h-12 rounded-full bg-pink-400 border-2 border-black opacity-40 hidden lg:block"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="flex items-center gap-4 mb-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <User className="w-10 h-10" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black">ABOUT ME</h2>
      </motion.div>

      <motion.div 
        className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 relative"
        initial={{ 
          opacity: 0, 
          scale: 0.8,
          rotateX: -30,
          transformPerspective: 1000
        }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          rotateX: 0
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 1
        }}
        whileHover={{ 
          x: 4,
          y: 4,
          boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
          scale: 1.01
        }}
      >
        {/* Enhanced Decorative corner elements with animation */}
        <motion.div 
          className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-300 border-2 border-black"
          animate={{ 
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-3 -left-3 w-10 h-10 bg-pink-300 border-2 border-black"
          animate={{ 
            rotate: [0, -90, -180, -270, -360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 -right-4 hidden lg:block"
          animate={{ 
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap className="w-8 h-8 text-yellow-500 fill-yellow-500" />
        </motion.div>
        
        <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-800">
          I'm a UI/UX designer and frontend enthusiast who enjoys turning ideas into bold, usable interfaces.
          I explore no/low-code tools, open source collaboration, and generative AI while building strong foundations in frontend development and design systems.
        </p>
      </motion.div>
    </section>
  );
}