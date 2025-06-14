import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-teal-primary relative overflow-hidden">
      {/* Background Aurora Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-teal-primary/60 rounded-full blur-[100px]"
          initial={{ x: -100, y: -100, opacity: 0.5 }}
          animate={{ 
            x: [100, -100, 100],
            y: [100, -100, 100],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-[80px]"
          initial={{ x: 100, y: 100, opacity: 0.3 }}
          animate={{ 
            x: [-50, 50, -50],
            y: [-50, 50, -50],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Health?
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl mb-10 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of users benefiting from DIET M8&apos;s AI-powered nutrition guidance and personalized health recommendations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-white text-teal-primary hover:bg-white/90 px-8 py-6 text-base"
            >
              Join the Beta
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-base"
            >
              Talk to DIET M8 AI
            </Button>
          </motion.div>

          {/* Circular Text */}
          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center gap-4 text-white/70 text-sm">
              <span>AI Personalized</span>
              <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              <span>Doctor Trusted</span>
              <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              <span>Always Here</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
