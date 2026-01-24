import React from 'react';
import { Briefcase, Award, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { SpiralElement, StarDoodle, CrossDoodle, ZigzagElement } from './NeobrutalismElements';

export function Experience() {
  const experiences = [
    {
      role: 'Design Volunteer',
      organization: 'TinkerHub GEC Palakkad',
      timeline: 'November 2025 - Present',
      color: 'bg-purple-200'
    },
    {
      role: 'Documentation Lead',
      organization: 'Google Developer Group GEC Palakkad',
      timeline: 'October 2025 - Present',
      color: 'bg-cyan-200'
    },
    {
      role: 'Documentation Volunteer',
      organization: 'INVENTO \'26',
      timeline: 'October 2025 - Present',
      color: 'bg-green-200'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Enhanced Decorative elements with animation */}
      <SpiralElement className="absolute top-10 right-10 opacity-30 hidden lg:block" size={85} color="#FCD34D" />
      <StarDoodle className="absolute bottom-20 left-10 opacity-30 hidden lg:block" size={70} color="#F472B6" />
      <CrossDoodle className="absolute top-1/3 left-1/4 opacity-30 hidden lg:block" size={55} color="#60A5FA" />
      <ZigzagElement className="absolute bottom-10 right-1/4 opacity-30 hidden lg:block" color="#4ADE80" />
      
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Award className="absolute top-10 right-10 w-16 h-16 text-yellow-300 fill-yellow-300 opacity-40 hidden lg:block" />
      </motion.div>
      
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-orange-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          rotate: [45, 135, 45],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-20 w-16 h-16 rounded-full bg-blue-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <TrendingUp className="absolute bottom-20 right-1/3 w-12 h-12 text-green-400 opacity-30 hidden lg:block" />
      </motion.div>
      
      <motion.div 
        className="flex items-center gap-4 mb-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Briefcase className="w-10 h-10" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black">EXPERIENCE & ROLES</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`${exp.color} border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 relative overflow-hidden`}
            initial={{ 
              opacity: 0, 
              scale: 0.5,
              y: 100,
              rotate: index % 2 === 0 ? -10 : 10
            }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              rotate: 0
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: index * 0.2,
              duration: 0.6
            }}
            whileHover={{ 
              x: 3,
              y: 3,
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
              scale: 1.02
            }}
          >
            <motion.div 
              className="absolute -top-2 -right-2 w-10 h-10 bg-white border-2 border-black opacity-70"
              animate={{ 
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="text-5xl font-black mb-3 text-black/20">{String(index + 1).padStart(2, '0')}</div>
            <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
            <p className="text-base font-medium text-gray-700 mb-1">{exp.organization}</p>
            <p className="text-sm font-medium text-gray-600">{exp.timeline}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}