import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Fitness Enthusiast',
    testimonial: 
      'Diet M8 completely transformed my approach to nutrition. The personalized meal plans fit perfectly with my workout routine, and I&apos;ve seen amazing results!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Busy Professional',
    testimonial:
      'As someone with a hectic schedule, Diet M8 has been a lifesaver. I get tailored nutrition advice and meal suggestions that are quick to prepare and exactly what my body needs.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Dr. Michael Chen',
    role: 'Nutrition Expert',
    testimonial:
      'I recommend Diet M8 to my clients because it provides science-based nutrition advice that adapts to individual needs. The symptom checker feature is especially valuable.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from people who have experienced the
            benefits of DIET M8.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-80 md:h-64 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute top-0 left-0 w-full bg-soft-aqua p-8 rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 50,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                  <div className="mb-6 md:mb-0 md:mr-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-teal-primary mx-auto md:mx-0">                      <div 
                        className="w-full h-full bg-teal-primary/30"
                        style={{
                          backgroundImage: `url(${testimonial.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.testimonial}&rdquo;</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-teal-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
