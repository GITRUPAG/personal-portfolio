import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Portfolio.json';

const Loader = () => {
  return (
    // fixed inset-0 ensures it covers the whole screen
    // z-[9999] puts it above everything else
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="w-80 h-80 md:w-[500px] md:h-[500px]">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true}
        />
      </div>
    </div>
  );
};

export default Loader;