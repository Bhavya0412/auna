import React, { useEffect, useState } from 'react';
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

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/auna.in/', '_blank');
  };

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -15 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      x: [0, 5, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const coffeeBeansVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.05, 1],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const shimmerVariants = {
    animate: {
      x: [-100, 100],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [0, -30, 0],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="pt-8 pb-4  smd:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative bg-gradient-to-br from-amber-100 via-amber-150 to-amber-100 rounded-3xl p-6 md:p-10 
                     shadow-2xl border-4 border-mochaBrown/20 overflow-hidden group cursor-pointer"
          onClick={handleInstagramClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          {/* Pulsing border animation */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-oliveGreen/30"
            animate={{
              borderColor: ['rgba(92, 97, 71, 0.3)', 'rgba(92, 97, 71, 0.6)', 'rgba(92, 97, 71, 0.3)'],
              scale: [1, 1.002, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating coffee steam effect - Reduced count */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`steam-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-t from-mochaBrown/20 to-transparent rounded-full"
              style={{
                top: `${15 + i * 8}%`,
                right: `${20 + i * 10}%`,
              }}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
                x: [0, -10, 0]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={isHovered ? {
              scale: [1, 1.5],
              opacity: [0, 0.3, 0]
            } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Animated Corner Patterns */}
          <motion.div
            className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-oliveGreen/40 rounded-tl-lg"
            animate={{
              borderColor: ['rgba(92, 97, 71, 0.4)', 'rgba(139, 69, 19, 0.6)', 'rgba(92, 97, 71, 0.4)']
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-mochaBrown/40 rounded-br-lg"
            animate={{
              borderColor: ['rgba(139, 69, 19, 0.4)', 'rgba(92, 97, 71, 0.6)', 'rgba(139, 69, 19, 0.4)']
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />

          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            variants={shimmerVariants}
            animate="animate"
            style={{ width: '200%', height: '100%' }}
          />

          {/* Coffee Bean Decorations */}
          <motion.div
            variants={coffeeBeansVariants}
            animate="animate"
            className="absolute top-8 right-8 w-8 h-8 bg-mochaBrown rounded-full opacity-20"
          />
          <motion.div
            variants={coffeeBeansVariants}
            animate="animate"
            className="absolute bottom-8 left-8 w-6 h-6 bg-coffeeDeep rounded-full opacity-30"
            style={{ animationDelay: '2s' }}
          />
          <motion.div
            variants={coffeeBeansVariants}
            animate="animate"
            className="absolute top-1/3 left-12 w-4 h-4 bg-oliveGreen rounded-full opacity-25"
            style={{ animationDelay: '4s' }}
          />

          {/* Floating Particles - Reduced count */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-mochaBrown rounded-full opacity-40"
              style={{
                top: `${30 + i * 20}%`,
                left: `${15 + i * 25}%`,
              }}
              variants={particleVariants}
              animate="animate"
              transition={{
                delay: i * 0.8,
                duration: 4,
                repeat: Infinity
              }}
            />
          ))}

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Instagram Icon with Animation */}
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-block"
            >
              <motion.div
                className="relative"
                variants={floatingVariants}
                animate="animate"
              >
                <motion.svg 
                  className="w-20 h-20 mx-auto text-mochaBrown drop-shadow-lg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  animate={isHovered ? { 
                    scale: 1.2,
                    rotate: 10,
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
                
                {/* Glowing ring around icon */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-oliveGreen opacity-0"
                  animate={isHovered ? { 
                    opacity: [0, 0.6, 0],
                    scale: [1, 1.3, 1.6]
                  } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Main Text */}
            <motion.div variants={itemVariants} className="mb-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-['Cormorant Garamond'] font-bold text-coffeeDeep mb-4"
                animate={isHovered ? { 
                  scale: 1.05,
                  color: '#8B4513'
                } : {}}
                transition={{ duration: 0.3 }}
              >
                Follow Our Journey
              </motion.h2>
              
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-oliveGreen via-mochaBrown to-coffeeDeep mx-auto mb-6"
                animate={{
                  scaleX: [1, 1.2, 1],
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.p 
                className="text-xl md:text-2xl text-darkolivegreen max-w-3xl mx-auto leading-relaxed font-medium"
                animate={isHovered ? { y: -2 } : {}}
                transition={{ duration: 0.3 }}
              >
                Discover our handcrafted coffee bags, sustainable stories, and brewing adventures on Instagram
              </motion.p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="relative inline-block"
            >
              <motion.div
                className="bg-gradient-to-r from-oliveGreen via-darkolivegreen to-mochaBrown text-white px-12 py-4 rounded-full 
                         text-xl font-bold shadow-xl border-3 border-coffeeDeep/30 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(0,0,0,0.2)",
                    "0 15px 35px rgba(0,0,0,0.3)",
                    "0 10px 30px rgba(0,0,0,0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    @auna.in
                  </motion.span>
                  <motion.span
                    className="ml-3 text-2xl"
                    animate={{ 
                      rotate: isHovered ? 15 : 0,
                      scale: isHovered ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>
                
                {/* Animated background overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-coffeeDeep via-mochaBrown to-oliveGreen opacity-0"
                  animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Orbiting elements around button */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-oliveGreen rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-6px',
                    marginLeft: '-6px',
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: [0, 60 * Math.cos(i * 2 * Math.PI / 3)],
                    y: [0, 60 * Math.sin(i * 2 * Math.PI / 3)]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5
                  }}
                />
              ))}
            </motion.div>

            {/* Coffee Quote */}
            <motion.div
              variants={itemVariants}
              className="mt-6"
            >
              <motion.p 
                className="text-lg italic text-coffeeDeep/80 font-['Cormorant Garamond'] max-w-2xl mx-auto"
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                "Where every bag tells a story, every post brews inspiration"
              </motion.p>
            </motion.div>
          </div>

          {/* Corner decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-oliveGreen/20 to-transparent rounded-bl-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-mochaBrown/20 to-transparent rounded-tr-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </motion.div>
      </div>
    </div>
  );
};
export default React.memo(InstagramFollowSection);