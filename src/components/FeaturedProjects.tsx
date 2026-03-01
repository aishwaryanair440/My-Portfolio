
import { motion } from 'motion/react';
import { SpiralElement, WavyLine, CrossDoodle, DottedLine, ZigzagElement, StarDoodle } from './NeobrutalismElements';
import { ProjectCard } from './ProjectCard';
import { Rocket, Layers } from 'lucide-react';

interface FeaturedProjectsProps {
  onProjectClick: (projectId: string) => void;
}

export function FeaturedProjects({ onProjectClick }: FeaturedProjectsProps) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20 relative">
      {/* Enhanced Decorative background elements with animation */}
      <SpiralElement className="absolute top-10 right-20 opacity-30 hidden lg:block" size={100} color="#60A5FA" />
      <WavyLine className="absolute top-40 left-10 opacity-40 hidden lg:block" color="#F472B6" />
      <CrossDoodle className="absolute bottom-20 right-10 opacity-30 hidden lg:block" size={50} color="#4ADE80" />
      <ZigzagElement className="absolute top-1/3 right-1/4 opacity-30 hidden lg:block" color="#FCD34D" />
      <StarDoodle className="absolute bottom-10 left-20 opacity-30 hidden lg:block" size={60} color="#A78BFA" />

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Rocket className="absolute top-20 right-1/3 w-14 h-14 text-orange-400 opacity-30 hidden lg:block" />
      </motion.div>

      <motion.div
        className="flex items-center gap-4 mb-12"
        initial={{ opacity: 0, x: -100, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8
        }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 180 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Layers className="w-10 h-10" />
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          FEATURED PROJECTS
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <DottedLine className="hidden lg:block" color="#000" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100, rotateY: -15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.8
        }}
      >
        <ProjectCard
          number="01"
          title="SkillSwap"
          subtitle="UI/UX Hackathon Case Study"
          description="SkillSwap is a peer-to-peer skill exchange platform designed during a UI/UX hackathon to enable structured and low-friction learning among college students."
          color="text-[#7e22ce]"
          gradientFrom="from-purple-300"
          gradientVia="via-purple-400"
          gradientTo="to-pink-400"
          tags={['UI/UX Design', 'Figma', 'Prototyping', 'Hackathon']}
          onClick={() => onProjectClick('skillswap')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, rotateY: 15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.8,
          delay: 0.2
        }}
      >
        <ProjectCard
          number="02"
          title="Hacktoberfest Contribution"
          subtitle="Open Source · Frontend"
          description="Contributed a UI card component to an open-source repository during Hacktoberfest, involving design, frontend implementation, and successful pull request submission."
          color="text-[#15803d]"
          gradientFrom="from-green-300"
          gradientVia="via-green-400"
          gradientTo="to-teal-500"
          tags={['Open Source', 'HTML', 'CSS', 'GitHub']}
          onClick={() => onProjectClick('hacktoberfest')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100, rotateY: -15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.8,
          delay: 0.4
        }}
      >
        <ProjectCard
          number="03"
          title="PERSONAL PORTFOLIO WEBSITE"
          subtitle="Personal Portfolio · React · Tailwind CSS"
          description="A bold, modern portfolio website built with React.js and Tailwind CSS, featuring neobrutalism aesthetics, comprehensive Framer Motion animations, and interactive project showcases."
          color="text-[#c2410c]"
          gradientFrom="from-orange-300"
          gradientVia="via-orange-400"
          gradientTo="to-red-400"
          tags={['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript']}
          onClick={() => onProjectClick('portfolio')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, rotateY: 15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.8,
          delay: 0.6
        }}
      >
        <ProjectCard
          number="04"
          title="CURSOR ANXIETY SIMULATOR"
          subtitle="Interactive Dark Patterns Experience · React · TypeScript"
          description="An interactive deep-dive into the Dark Patterns that define the modern web. Navigate 13 hostile UI sections while your cursor behaviour is silently profiled — and receive a full cognitive stress analysis."
          color="text-[#7c3aed]"
          gradientFrom="from-violet-400"
          gradientVia="via-purple-500"
          gradientTo="to-indigo-600"
          tags={['React', 'TypeScript', 'Dark Patterns', 'Vercel']}
          onClick={() => onProjectClick('cursoranxiety')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100, rotateY: -15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.8,
          delay: 0.8
        }}
      >
        <ProjectCard
          number="05"
          title="FRESHRUSH"
          subtitle="Agritech Supply-Chain Urgency System · React · Firebase"
          description="Real-time produce decay monitoring and buyer matching platform for farmers to mitigate losses from buyer cancellations. Fully functional with Firebase backend, live HH:MM:SS countdowns, and Material Design 3 glassmorphism UI."
          color="text-[#059669]"
          gradientFrom="from-emerald-300"
          gradientVia="via-green-400"
          gradientTo="to-teal-500"
          tags={['React', 'Firebase', 'Firestore', 'Material Design 3']}
          onClick={() => onProjectClick('freshrush')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, rotateY: 15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.8,
          delay: 1.0
        }}
      >
        <ProjectCard
          number="06"
          title="KTU WEBSITE QA AUDIT"
          subtitle="Quality Assurance · Lighthouse · Accessibility · SEO"
          description="A comprehensive non-functional QA audit of the official KTU website using Google Lighthouse. Identified critical issues in performance, accessibility, best practices, and SEO — with a full report and actionable recommendations."
          color="text-[#1e40af]"
          gradientFrom="from-blue-300"
          gradientVia="via-slate-400"
          gradientTo="to-indigo-500"
          tags={['QA Testing', 'Lighthouse', 'Accessibility', 'SEO']}
          onClick={() => onProjectClick('ktuqa')}
        />
      </motion.div>
    </section>
  );
}