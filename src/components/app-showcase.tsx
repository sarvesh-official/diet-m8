import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AppShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See DIET M8 in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From symptom checking to personalized meal plans, DIET M8 has you covered
            with a beautiful, intuitive interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Mobile Mockup 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="relative mx-auto w-[280px] h-[570px] bg-gray-900 rounded-[3rem] shadow-xl overflow-hidden border-[14px] border-gray-900">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 z-10">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-700 rounded-full"></div>
              </div>
              <div className="relative h-full w-full bg-soft-aqua overflow-hidden">
                {/* App Content */}
                <div className="relative h-full overflow-auto">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-xs text-gray-500">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
                            <path d="M12.5,2.5 L15,7.5 L20,8.5 L16.5,12 L17.5,17 L12.5,15 L7.5,17 L8.5,12 L5,8.5 L10,7.5 L12.5,2.5 Z"></path>
                          </svg>
                        </div>
                        <div className="w-3 h-3">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
                            <path d="M1,21 L12,2 L23,21 L1,21 Z M12,18 L12,16 L12,18 Z M12,9 L12,14 L12,9 Z"></path>
                          </svg>
                        </div>
                        <div className="w-3 h-3">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
                            <path d="M18,16.08 C17.24,16.08 16.56,16.38 16.04,16.85 L8.91,12.7 C8.96,12.47 9,12.24 9,12 C9,11.76 8.96,11.53 8.91,11.3 L15.96,7.19 C16.5,7.69 17.21,8 18,8 C19.66,8 21,6.66 21,5 C21,3.34 19.66,2 18,2 C16.34,2 15,3.34 15,5 C15,5.24 15.04,5.47 15.09,5.7 L8.04,9.81 C7.5,9.31 6.79,9 6,9 C4.34,9 3,10.34 3,12 C3,13.66 4.34,15 6,15 C6.79,15 7.5,14.69 8.04,14.19 L15.16,18.35 C15.11,18.56 15.08,18.78 15.08,19 C15.08,20.61 16.39,21.92 18,21.92 C19.61,21.92 20.92,20.61 20.92,19 C20.92,17.39 19.61,16.08 18,16.08 Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-teal-primary flex items-center justify-center">
                        <Image 
                          src="/logo-nobg.png" 
                          alt="DIET M8 Logo" 
                          width={30} 
                          height={30}
                        />
                      </div>
                      <div className="text-xl font-bold text-teal-primary">DIET M8</div>
                    </div>
                    
                    <div className="p-3 bg-white rounded-xl shadow-sm mb-4">
                      <h3 className="font-bold mb-2">Today&apos;s Nutrition</h3>
                      <div className="bg-gray-100 h-3 rounded-full mb-1">
                        <div className="bg-teal-primary h-3 rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>1560 / 2400 kcal</span>
                        <span>65%</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="font-bold mb-2">Meal Suggestions</h3>
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                        <div className="h-24 bg-gradient-to-br from-amber-300 to-orange-400"></div>
                        <div className="p-3">
                          <div className="font-bold text-sm">Protein-Rich Breakfast</div>
                          <div className="text-xs text-gray-500">456 kcal • 24g protein</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mt-10 md:mt-0 z-20"
          >
            <div className="relative mx-auto w-[280px] h-[570px] bg-gray-900 rounded-[3rem] shadow-xl overflow-hidden border-[14px] border-gray-900">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 z-10">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-700 rounded-full"></div>
              </div>
              <div className="relative h-full w-full bg-white overflow-hidden">
                {/* App Content */}
                <div className="bg-teal-primary text-white p-4">
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">DIET M8</div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="bg-soft-aqua rounded-xl p-4 mb-4">
                    <div className="text-lg font-bold mb-2">What are your symptoms?</div>
                    <div className="bg-white rounded-full p-3 flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                      <span className="text-gray-400">Search symptoms...</span>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                          </div>
                          <div className="text-sm">Headache</div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="bg-white p-2 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                          </div>
                          <div className="text-sm">Fever</div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-teal-primary text-white py-3 rounded-xl font-medium">
                    Get Health Recommendations
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-10 md:mt-0 z-10"
          >
            <div className="relative mx-auto w-[280px] h-[570px] bg-gray-900 rounded-[3rem] shadow-xl overflow-hidden border-[14px] border-gray-900">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 z-10">
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-700 rounded-full"></div>
              </div>
              <div className="relative h-full w-full bg-white overflow-hidden">
                {/* App Content */}
                <div className="h-full flex flex-col">
                  <div className="bg-teal-primary p-4 flex items-center">
                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                    </button>
                    <h2 className="text-white font-bold text-lg">My Water Tracker</h2>
                  </div>

                  <div className="flex-grow p-4 bg-soft-aqua/30">
                    <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold">Water Consumption</h3>
                        <div className="text-2xl font-bold text-teal-primary">3.0L</div>
                      </div>

                      <div className="flex justify-between mb-6">
                        <div className="text-sm text-gray-500">Daily target:</div>
                        <div className="text-sm font-semibold">3.5L</div>
                      </div>

                      <div className="flex justify-between space-x-2">
                        <div className="w-1/5 bg-teal-primary/20 rounded-md h-24 flex items-end">
                          <div className="w-full bg-teal-primary rounded-md" style={{height: '80%'}}></div>
                        </div>
                        <div className="w-1/5 bg-teal-primary/20 rounded-md h-24 flex items-end">
                          <div className="w-full bg-teal-primary rounded-md" style={{height: '100%'}}></div>
                        </div>
                        <div className="w-1/5 bg-teal-primary/20 rounded-md h-24 flex items-end">
                          <div className="w-full bg-teal-primary rounded-md" style={{height: '60%'}}></div>
                        </div>
                        <div className="w-1/5 bg-teal-primary/20 rounded-md h-24 flex items-end">
                          <div className="w-full bg-teal-primary rounded-md" style={{height: '90%'}}></div>
                        </div>
                        <div className="w-1/5 bg-teal-primary/20 rounded-md h-24 flex items-end">
                          <div className="w-full bg-teal-primary rounded-md" style={{height: '75%'}}></div>
                        </div>
                      </div>

                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <h3 className="font-bold mb-2">Add Water Intake</h3>
                      <div className="flex space-x-2">
                        <button className="flex-1 py-3 bg-teal-primary/20 rounded-lg text-teal-primary font-medium">
                          + 200ml
                        </button>
                        <button className="flex-1 py-3 bg-teal-primary text-white rounded-lg font-medium">
                          + 500ml
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
