import { useEffect } from 'react';

export const useSmoothScroll = (scrollSpeed: number = 0.5) => {
  useEffect(() => {
    let scrollTarget = window.pageYOffset;
    let currentScroll = window.pageYOffset;

    const smoothScroll = () => {
      currentScroll += (scrollTarget - currentScroll) * 0.1;

      if (Math.abs(scrollTarget - currentScroll) < 0.5) {
        currentScroll = scrollTarget;
      }

      window.scrollTo(0, currentScroll);

      if (currentScroll !== scrollTarget) {
        requestAnimationFrame(smoothScroll);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollTarget += e.deltaY * scrollSpeed;
      scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));
      smoothScroll();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space', 'Home', 'End'];
      if (keys.includes(e.key)) {
        e.preventDefault();

        switch (e.key) {
          case 'ArrowDown':
            scrollTarget += 100 * scrollSpeed;
            break;
          case 'ArrowUp':
            scrollTarget -= 100 * scrollSpeed;
            break;
          case 'PageDown':
          case ' ':
            scrollTarget += window.innerHeight * scrollSpeed;
            break;
          case 'PageUp':
            scrollTarget -= window.innerHeight * scrollSpeed;
            break;
          case 'Home':
            scrollTarget = 0;
            break;
          case 'End':
            scrollTarget = document.body.scrollHeight - window.innerHeight;
            break;
        }

        scrollTarget = Math.max(0, Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight));
        smoothScroll();
      }
    };

    // Passive: false is required to preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrollSpeed]);
};
