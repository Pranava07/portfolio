import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleEmailClick = () => {
    window.open('mailto:pranava.panjala04@gmail.com', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/pranava-panjala', '_blank');  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Pranava07', '_blank');
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pranava.panjala04@gmail.com',
      color: 'from-red-400 via-pink-400 to-purple-500',
      hoverColor: 'from-red-500 via-pink-500 to-purple-600',
      onClick: handleEmailClick,
      id: 'email'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'pranava panjala',
      color: 'from-blue-400 via-blue-500 to-cyan-500',
      hoverColor: 'from-blue-500 via-blue-600 to-cyan-600',
      onClick: handleLinkedInClick,
      id: 'linkedin'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Pranava07',
      color: 'from-gray-600 via-gray-700 to-gray-900',
      hoverColor: 'from-gray-700 via-gray-800 to-black',
      onClick: handleGitHubClick,
      id: 'github'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            <Sparkles className="w-8 h-8 text-purple-500" />
            <h2 className="text-5xl md:text-6xl font-bold">
              Let's Connect
            </h2>
            <Sparkles className="w-8 h-8 text-pink-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to discuss new projects, 
            creative opportunities, and innovative solutions. Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
              Get In Touch
            </h3>
            <div className="space-y-6">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <div
                    key={method.id}
                    onClick={method.onClick}
                    onMouseEnter={() => setHoveredIcon(method.id)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    className={`flex items-center space-x-4 p-4 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 group ${
                      hoveredIcon === method.id 
                        ? 'bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${
                      hoveredIcon === method.id ? method.hoverColor : method.color
                    } rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:rotate-12 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-lg">{method.label}</p>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center transition-all duration-300 ${
                      hoveredIcon === method.id ? 'scale-110' : 'scale-0'
                    }`}>
                      <Send className="w-4 h-4 text-white" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Contact;