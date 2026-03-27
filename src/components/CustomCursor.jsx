import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const magneticRef = useRef({ element: null, x: 0, y: 0, width: 0, height: 0, distance: 100 });

  useEffect(() => {
    // Initial position center
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    delayedMouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const animate = () => {
      if (cursorRef.current) {
        let targetX = mouse.current.x;
        let targetY = mouse.current.y;
        
        let targetSize = 12; // Default size

        if (magneticRef.current.element) {
          const { x, y, width, height } = magneticRef.current;
          const centerX = x + width / 2;
          const centerY = y + height / 2;

          const distance = Math.sqrt(Math.pow(mouse.current.x - centerX, 2) + Math.pow(mouse.current.y - centerY, 2));
          const maxDistance = 60; // How far the effect starts

          if (distance < maxDistance) {
            // Magnetic pull towards center
            const pull = 0.2; // Strength of magnet
            targetX = mouse.current.x + (centerX - mouse.current.x) * pull;
            targetY = mouse.current.y + (centerY - mouse.current.y) * pull;
            
            // Gradual size increase based on proximity
            const scaleFactor = 1 - (distance / maxDistance);
            targetSize = 12 + (30 * scaleFactor); // Grows from 12px up to 42px
          } else {
            targetSize = 42; // Fully hovered size inside the element
          }
        }

        delayedMouse.current.x = lerp(delayedMouse.current.x, targetX, 0.15);
        delayedMouse.current.y = lerp(delayedMouse.current.y, targetY, 0.15);

        // Update position
        cursorRef.current.style.transform = `translate3d(${delayedMouse.current.x}px, ${delayedMouse.current.y}px, 0) translate(-50%, -50%)`;
        
        // Update size if it's changing smoothly
        const currentWidth = parseFloat(cursorRef.current.style.width) || targetSize;
        const newSize = lerp(currentWidth, targetSize, 0.2);
        cursorRef.current.style.width = `${newSize}px`;
        cursorRef.current.style.height = `${newSize}px`;
      }
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, select');
      if (target) {
        setIsHovered(true);
        const rect = target.getBoundingClientRect();
        magneticRef.current = {
          element: target,
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        };
      } else {
        setIsHovered(false);
        magneticRef.current = { element: null, x: 0, y: 0, width: 0, height: 0 };
      }
    };

    // Keep bounding box updated periodically in case layout shifts or scrolls
    const handleScroll = () => {
      if (magneticRef.current.element) {
        const rect = magneticRef.current.element.getBoundingClientRect();
        magneticRef.current = {
          ...magneticRef.current,
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        };
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`custom-cursor-dot ${isHovered ? 'hovered' : ''}`} 
      ref={cursorRef}
    />
  );
};

export default CustomCursor;
