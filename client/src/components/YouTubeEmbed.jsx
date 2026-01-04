import React from 'react';

const YouTubeEmbed = ({ videoId }) => (
  <div className="video-responsive relative overflow-hidden pb-[56.25%] h-0 rounded-2xl shadow-2xl border border-ibis-gold/20">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default YouTubeEmbed;
