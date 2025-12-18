import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send email (e.g., via EmailJS or a backend)
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! (This is a demo)");
  };

  return (
    <div className="py-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Side: Direct Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Email</p>
                  <p className="text-gray-900 font-medium">rupag12004@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">LinkedIn</p>
                  <p className="text-gray-900 font-medium">https://www.linkedin.com/in/rupa-g-799a43240/</p>
                </div>
              </a>
            </div>
          </div>

          <div className="p-8 bg-gray-900 rounded-3xl text-white relative overflow-hidden">
            <h4 className="text-xl font-bold mb-2">Based in</h4>
            <p className="text-gray-400">Chennai, India(Remote Friendly)</p>
            <div className="mt-8 flex items-center gap-2 text-blue-400 font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Open to new opportunities
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="John Doe"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="john@example.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
            <textarea 
              rows="4" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;