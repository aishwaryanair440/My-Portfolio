import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
  type: "star" | "square" | "circle" | "cross";
  color: string;
  rotation: number;
}

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorType, setCursorType] = useState<
    "default" | "pointer" | "text" | "box"
  >("default");
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClicking, setIsClicking] = useState(false);
  const [particleId, setParticleId] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  // Colorful palette for normal cursor
  const cursorColors = [
    "#FF6B6B",
    "#4ECDC4",
    "#FFD93D",
    "#6BCB77",
    "#4D96FF",
    "#FF8066",
    "#A78BFA",
  ];

  useEffect(() => {
    // Cycle through colors for the default cursor
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % cursorColors.length);
    }, 2000);

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;

      // Determine cursor type based on element
      if (
        target.tagName === "P" ||
        target.tagName === "SPAN" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "H5" ||
        target.tagName === "LI"
      ) {
        setCursorType("text");
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setCursorType("pointer");
      } else if (
        target.classList.contains("border-2") ||
        target.classList.contains("border-4") ||
        target.closest('[class*="border-"]') !== null
      ) {
        setCursorType("box");
      } else {
        setCursorType("default");
      }
    };

    const handleClick = (e: MouseEvent) => {
      setIsClicking(true);
      createParticles(e.clientX, e.clientY);
      setTimeout(() => setIsClicking(false), 200);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener(
        "mousemove",
        updateMousePosition,
      );
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const createParticles = (x: number, y: number) => {
    const colors = [
      "#60A5FA",
      "#F472B6",
      "#FCD34D",
      "#4ADE80",
      "#A78BFA",
    ];
    const types: Array<"star" | "square" | "circle" | "cross"> =
      ["star", "square", "circle", "cross"];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: particleId + i,
        x,
        y,
        type: types[Math.floor(Math.random() * types.length)],
        color:
          colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
      });
    }

    setParticles([...particles, ...newParticles]);
    setParticleId(particleId + 8);

    // Remove particles after animation
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter(
          (p) => !newParticles.find((np) => np.id === p.id),
        ),
      );
    }, 1000);
  };

  const getCursorScale = () => {
    if (isClicking) return 0.8;
    if (cursorType === "pointer") return 1.3;
    if (cursorType === "text") return 1.1;
    if (cursorType === "box") return 1.2;
    return 1;
  };

  const getCursorColor = () => {
    if (cursorType === "pointer") return "#F472B6"; // Pink
    if (cursorType === "text") return "#60A5FA"; // Blue
    if (cursorType === "box") return "#4ADE80"; // Green
    return cursorColors[colorIndex]; // Colorful default
  };

  return (
    <>
      {/* Custom Arrow Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        animate={{
          scale: getCursorScale(),
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        {/* Neobrutalism Arrow Cursor */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer shadow/border */}
          <path
            d="M 3 2 L 3 18 L 8 13 L 11 20 L 13 19 L 10 12 L 17 12 L 3 2 Z"
            fill="#000"
            transform="translate(1, 1)"
          />
          {/* Main cursor */}
          <motion.path
            d="M 3 2 L 3 18 L 8 13 L 11 20 L 13 19 L 10 12 L 17 12 L 3 2 Z"
            fill={getCursorColor()}
            stroke="#000"
            strokeWidth="1.5"
            strokeLinejoin="round"
            animate={{
              fill: getCursorColor(),
            }}
            transition={{ duration: 0.2 }}
          />
          {/* White highlight for depth */}
          <path
            d="M 5 5 L 5 15 L 8 12 L 10 17 L 11 16.5 L 9 11 L 14 11 L 5 5 Z"
            fill="white"
            opacity="0.5"
          />
        </svg>

        {/* Glow effect on click */}
        <AnimatePresence>
          {isClicking && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-3 border-yellow-400"
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* Cursor type indicator */}
        {cursorType === "pointer" && (
          <motion.div
            className="absolute right-0 top-0 w-3 h-3 bg-pink-400 border-2 border-black rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        )}
        {cursorType === "text" && (
          <motion.div
            className="absolute right-0 bottom-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect
                x="0"
                y="0"
                width="12"
                height="2"
                fill="#60A5FA"
                stroke="#000"
                strokeWidth="1"
              />
              <rect
                x="5"
                y="2"
                width="2"
                height="8"
                fill="#60A5FA"
                stroke="#000"
                strokeWidth="1"
              />
              <rect
                x="0"
                y="10"
                width="12"
                height="2"
                fill="#60A5FA"
                stroke="#000"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        )}
        {cursorType === "box" && (
          <motion.div
            className="absolute left-0 top-0 w-4 h-4 border-2 border-green-400"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 45 }}
            exit={{ scale: 0 }}
          />
        )}
      </motion.div>

      {/* Click Particles */}
      <AnimatePresence>
        {particles.map((particle) => {
          const angle = Math.random() * Math.PI * 2;
          const distance = 50 + Math.random() * 100;
          const endX = particle.x + Math.cos(angle) * distance;
          const endY = particle.y + Math.sin(angle) * distance;

          return (
            <motion.div
              key={particle.id}
              className="fixed pointer-events-none z-[9998]"
              initial={{
                x: particle.x - 8,
                y: particle.y - 8,
                scale: 0,
                rotate: particle.rotation,
                opacity: 1,
              }}
              animate={{
                x: endX - 8,
                y: endY - 8,
                scale: [0, 1.2, 0],
                rotate: particle.rotation + 360,
                opacity: [1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {particle.type === "star" && (
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M 9 1 L 11 7 L 17 7 L 12 11 L 14 17 L 9 13 L 4 17 L 6 11 L 1 7 L 7 7 Z"
                    fill={particle.color}
                    stroke="#000"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
              {particle.type === "square" && (
                <div
                  className="w-5 h-5 border-2 border-black"
                  style={{ backgroundColor: particle.color }}
                />
              )}
              {particle.type === "circle" && (
                <div
                  className="w-5 h-5 rounded-full border-2 border-black"
                  style={{ backgroundColor: particle.color }}
                />
              )}
              {particle.type === "cross" && (
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <line
                    x1="3"
                    y1="3"
                    x2="15"
                    y2="15"
                    stroke={particle.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="15"
                    y1="3"
                    x2="3"
                    y2="15"
                    stroke={particle.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="3"
                    x2="15"
                    y2="15"
                    stroke="#000"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <line
                    x1="15"
                    y1="3"
                    x2="3"
                    y2="15"
                    stroke="#000"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Trail effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997] w-2 h-2 rounded-full border-2 border-black"
        style={{
          x: mousePosition.x + 6,
          y: mousePosition.y + 6,
          backgroundColor: getCursorColor(),
        }}
        animate={{
          scale: cursorType === "pointer" ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.05,
        }}
      />
    </>
  );
}