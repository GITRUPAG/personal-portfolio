import React from 'react';
import { ExternalLink, Github, Clock } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="py-12">
      {/* "On the Way" Notification Banner */}
      <div className="mb-8 flex items-center gap-3 bg-blue-50 border border-blue-100 p-4 rounded-2xl text-blue-700">
        <Clock size={20} className="animate-pulse" />
        <p className="font-medium text-sm md:text-base">
          Live demos for these projects are currently on the way! Stay tuned.
        </p>
      </div>

      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          A collection of things I've built. From small experiments to 
          full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Project Image */}
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-6">
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <Github size={18} /> Code
                </a>

                {/* Conditional Demo Button */}
                {project.demo ? (
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-bold text-gray-400 cursor-not-allowed">
                    <ExternalLink size={18} /> Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;