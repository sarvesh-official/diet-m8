import React from 'react';
import { motion } from 'framer-motion';

interface UserMetric {
  label: string;
  value: string;
  unit?: string;
}

const userMetrics: UserMetric[] = [
  { label: 'Age', value: '32' },
  { label: 'Weight', value: '78', unit: 'kg' },
  { label: 'Height', value: '183', unit: 'cm' },
  { label: 'Activity Level', value: 'Moderate' },
  { label: 'Goal', value: 'Build Muscle' },
];

const nutritionMetrics: UserMetric[] = [
  { label: 'Calories', value: '2400', unit: 'kcal' },
  { label: 'Carbohydrates', value: '269', unit: 'g' },
  { label: 'Proteins', value: '164', unit: 'g' },
  { label: 'Fats', value: '110', unit: 'g' },
  { label: 'Water', value: '3.0', unit: 'L' },
];

const Personalization = () => {
  return (
    <section id="personalization" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personalized Nutrition
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DIET M8 adapts to your unique profile, ensuring recommendations that fit
            your body, goals, and lifestyle perfectly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* User Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-soft-aqua rounded-2xl p-8 relative overflow-hidden shadow-lg"
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-teal-primary/20 rounded-full" />
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-teal-primary/10 rounded-full" />
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">Your Profile</h3>
            
            <div className="space-y-4 relative z-10">
              {userMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{metric.label}</span>
                  <span className="font-bold">
                    {metric.value}{metric.unit && <span className="text-gray-500 text-sm ml-1">{metric.unit}</span>}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nutrition Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-teal-primary rounded-2xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Your Daily Requirements</h3>
            
            <div className="space-y-6">
              {nutritionMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between text-white/80 mb-1">
                    <span>{metric.label}</span>
                    <span>
                      {metric.value}{metric.unit && <span className="text-white/60 text-sm ml-1">{metric.unit}</span>}
                    </span>
                  </div>
                  
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                      transition={{ delay: 0.2 * index, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                <span className="font-medium">Based on your BMI</span>
                <span className="text-2xl font-bold">21</span>
              </div>
              <p className="text-white/70 text-sm mt-1">Normal Weight Range</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Personalization;
