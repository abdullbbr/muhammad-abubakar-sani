import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { 
        setIsVisible(true); 
        obs.unobserve(el); 
      }
    }, { threshold: 0.12, ...options });
    
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  
  return [ref, isVisible];
}

export function AnimSection({ children, delay = 0, className = '' }) {
  const [ref, vis] = useInView();
  
  return (
    <div 
      ref={ref} 
      className={className} 
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
