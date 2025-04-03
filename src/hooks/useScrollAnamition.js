import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

/**
 * Custom hook for triggering animations when elements come into view
 * @param {number} threshold - Percentage of element that needs to be visible to trigger animation (0 to 1)
 * @param {object} options - Additional options for the IntersectionObserver
 * @returns {object} - Reference to be attached to the element and animation controls
 */
const useScrollAnimation = (threshold = 0.1, options = {}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
    ...options,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

export default useScrollAnimation;