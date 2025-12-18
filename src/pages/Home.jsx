import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'; // Optional: npm install lucide-react

const Home = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center text-center pt-12 md:pt-20">
        <div className="mb-6 animate-fade-in">
          <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
            Available for new opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Building digital products <br />
          <span className="text-blue-600">with purpose.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          Hi, I'm <span className="font-semibold text-gray-900">Rupa</span>. 
          A Software Engineer specializing in building exceptional digital experiences 
          that are functional, accessible, and beautiful.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/projects" 
            className="px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-200"
          >
            View My Work <ArrowRight size={18} />
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all flex items-center justify-center"
          >
            Let's Talk
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-12 text-gray-400">
          <a href="https://github.com" className="hover:text-gray-900 transition-colors"><Github size={24} /></a>
          <a href="https://linkedin.com" className="hover:text-gray-900 transition-colors"><Linkedin size={24} /></a>
          <a href="mailto:hello@example.com" className="hover:text-gray-900 transition-colors"><Mail size={24} /></a>
        </div>
      </section>

      {/* --- QUICK STATS / SKILLS STRIP --- */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-100">
        {[
          { label: 'Years Experience', value: '0.6' },
          { label: 'Projects Completed', value: '10+' },
          { label: 'Happy Clients', value: '15+' },
          { label: 'Lines of Code', value: '100k+' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* --- FEATURED PREVIEW --- */}
      <section className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to see my process?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-lg">
            I don't just write code. I solve business problems and create user-centric solutions.
            Check out my detailed case studies.
          </p>
          <Link 
            to="/about" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            About My Approach
          </Link>
        </div>
        {/* Decorative Circle */}
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
      </section>
    </div>
  );
};

export default Home;