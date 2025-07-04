
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      {/* <footer className="py-8 px-4 text-center text-gray-600 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2">© 2024 Alex Portfolio. Made with ❤️ using React & Tailwind CSS</p>
          <p className="text-sm">Designed and developed with passion for creating beautiful web experiences</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Index;
