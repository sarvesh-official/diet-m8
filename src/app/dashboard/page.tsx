import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6 bg-soft-aqua">
      {/* Top Row: Calories and Water Consumption */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calories Card */}
        <div className="bg-white rounded-3xl p-8">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <h2 className="text-[2.5rem] font-medium text-gray-900">Calories</h2>
              <div className="flex items-baseline">
                <span className="text-[3.5rem] font-medium">3,040</span>
                <span className="text-xl font-light text-gray-500">/Kcal</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-lg font-light -mt-4">How much Calories you need on a daily basis</p>
            
            <div className="space-y-2">
              <div className="flex justify-between px-1">
                <span className="text-xl font-light text-gray-600">0</span>
                <span className="text-xl font-light text-gray-600">3,040</span>
              </div>
              <div className="flex gap-2">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-16 w-4 rounded-full ${i < 20 ? 'bg-teal-primary' : 'bg-gray-100'}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-2">
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-[2rem] font-medium">269</span>
                  <span className="text-lg text-gray-500 font-light">Gram</span>
                </div>
                <p className="text-gray-500 font-light text-lg">Carbohydrates</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-[2rem] font-medium">164</span>
                  <span className="text-lg text-gray-500 font-light">Gram</span>
                </div>
                <p className="text-gray-500 font-light text-lg">Proteins</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-[2rem] font-medium">110</span>
                  <span className="text-lg text-gray-500 font-light">Gram</span>
                </div>
                <p className="text-gray-500 font-light text-lg">Fats</p>
              </div>
            </div>
          </div>
        </div>

        {/* Water Consumption Card */}
        <div className="bg-teal-primary text-white rounded-3xl p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Water Consumption</h2>
              <p className="text-teal-50">Log your water intake on a daily basis</p>
            </div>

            <div className="flex gap-4 my-8">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="w-12 h-14 bg-white/20 rounded-lg" />
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 bg-teal-700/30 text-white px-6 py-2 rounded-lg hover:bg-teal-700/40 transition-colors">
                Log Water Intake
                <ArrowRight size={18} />
              </button>
              <div className="text-right">
                <span className="text-4xl font-bold">3.0</span>
                <span className="text-xl">L</span>
                <p className="text-sm text-teal-50">/Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Meal Log, BMI, and Consultation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Meal Log Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="space-y-4">
            <Image
              src="/images/english-breakfast.jpg"
              alt="English Breakfast"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl"
            />
            <h3 className="text-xl font-semibold">ENGLISH BREAKFAST</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">CALORIES</p>
                <p className="font-semibold">220kcal</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">PROTEINS</p>
                <p className="font-semibold">164 gm</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">FATS</p>
                <p className="font-semibold">110 gm</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-teal-primary text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              LOG BREAKFAST
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* BMI Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Body Mass Index</h2>
              <p className="text-gray-500 text-sm">BMI is a measure of body fat based on height and weight</p>
            </div>
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <span className="text-7xl font-bold text-teal-primary">21</span>
                <p className="text-xl text-gray-600">Normal</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-teal-primary text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              Update
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* AI Consultation Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Not Feeling Well?</h2>
              <p className="text-gray-500 text-sm">Get Consulted Online</p>
            </div>
            <div className="flex justify-center py-4">
              <Image
                src="/images/ai-doctor.png"
                alt="AI Doctor"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>
            <Link
              href="/consultation"
              className="block w-full text-center bg-teal-primary text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Consult Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;