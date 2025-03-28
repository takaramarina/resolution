import React from 'react';

export default function RotatingImage({ src, alt = 'Rotating Image', speed = 10 }){
  return (
    <div className="rotating-image-container relative flex justify-center items-center w-full h-full">
      <img 
        src={src} 
        alt={alt}
        className="animate-spin-counterclockwise animate-spin max-w-full max-h-full"
        style={{ animationDuration: `${speed}s` }} 
      />
    </div>
  );
};