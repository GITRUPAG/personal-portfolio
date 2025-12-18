import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for Web3Forms
    const data = {
      ...formData,
      access_key: "74ac313c-b119-4eda-a7e8-6583c260fdda", 
      subject: `New Portfolio Message from ${formData.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-24 text-center animate-in zoom-in duration-500">
        <div className="flex justify-center mb-6 text-green-500">
          <CheckCircle2 size={64} />
        </div>
        <h2 className="text-3xl font-bold mb-2">Message Sent!</h2>
        <p className="text-gray-600">Thanks for reaching out, Rupa will get back to you soon.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-blue-600 font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:rupagcsc18@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Email</p>
                  <p className="text-gray-900 font-medium">rupag12004@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/rupa-g-799a43240/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">LinkedIn</p>
                  <p className="text-gray-900 font-medium line-clamp-1">linkedin.com/in/rupa-g</p>
                </div>
              </a>
            </div>
          </div>

          <div className="p-8 bg-gray-900 rounded-3xl text-white relative overflow-hidden">
            <h4 className="text-xl font-bold mb-2">Based in</h4>
            <p className="text-gray-400">Chennai, India (Remote Friendly)</p>
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
              value={formData.name}
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
              value={formData.email}
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
              value={formData.message}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-4 bg-blue-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;