
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital experiences that blend creativity with functionality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="card-gradient rounded-3xl p-8 shadow-pastel">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Story</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a creative web developer with a passion for building beautiful, 
              user-friendly applications.  I love turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open-source projects, or listening to a good music 
              while sketching out new ideas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="card-gradient rounded-2xl p-6 shadow-pastel text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="card-gradient rounded-2xl p-6 shadow-pastel text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">5+</div>
              <div className="text-gray-600">Clone Projects</div>
            </div>
            <div className="card-gradient rounded-2xl p-6 shadow-pastel text-center ">
              <div className="text-3xl font-bold text-indigo-600 mb-2">2</div>
              <div className="text-gray-600">Real time webpages</div>
            </div>
            <div className="card-gradient rounded-2xl p-6 shadow-pastel text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">Listening</div>
              <div className="text-gray-600">Music</div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
