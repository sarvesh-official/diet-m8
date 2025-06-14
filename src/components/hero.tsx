import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      );
      
    // Circle animation
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: 'linear'
      });
    }

    return () => {
      tl.kill();
    };
  }, []);  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-soft-aqua to-white flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[400px] h-[400px] bg-teal-primary/20 rounded-full blur-3xl"
          initial={{ x: -100, y: -100 }}
          animate={{ 
            x: [-100, 100, -100],
            y: [-100, 100, -100],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-teal-primary/10 rounded-full blur-3xl right-0 bottom-0"
          initial={{ x: 100, y: 100 }}
          animate={{ 
            x: [100, -100, 100],
            y: [100, -100, 100],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Animated Circle with Text */}
      <div className="absolute right-10 top-40 hidden lg:block">
        <div ref={circleRef} className="w-[150px] h-[150px] rounded-full relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fontSize="7.5">
              <textPath xlinkHref="#circle" className="text-teal-primary font-medium">
                • AI Powered • Doctor Trusted • Always Here • Personalized •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[120px] h-[120px] bg-soft-aqua rounded-full flex items-center justify-center">
              <div className="w-[100px] h-[100px] bg-teal-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">DIET M8</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">          <h1 
            ref={headlineRef}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-teal-primary to-blue-500 text-transparent bg-clip-text">
              Your AI Powered Nutrition Guide
            </span>
          </h1>
          
          <p 
            ref={subtextRef}
            className="text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            DIET M8 provides AI-driven meal plans based on your personal metrics and offers 
            actionable health advice tailored to your symptoms and goals.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-base group relative overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-primary/60 to-blue-400/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Get Started</span>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-base">
              Try Demo
            </Button>
          </div>

          {/* Floating icons */}
          <div className="relative h-32 mt-16">
            <motion.div 
              className="absolute left-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🥗
            </motion.div>
            
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl"
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              💪
            </motion.div>
            
            <motion.div 
              className="absolute right-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              💧
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
