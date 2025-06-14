import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface Recommendation {
  category: string;
  items: string[];
  icon: string;
}

const AIDemo = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  const fullText = "I have fever and chills";
  
  const recommendations: Recommendation[] = [
    {
      category: "Possible Cause",
      items: ["Viral Infection", "Flu", "Common Cold"],
      icon: "🔬"
    },
    {
      category: "Foods to Eat",
      items: ["Warm soups", "Herbal teas", "Turmeric milk", "Ginger", "Garlic"],
      icon: "✅"
    },
    {
      category: "Foods to Avoid",
      items: ["Cold drinks", "Oily foods", "Processed sugar", "Alcohol"],
      icon: "❌"
    },
    {
      category: "Medications",
      items: ["Acetaminophen (Tylenol)", "Ibuprofen (Advil)"],
      icon: "💊"
    }
  ];

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setUserInput(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => {
          setShowResponse(true);
        }, 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  // Animation for the response section
  useEffect(() => {
    if (showResponse && responseRef.current) {
      gsap.fromTo(
        responseRef.current.children,
        { 
          opacity: 0, 
          y: 20 
        },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2, 
          duration: 0.8, 
          ease: "power3.out" 
        }
      );
    }
  }, [showResponse]);
  return (
    <section id="ai-demo" className="py-20 bg-soft-aqua text-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Symptom Checker in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Describe your symptoms and get personalized health and dietary recommendations
            powered by advanced AI.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-teal-primary p-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="text-white text-sm ml-4">DIET M8 Assistant</div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <p className="text-gray-500 mb-2 text-sm">You:</p>
              <div 
                ref={inputRef}
                className="bg-gray-100 p-4 rounded-xl inline-block"
              >
                {userInput}
                {isTyping && <span className="animate-pulse">|</span>}
              </div>
            </div>

            {showResponse && (
              <div ref={responseRef}>
                <p className="text-gray-500 mb-2 text-sm">DIET M8:</p>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <motion.div
                      key={index}
                      className="bg-soft-aqua p-4 rounded-xl"
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">{rec.icon}</span>
                        <h3 className="font-bold">{rec.category}</h3>
                      </div>
                      <ul className="space-y-1 pl-8">
                        {rec.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="list-disc text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;
