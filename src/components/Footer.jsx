import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand/Bio Section */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold">
              Rupa<span className="text-blue-600">.</span>
            </Link>
            <p className="text-gray-500 max-w-xs">
              A software developer building impactful apps with full-stack and blockchain technologies. Open to new projects and collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Projects', 'Experience', 'Resume', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://github.com/GITRUPAG" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rupa-g-799a43240/" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rupag12004@gmail.com" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-500 font-medium">Available for freelance & full-time.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Rupa. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-400 fill-red-400" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;