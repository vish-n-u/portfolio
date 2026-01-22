import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import DistortedImage from './DistortedImage';

// Utility to detect WebGL support
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

// Utility to check for reduced motion preference
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const WebGLDistortionImage = ({ src, alt, isDark = false, className = '' }) => {
  const [shouldUseFallback, setShouldUseFallback] = useState(false);

  // Check WebGL support on mount
  useEffect(() => {
    const webglSupported = isWebGLAvailable();
    const reducedMotion = prefersReducedMotion();
    setShouldUseFallback(!webglSupported || reducedMotion);
  }, []);

  // Fallback to static image if WebGL is not supported
  if (shouldUseFallback) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
      />
    );
  }

  // React Three Fiber Canvas
  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      role="img"
      aria-label={alt}
    >
      <Canvas
        camera={{ position: [0, 0, 2], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <DistortedImage url={src} isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default WebGLDistortionImage;
