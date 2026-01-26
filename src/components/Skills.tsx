import React from 'react';
import { Code, Palette, GitBranch, Settings, Zap, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { WavyLine, CrossDoodle, SpiralElement, StarDoodle, ZigzagElement } from './NeobrutalismElements';

export function Skills() {
  const skills = [
    {
      icon: Code,
      title: 'FRONTEND',
      color: 'bg-blue-300',
      items: ['HTML', 'CSS', 'JavaScript', 'Material UI', 'Tailwind CSS', 'Framer Motion']
    },
    {
      icon: Palette,
      title: 'UI / UX',
      color: 'bg-pink-300',
      items: ['Figma', 'Wireframing', 'Prototyping', 'UX Writing', 'Visual Design']
    },
    {
      icon: GitBranch,
      title: 'COLLABORATION',
      color: 'bg-green-300',
      items: ['Git', 'GitHub', 'Vercel', 'Netlify']
    },
    {
      icon: Settings,
      title: 'OTHER',
      color: 'bg-orange-300',
      items: ['Node.js (Foundational)', 'Python', 'C', 'Generative AI Tools (Exploring)']
    }
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Enhanced Decorative elements with animation */}
      <WavyLine className="absolute top-10 right-20 opacity-40 hidden lg:block" color="#4ADE80" />
      <CrossDoodle className="absolute bottom-10 left-20 opacity-30 hidden lg:block" size={50} color="#F472B6" />
      <SpiralElement className="absolute top-1/3 left-10 opacity-30 hidden lg:block" size={80} color="#60A5FA" />
      <StarDoodle className="absolute bottom-1/4 right-1/4 opacity-30 hidden lg:block" size={65} color="#FCD34D" />
      <ZigzagElement className="absolute top-20 left-1/3 opacity-30 hidden lg:block" color="#A78BFA" />
      
      <motion.div 
        className="absolute top-10 right-20 w-20 h-20 bg-green-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          rotate: [12, 32, 12],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-pink-400 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          scale: [1, 1.25, 1],
          x: [0, -10, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 right-1/4 w-14 h-14 bg-yellow-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          rotate: [-30, 30, -30],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        animate={{ 
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Cpu className="absolute top-1/4 left-1/4 w-12 h-12 text-blue-400 opacity-30 hidden lg:block" />
      </motion.div>
      
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Zap className="absolute bottom-1/3 left-10 w-10 h-10 text-yellow-400 fill-yellow-400 opacity-30 hidden lg:block" />
      </motion.div>
      
      <motion.div 
        className="flex items-center gap-4 mb-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Code className="w-10 h-10" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black">SKILLS</h2>
        <div className="h-2 flex-grow bg-black max-w-xs"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              className={`${skill.color} border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden`}
              initial={{ 
                opacity: 0, 
                rotateX: -90,
                transformPerspective: 1000,
                y: 50
              }}
              whileInView={{ 
                opacity: 1, 
                rotateX: 0,
                y: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
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
                scale: 1.02
              }}
            >
              <motion.div 
                className="absolute -top-3 -right-3 w-12 h-12 bg-white border-2 border-black opacity-60"
                animate={{ 
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="bg-black text-white p-5 border-b-2 border-black flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold">{skill.title}</h3>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={i}
                      className="bg-white px-3 py-1.5 border-2 border-black font-medium text-sm cursor-pointer"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#000",
                        color: "#fff"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
