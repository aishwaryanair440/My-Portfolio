import React from 'react';
import { Github, Mail, ArrowRight, Sparkles, Briefcase, GraduationCap, FileText, FolderOpen, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { SpiralElement, ZigzagElement, StarDoodle, ScribbleCircle, ArrowDoodle } from './NeobrutalismElements';
import avatarImage from '../assets/ff535893732649ce857b99ce60b597bd18bf6387.png';

export function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Neobrutalism Decorative Elements with animations */}
      <SpiralElement className="absolute top-10 right-10 hidden lg:block" size={80} color="#FCD34D" />
      <ScribbleCircle className="absolute bottom-20 left-10 hidden lg:block" size={70} color="#F472B6" />
      <ArrowDoodle className="absolute top-20 left-1/4 hidden lg:block" color="#60A5FA" />
      <ZigzagElement className="absolute bottom-10 right-1/3 hidden lg:block" color="#A78BFA" />

      <motion.div
        className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 border-2 border-black hidden lg:block"
        animate={{
          rotate: [12, 22, 12],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-pink-400 border-2 border-black hidden lg:block"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="w-full relative z-10">
        {/* Profile Avatar */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <motion.div
              className="w-40 h-40 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={avatarImage}
                alt="Aishwarya A Nair"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 bg-yellow-300 border-2 border-black rounded-full p-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          className="text-center space-y-4 mb-8"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 0.8
          }}
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Aishwarya A Nair
          </h1>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-blue-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            Junior UI/UX Designer & Frontend Developer| No/Low Code & Open Source Enthusiast
          </motion.h2>
        </motion.div>

        {/* Experience & Roles */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: Briefcase, text: 'Design Volunteer @ TinkerHub GEC Palakkad', color: 'bg-purple-200' },
            { icon: GraduationCap, text: 'Documentation Lead @ Google Developer Group GEC Palakkad', color: 'bg-cyan-200' },
            { icon: FileText, text: 'Documentation Volunteer @ INVENTO \'26', color: 'bg-orange-200' }
          ].map((badge, index) => (
            <motion.div
              key={index}
              className={`${badge.color} border-2 border-black px-5 py-3 inline-flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 0.6 + index * 0.15,
                type: "spring",
                stiffness: 200,
                damping: 12
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
                boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)"
              }}
            >
              <badge.icon className="w-5 h-5" />
              <span className="font-bold text-sm">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-blue-600 text-white font-bold text-base border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              delay: 1.1,
              type: "spring",
              stiffness: 150,
              damping: 10
            }}
            whileHover={{
              x: 3,
              y: 3,
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FolderOpen className="w-5 h-5" />
            VIEW PROJECTS
          </motion.a>
          <motion.a
            href="#skills"
            className="px-8 py-4 bg-green-600 text-white font-bold text-base border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, y: 50, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              delay: 1.2,
              type: "spring",
              stiffness: 150,
              damping: 10
            }}
            whileHover={{
              x: 3,
              y: 3,
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-5 h-5" />
            SKILLS
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-pink-600 text-white font-bold text-base border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-flex items-center gap-2 cursor-pointer"
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              delay: 1.3,
              type: "spring",
              stiffness: 150,
              damping: 10
            }}
            whileHover={{
              x: 3,
              y: 3,
              boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            CONTACT
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
