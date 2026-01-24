import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  tags: string[];
  onClick: () => void;
}

export function ProjectCard({
  number,
  title,
  subtitle,
  description,
  color,
  gradientFrom,
  gradientVia,
  gradientTo,
  tags,
  onClick
}: ProjectCardProps) {
  return (
    <motion.div 
      className="mb-12 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
    >
      <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <motion.span 
              className={`text-5xl font-black ${color}`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              {number}
            </motion.span>
            <div>
              <h3 className="text-3xl font-black mb-1">{title}</h3>
              <p className="text-lg font-medium text-gray-600">{subtitle}</p>
            </div>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight className="w-8 h-8 flex-shrink-0" />
          </motion.div>
        </div>

        <p className="text-base font-medium leading-relaxed text-gray-700 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 px-3 py-1.5 border-2 border-black font-medium text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}