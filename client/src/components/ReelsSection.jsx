import React from 'react';

const ReelsSection = () => {
  const reels = [
    "https://www.youtube.com/embed/SyDuzDIzAgY", // Example from user
    "https://www.youtube.com/embed/shorts/VIDEO_ID_2", // Placeholder
    "https://www.youtube.com/embed/shorts/VIDEO_ID_3", // Placeholder
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {reels.map((url, index) => (
        <div key={index} className="aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
           {/* Using iframe for YouTube Shorts/Reels */}
           <iframe 
             width="100%" 
             height="100%" 
             src={url} 
             title={`Reel ${index + 1}`} 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen
           ></iframe>
        </div>
      ))}
    </div>
  );
};

export default ReelsSection;
