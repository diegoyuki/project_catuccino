import React from 'react';
import './ParallaxDivider.css';
import parallaxBg from '../../images/parallax-michi-tree.webp'; 

function ParallaxDivider() {
  return (
    <div 
      className="parallax-divider" 
      style={{ backgroundImage: `url(${parallaxBg})` }}
    >
      <div className="parallax-divider__overlay"></div>
    </div>
  );
}

export default ParallaxDivider;