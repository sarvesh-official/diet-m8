import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: '🥗',
    title: 'Everyday Meal Suggestions',
    description:
      'AI calculates your calorie needs using your personal metrics and generates a customized daily meal plan with smart swaps and substitutions.',
  },
  {
    id: 2,
    icon: '🤒',
    title: 'Symptom Checker with Diet Advice',
    description:
      'Describe your symptoms in natural language and get personalized advice on what to do, what to avoid, and foods that help.',
  },
  {
    id: 3,
    icon: '📊',
    title: 'Personalized Metrics Tracking',
    description:
      'Track your progress with detailed metrics, including calories, water intake, and BMI, all personalized to your health goals.',
  },
  {
    id: 4,
    icon: '🧠',
    title: 'AI-Powered Health Insights',
    description:
      'Get intelligent health insights based on your symptoms, dietary habits, and health metrics for better decision making.',
  },
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
    >
      <div className="absolute -right-4 -top-4 w-20 h-20 bg-teal-primary/10 rounded-full" />
      
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (    <section id="features" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Powerful AI-Driven Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DIET M8 combines cutting-edge AI technology with nutritional science to deliver
            personalized health and diet recommendations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
