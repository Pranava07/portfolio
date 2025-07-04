import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

import hm1 from '../assests/hm1.png';
import hm2 from '../assests/hm2.png';
import hm3 from '../assests/hm3.png';
import hm4 from '../assests/hm4.png';
import p31 from '../assests/p31.png';
import p32 from '../assests/p32.png';
import sb1 from '../assests/sb1.png';
import sb2 from '../assests/sb2.png';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-t-3xl">
      <img 
        src={images[currentIndex]} 
        alt={title + ' - Image ' + (currentIndex + 1)}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {images.length > 1 && (
        <React.Fragment>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </React.Fragment>
      )}
      
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={'w-2 h-2 rounded-full transition-all duration-200 ' + 
                (index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75')}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'AI ChatBot HappieMte',
      description: 'Led the development of an AI-powered chatbot that tracks user mood and delivers gamified mental wellness tasks. Integrated NLP for empathetic response generation and built dynamic admin dashboards for behavior analysis.',
      images: [
       hm1, hm2, hm3, hm4
      ],
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'HTML'],
      link: 'https://github.com/Pranava07/amazon2'
    },
    {
      title: 'Inventory Management System',
      description: 'Engineered a centralized platform to manage inventory of food, medicines, and donations across multiple orphanages. Implemented automated expiry tracking, inter-branch transfers, and real-time stock updates.',
      images: [
       p31,p32
      ],
      tags: ['React', 'Node.js', 'PHP', 'MySQL', 'HTML', 'Tailwind CSS'],
      link: 'https://github.com/Pranava07'
    },
    {
      title: 'Orphanage Slot Booking System',
      description: 'Designed a responsive slot booking application to streamline visit scheduling and donation event management. Built conflict-free scheduling logic, admin controls, and real-time user access management.',
      images: [
       sb1,sb2
      ],
      tags: ['React', 'Node.js', 'PHP', 'MySQL', 'HTML', 'Tailwind CSS'],
      link: 'https://github.com/Pranava07'
    },
    {
      title: 'Diabetes Prediction using Machine Learning',
      description: 'Developed a machine learning pipeline using Support Vector Machine (SVM) for early detection of diabetes. Executed data cleaning, feature selection, and model training on real medical datasets.',
      images: [
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
       
      ],
      tags: ['Python'],
      link: 'https://github.com/Pranava07'
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A selection of my recent work that showcases my skills and creativity in building impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/20 group hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <ImageCarousel images={project.images} title={project.title} />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <button 
                  onClick={() => handleProjectClick(project.link)}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group/btn"
                >
                  <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Want to see more?</h3>
            <p className="text-purple-100 mb-6 text-lg">
              Check out my complete portfolio on GitHub for more projects and contributions
            </p>
            <button 
              onClick={() => handleProjectClick('https://github.com/Pranava07')}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <Github className="w-5 h-5" />
              <span>Visit My GitHub</span>
            </button>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Projects;