
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Hello, I'm Pranava
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate web developer creating beautiful, functional experiences 
            that make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='#projects' className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"  >
              View My Work
            </a>
            <a href='#contact' className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200">
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Floating decoration */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pastel-mint rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-pastel-peach rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-pastel-lavender rounded-full opacity-60 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
    </section>
  );
};

export default Hero;
