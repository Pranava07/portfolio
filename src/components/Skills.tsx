import React, { useState } from 'react';
import { Code, Palette, Database, Figma, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { 
      name: 'React', 
      icon: Code, 
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'from-blue-500 to-blue-700',
      description: 'Modern web applications'
    },
    { 
      name: 'HTML', 
      icon: Globe, 
      color: 'from-orange-400 to-orange-600',
      hoverColor: 'from-orange-500 to-orange-700',
      description: 'Semantic web structure'
    },
    { 
      name: 'JavaScript', 
      icon: Zap, 
      color: 'from-yellow-400 to-yellow-600',
      hoverColor: 'from-yellow-500 to-yellow-700',
      description: 'Dynamic functionality'
    },
    { 
      name: 'CSS/Tailwind', 
      icon: Palette, 
      color: 'from-teal-400 to-teal-600',
      hoverColor: 'from-teal-500 to-teal-700',
      description: 'Beautiful styling'
    },
    { 
      name: 'Figma', 
      icon: Figma, 
      color: 'from-purple-400 to-purple-600',
      hoverColor: 'from-purple-500 to-purple-700',
      description: 'Design & prototyping'
    },
    { 
      name: 'UI/UX Design', 
      icon: Smartphone, 
      color: 'from-pink-400 to-pink-600',
      hoverColor: 'from-pink-500 to-pink-700',
      description: 'User-centered design'
    },
    { 
      name: 'Python', 
      icon: Server, 
      color: 'from-green-400 to-green-600',
      hoverColor: 'from-green-500 to-green-700',
      description: 'Backend development'
    },
    { 
      name: 'SQL', 
      icon: Database, 
      color: 'from-indigo-400 to-indigo-600',
      hoverColor: 'from-indigo-500 to-indigo-700',
      description: 'Database management'
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life and create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  hoveredSkill === skill.name ? 'shadow-2xl' : ''
                }`}
              >
                {/* Skill Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${
                  hoveredSkill === skill.name ? skill.hoverColor : skill.color
                } rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:rotate-12 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-gray-900 transition-colors">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className="text-sm text-gray-600 text-center group-hover:text-gray-700 transition-colors">
                  {skill.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-purple-100 mb-6">
              Let's combine these skills to create something amazing for your next project!
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div> */}
      </div>

      
    </section>
  );
};

export default Skills;