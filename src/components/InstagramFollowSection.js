import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InstagramFollowSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleInstagramClick = useCallback(() => {
    window.open('https://www.instagram.com/auna.in/', '_blank');
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Memoized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -10 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 120
      }
    }
  }), []);

  const floatingVariants = useMemo(() => ({
    animate: {
      y: [0, -10, 0],
      x: [0, 3, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }), []);

  const coffeeBeansVariants = useMemo(() => ({
    animate: {
      rotate: [0, 360],
      scale: [1, 1.03, 1],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }), []);

  const shimmerVariants = useMemo(() => ({
    animate: {
      x: [-100, 100],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }), []);

  const particleVariants = useMemo(() => ({
    animate: {
      y: [0, -25, 0],
      opacity: [0, 0.8, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }), []);

  // Memoized decorative elements
  const steamElements = useMemo(() => 
    [...Array(3)].map((_, i) => (
      <motion.div
        key={`steam-${i}`}
        className="absolute w-1 h-6 bg-gradient-to-t from-mochaBrown/20 to-transparent rounded-full"
        style={{
          top: `${15 + i * 8}%`,
          right: `${20 + i * 10}%`,
        }}
        animate={{
          scaleY: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -8, 0]
        }}
        transition={{
          duration: 3 + i * 0.4,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "easeInOut"
        }}
      />
    )), []
  );

  const particleElements = useMemo(() => 
    [...Array(3)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute w-2 h-2 bg-mochaBrown rounded-full opacity-30"
        style={{
          top: `${30 + i * 20}%`,
          left: `${15 + i * 25}%`,
        }}
        variants={particleVariants}
        animate="animate"
        transition={{
          delay: i * 0.6,
          duration: 5,
          repeat: Infinity
        }}
      />
    )), [particleVariants]
  );

  // Enhanced floating dots background
  const floatingDots = useMemo(() => {
    const dots = [];
    const colors = ['bg-mochaBrown', 'bg-coffeeDeep', 'bg-oliveGreen', 'bg-darkolivegreen'];
    const sizes = ['w-1 h-1', 'w-1.5 h-1.5', 'w-2 h-2'];
    
    for (let i = 0; i < 25; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const opacity = Math.random() * 0.3 + 0.1; // 0.1 to 0.4
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = Math.random() * 6 + 8; // 8-14 seconds
      
      dots.push(
        <motion.div
          key={`dot-${i}`}
          className={`absolute ${size} ${color} rounded-full`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            opacity: opacity,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            scale: [1, 1.2, 1],
            opacity: [opacity, opacity * 1.5, opacity],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        />
      );
    }
    return dots;
  }, []);

  const orbitingElements = useMemo(() => 
    [...Array(3)].map((_, i) => (
      <motion.div
        key={`orbit-${i}`}
        className="absolute w-2 h-2 bg-oliveGreen rounded-full"
        style={{
          top: '50%',
          left: '50%',
          marginTop: '-4px',
          marginLeft: '-4px',
        }}
        animate={{
          rotate: [0, 360],
          x: [0, 45 * Math.cos(i * 2 * Math.PI / 3)],
          y: [0, 45 * Math.sin(i * 2 * Math.PI / 3)]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          delay: i * 0.4
        }}
      />
    )), []
  );

  return (
    <div className="pt-6 pb-3 smd:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative bg-gradient-to-br from-amber-100 via-amber-150 to-amber-100 rounded-2xl p-5 md:p-8 
                     shadow-xl border-4 border-mochaBrown/20 overflow-hidden group cursor-pointer"
          onClick={handleInstagramClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Optimized pulsing border */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-oliveGreen/30"
            animate={{
              borderColor: ['rgba(92, 97, 71, 0.3)', 'rgba(92, 97, 71, 0.5)', 'rgba(92, 97, 71, 0.3)'],
              scale: [1, 1.001, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Enhanced floating dots background */}
          {floatingDots}

          {/* Floating coffee steam effect */}
          {steamElements}

          {/* Subtle ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
            animate={isHovered ? {
              scale: [1, 1.3],
              opacity: [0, 0.2, 0]
            } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Optimized Corner Patterns */}
          <motion.div
            className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-oliveGreen/40 rounded-tl-lg"
            animate={{
              borderColor: ['rgba(92, 97, 71, 0.4)', 'rgba(139, 69, 19, 0.5)', 'rgba(92, 97, 71, 0.4)']
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-mochaBrown/40 rounded-br-lg"
            animate={{
              borderColor: ['rgba(139, 69, 19, 0.4)', 'rgba(92, 97, 71, 0.5)', 'rgba(139, 69, 19, 0.4)']
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />

          {/* Optimized shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent will-change-transform"
            variants={shimmerVariants}
            animate="animate"
            style={{ width: '200%', height: '100%' }}
          />

          {/* Coffee Bean Decorations */}
          <motion.div
            variants={coffeeBeansVariants}
            animate="animate"
            className="absolute top-6 right-6 w-6 h-6 bg-mochaBrown rounded-full opacity-20"
          />
          <motion.div
            variants={coffeeBeansVariants}
            animate="animate"
            className="absolute bottom-6 left-6 w-5 h-5 bg-coffeeDeep rounded-full opacity-25"
            style={{ animationDelay: '2s' }}
          />
          <motion.div
            variants={coffeeBeansVariants}
            animate="animate"
            className="absolute top-1/3 left-10 w-3 h-3 bg-oliveGreen rounded-full opacity-20"
            style={{ animationDelay: '4s' }}
          />

          {/* Floating Particles */}
          {particleElements}

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Instagram Icon with optimized animation */}
            <motion.div
              variants={itemVariants}
              className="mb-3 inline-block"
            >
              <motion.div
                className="relative"
                variants={floatingVariants}
                animate="animate"
              >
                <motion.svg 
                  className="w-16 h-16 mx-auto text-mochaBrown drop-shadow-lg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  animate={isHovered ? { 
                    scale: 1.15,
                    rotate: 8,
                    color: '#8B4513'
                  } : {
                    scale: 1,
                    rotate: 0,
                    color: '#6B4423'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </motion.svg>
                
                {/* Optimized glowing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-3 border-oliveGreen opacity-0"
                  animate={isHovered ? { 
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.2, 1.4]
                  } : {}}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Main Text */}
            <motion.div variants={itemVariants} className="mb-3">
              <motion.h2 
                className="text-2xl md:text-3xl font-['Cormorant Garamond'] font-bold text-coffeeDeep mb-3"
                animate={isHovered ? { 
                  scale: 1.03,
                  color: '#8B4513'
                } : {}}
                transition={{ duration: 0.3 }}
              >
                Follow Our Journey
              </motion.h2>
              
              <motion.div 
                className="w-28 h-1 bg-gradient-to-r from-oliveGreen via-mochaBrown to-coffeeDeep mx-auto mb-4"
                animate={{
                  scaleX: [1, 1.15, 1],
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.p 
                className="text-lg md:text-xl text-darkolivegreen max-w-4xl mx-auto leading-relaxed font-medium"
                animate={isHovered ? { y: -1 } : {}}
                transition={{ duration: 0.3 }}
              >
                Discover our coffee themed bags, sustainable stories, and brewing adventures on Instagram
              </motion.p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="relative inline-block"
            >
              <motion.div
                className="bg-gradient-to-r from-oliveGreen via-darkolivegreen to-mochaBrown text-white px-10 py-3 rounded-full 
                         text-lg font-bold shadow-lg border-2 border-coffeeDeep/30 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.25)"
                }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  boxShadow: [
                    "0 8px 25px rgba(0,0,0,0.2)",
                    "0 12px 30px rgba(0,0,0,0.25)",
                    "0 8px 25px rgba(0,0,0,0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <motion.span
                    animate={{ x: isHovered ? 3 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    @auna.in
                  </motion.span>
                  <motion.span
                    className="ml-2 text-xl"
                    animate={{ 
                      rotate: isHovered ? 12 : 0,
                      scale: isHovered ? 1.15 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>
                
                {/* Optimized background overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-coffeeDeep via-mochaBrown to-oliveGreen opacity-0"
                  animate={isHovered ? { opacity: 0.8 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Optimized orbiting elements */}
              {orbitingElements}
            </motion.div>

            {/* Coffee Quote */}
            <motion.div
              variants={itemVariants}
              className="mt-4"
            >
              <motion.p 
                className="text-base italic text-coffeeDeep/70 font-['Cormorant Garamond'] max-w-2xl mx-auto"
                animate={{
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                "Where every bag tells a story, every post brews inspiration"
              </motion.p>
            </motion.div>
          </div>

          {/* Optimized corner decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-oliveGreen/15 to-transparent rounded-bl-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-mochaBrown/15 to-transparent rounded-tr-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(InstagramFollowSection);