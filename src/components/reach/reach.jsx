import React from 'react';
import { CounterAnimation } from './CounterAnimation';
 
export function ReachImpactSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-teal-900 opacity-90"></div>
     
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
     
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Reach & Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            T-Sign is making a significant impact across the educational
            landscape in Telangana
          </p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Students Counter */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="bg-white rounded-2xl p-10 shadow-xl text-center relative transform group-hover:-translate-y-2 transition-all duration-300">
              <CounterAnimation end={50000} duration={2000} suffix="+" color="text-purple-600" />
              <p className="text-xl text-gray-700 mt-4 font-medium">
                Students Registered
              </p>
            </div>
          </div>
         
          {/* Colleges Counter */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-amber-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="bg-white rounded-2xl p-10 shadow-xl text-center relative transform group-hover:-translate-y-2 transition-all duration-300">
              <CounterAnimation end={200} duration={2000} suffix="+" color="text-teal-600" />
              <p className="text-xl text-gray-700 mt-4 font-medium">
                Partner Colleges
              </p>
            </div>
          </div>
         
          {/* Recruiters Counter */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-purple-500 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="bg-white rounded-2xl p-10 shadow-xl text-center relative transform group-hover:-translate-y-2 transition-all duration-300">
              <CounterAnimation end={100} duration={2000} suffix="+" color="text-amber-500" />
              <p className="text-xl text-gray-700 mt-4 font-medium">
                Recruiters Onboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
 