import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    value: 10000,
    label: 'Meals Generated',
    suffix: '+'
  },
  {
    value: 90,
    label: 'Symptoms Covered',
    suffix: '+'
  },
  {
    value: 4.9,
    label: 'User Rating',
    prefix: '',
    suffix: '/5'
  },
  {
    value: 25000,
    label: 'Happy Users',
    suffix: '+'
  }
];

const CounterStat = ({ stat }: { stat: Stat }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!inView) return;
      const endValue = stat.value;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    const countUp = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(easeOutQuart * endValue);
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(countUp);
      } else {
        setCount(endValue);
      }
    };
    
    requestAnimationFrame(countUp);
    
    return () => {
      // Cleanup if needed
    };
  }, [inView, stat.value]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold mb-2 text-teal-primary flex items-center justify-center">
        {stat.prefix}{Number.isInteger(count) ? count.toLocaleString() : count.toFixed(1)}{stat.suffix}
      </h3>
      <p className="text-gray-600">{stat.label}</p>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section className="py-20 bg-soft-aqua">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Making a Difference
          </h2>          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their health and nutrition
            with DIET M8&apos;s personalized approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <CounterStat key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
