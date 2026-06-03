import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 *
 * Attaches an IntersectionObserver to a container ref.
 * When the container (or elements matching `selector`) crosses the threshold,
 * the `.visible` class is added so CSS can animate them in.
 *
 * @param {object}  options
 * @param {string}  [options.selector='.reveal']   - CSS selector for elements to animate
 * @param {number}  [options.threshold=0.12]        - IntersectionObserver threshold
 * @param {boolean} [options.stagger=false]         - Add staggered delay to each child
 * @param {number}  [options.staggerDelay=80]       - ms between each staggered child
 * @param {boolean} [options.once=true]             - Only trigger once (don't re-hide on scroll out)
 * @returns {React.RefObject} ref — attach to a container element
 */
export function useScrollReveal({
  selector      = '.reveal',
  threshold     = 0.12,
  stagger       = false,
  staggerDelay  = 80,
  once          = true,
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    // Apply stagger delays
    if (stagger) {
      elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * staggerDelay}ms`;
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, stagger, staggerDelay, once]);

  return containerRef;
}

/**
 * useScrollRevealSingle
 *
 * Simpler variant: watches a single element ref directly.
 * Useful when you just need one element to animate in on scroll.
 *
 * @param {object}  options
 * @param {number}  [options.threshold=0.12]
 * @param {boolean} [options.once=true]
 * @returns {React.RefObject}
 */
export function useScrollRevealSingle({ threshold = 0.12, once = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}

export default useScrollReveal;
