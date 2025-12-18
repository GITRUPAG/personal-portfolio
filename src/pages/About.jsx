import React from 'react';
import { Code2, Terminal, Cpu, Globe, Link as LinkIcon } from 'lucide-react';

// 1. IMPORT THE IMAGE FROM ASSETS
import profileImg from '../assets/profile.png'; 

const About = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "TypeScript","React", "Angular"], icon: <Globe size={24} /> },
    { category: "Backend", items: ["JAVA", "Spring Boot", "MySQL"], icon: <Terminal size={24} /> },
    { category: "Blockchain", items: ["Solidity", "web.js", "Hardhat"], icon: <LinkIcon size={24} /> },
    { category: "Tools", items: ["Git", "GitHub", "Postman"], icon: <Cpu size={24} /> }
  ];

  return (
    <div className="py-12 animate-in fade-in duration-700">
      {/* Bio Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl font-bold mb-6">A bit about me</h1>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              I’m a Software Developer based in <span className="text-gray-900 font-medium">Chennai</span> who 
              loves building impactful applications. I’m currently developing 
              <span className="text-blue-600 font-medium"> SheCare</span>, an AI-powered women’s 
              healthcare app focused on improving everyday wellness.
            </p>

            <p>
              Alongside full-stack development, I have experience building 
              <span className="text-gray-900 font-medium"> blockchain-based projects</span> such as 
              certificate verification and e-voting systems. I enjoy solving real-world problems 
              through clean code and practical solutions.
            </p>
          </div>
        </div>
        
        <div className="relative">
          {/* Removed shadow-2xl and bg-gray-200 to help with the "merge" look */}
          <div className="aspect-square rounded-2xl overflow-hidden relative">
            <img 
              src={profileImg} 
              alt="G Rupa Profile" 
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              style={{
                // This creates the transparency gradient merging into the page
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>
          {/* Decorative element moved slightly to stay behind the solid part of the photo */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full -z-10 opacity-50"></div>
        </div>
      </div>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-12">Technical Toolkit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map(item => (
                  <li key={item} className="text-gray-500 flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Strip */}
      <div className="mt-24 p-12 bg-gray-900 rounded-3xl text-white text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">My Philosophy</h2>
        <p className="text-xl italic text-gray-300 max-w-3xl mx-auto font-light">
          "The best code is the code that is easy to delete, easy to debug, and built with the user in mind."
        </p>
      </div>
    </div>
  );
};

export default About;