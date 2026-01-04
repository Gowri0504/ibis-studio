import React, { useState } from 'react';
import { FaArrowsAltH } from 'react-icons/fa';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-lg cursor-col-resize group">
      {/* Before Image (Background) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop')" }} // Raw/Before
      >
        <span className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-bold">Original</span>
      </div>

      {/* After Image (Foreground - Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop&sat=-100')", // Edited/After (using grayscale for demo)
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }} 
      >
        <span className="absolute top-4 right-4 bg-ibis-gold text-black px-3 py-1 rounded text-sm font-bold">Edited</span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-ibis-primary">
          <FaArrowsAltH />
        </div>
      </div>

      {/* Range Input for Control */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={handleDrag}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
      />
    </div>
  );
};

export default BeforeAfterSlider;
