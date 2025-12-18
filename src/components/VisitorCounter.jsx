import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // We use the 'api.countapi.xyz' alternative or a simple storage hit
    // This specific endpoint increments every time it is called
    fetch('https://api.counterapi.dev/v1/rupa-dev-portfolio/visits/up')
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
      })
      .catch((err) => console.error("Counter error:", err));
  }, []);

  return (
    <div className="flex items-center gap-3 bg-white/50 backdrop-blur-md border border-gray-100 px-4 py-2 rounded-2xl shadow-sm">
      <div className="relative flex h-3 w-3">
        {/* Pulse effect to show the counter is "live" */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
      </div>
      
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
          Live Visitors
        </span>
        <span className="text-lg font-bold text-gray-900 leading-none mt-1">
          {count ? count.toLocaleString() : '...'}
        </span>
      </div>
      
      <Users size={18} className="text-gray-300 ml-2" />
    </div>
  );
};

export default VisitorCounter;