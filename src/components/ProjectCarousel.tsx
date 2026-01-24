import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ProjectCarousel({ 
  images, 
  autoPlay = true, 
  autoPlayInterval = 4000 
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotate: direction > 0 ? 5 : -5
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotate: direction < 0 ? 5 : -5
    })
  };

  return (
    <div className="relative w-full">
      {/* Main Carousel Container */}
      <div className="relative bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden h-96 md:h-[500px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
              rotate: { duration: 0.3 }
            }}
            className="absolute w-full h-full"
          >
            <ImageWithFallback
              src={images[currentIndex]}
              alt={`Project image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Image Counter Badge */}
            <motion.div 
              className="absolute top-4 right-4 bg-yellow-300 border-2 border-black px-4 py-2 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer z-10"
          whileHover={{ 
            x: -3,
            boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
            scale: 1.1
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer z-10"
          whileHover={{ 
            x: 3,
            boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
            scale: 1.1
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`border-2 border-black cursor-pointer transition-all ${
              index === currentIndex
                ? 'bg-black w-12 h-3'
                : 'bg-white w-3 h-3 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
