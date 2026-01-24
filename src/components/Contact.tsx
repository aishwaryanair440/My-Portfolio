import React from 'react';
import { Mail, Github, Linkedin, Send, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { SpiralElement, StarDoodle, ZigzagElement, CrossDoodle } from './NeobrutalismElements';

export function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Enhanced Decorative elements with animation */}
      <SpiralElement className="absolute top-10 right-20 opacity-40 hidden lg:block" size={70} color="#60A5FA" />
      <StarDoodle className="absolute bottom-20 left-20 opacity-30 hidden lg:block" size={60} color="#F472B6" />
      <ZigzagElement className="absolute top-1/3 left-1/4 opacity-30 hidden lg:block" color="#FCD34D" />
      <CrossDoodle className="absolute bottom-1/4 right-1/4 opacity-30 hidden lg:block" size={55} color="#4ADE80" />
      
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [45, 55, 45]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Send className="absolute top-10 right-20 w-12 h-12 text-blue-300 opacity-40 hidden lg:block" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-pink-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/4 left-10 w-16 h-16 bg-yellow-300 border-2 border-black opacity-30 hidden lg:block"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Zap className="absolute top-1/2 right-1/3 w-10 h-10 text-yellow-400 fill-yellow-400 opacity-30 hidden lg:block" />
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
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Mail className="w-10 h-10" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black">CONTACT</h2>
        <motion.div 
          className="h-2 flex-grow bg-gradient-to-r from-pink-400 to-purple-400 max-w-md hidden lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.a
          href="mailto:aishwaryanair440@gmail.com"
          className="bg-pink-300 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 group cursor-pointer"
          initial={{ 
            opacity: 0, 
            x: -100,
            rotate: -15,
            scale: 0.8
          }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            rotate: 0,
            scale: 1
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.8
          }}
          whileHover={{ 
            x: 3,
            y: 3,
            boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
            scale: 1.05
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Mail className="w-12 h-12 mb-4" />
          </motion.div>
          <h3 className="text-xl font-bold mb-2">EMAIL</h3>
          <p className="font-medium text-sm break-all">aishwaryanair440@gmail.com</p>
        </motion.a>

        <motion.a
          href="https://github.com/aishwaryanair440"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-300 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 group cursor-pointer"
          initial={{ 
            opacity: 0, 
            y: 100,
            rotate: 0,
            scale: 0.8
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            rotate: 0,
            scale: 1
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 12,
            delay: 0.15,
            duration: 0.8
          }}
          whileHover={{ 
            x: 3,
            y: 3,
            boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
            scale: 1.05
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Github className="w-12 h-12 mb-4" />
          </motion.div>
          <h3 className="text-xl font-bold mb-2">GITHUB</h3>
          <p className="font-medium text-sm">@aishwaryanair440</p>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/aishwarya-a-nair?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-300 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 group cursor-pointer"
          initial={{ 
            opacity: 0, 
            x: 100,
            rotate: 15,
            scale: 0.8
          }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            rotate: 0,
            scale: 1
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 12,
            delay: 0.3,
            duration: 0.8
          }}
          whileHover={{ 
            x: 3,
            y: 3,
            boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
            scale: 1.05
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Linkedin className="w-12 h-12 mb-4" />
          </motion.div>
          <h3 className="text-xl font-bold mb-2">LINKEDIN</h3>
          <p className="font-medium text-sm">@aishwarya-a-nair</p>
        </motion.a>
      </div>

      {/* Footer */}
      <motion.div 
        className="mt-20 pt-10 border-t-4 border-black text-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-300 border-2 border-black w-12 h-12"
          animate={{ 
            rotate: [45, 135, 45]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <p className="text-xl font-bold">AISHWARYA A NAIR</p>
        <p className="text-base font-medium mt-2 text-gray-700">UI/UX Designer & Frontend Developer | No/Low code Enthusiast & Open Source Contribution Enthusiast</p>
        <p className="text-sm font-medium mt-4 text-gray-600">© 2026 Aishwarya A Nair. All rights reserved.</p>
      </motion.div>
    </section>
  );
}