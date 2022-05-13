import { useState } from 'react';

export function useChangeBackground() {
  const [haveBackground, setHaveBackground] = useState(false);

  if (typeof window !== 'undefined') {
    const changeBackground = () => {
      if (window.scrollY >= 64) {
        setHaveBackground(true);
      } else {
        setHaveBackground(false);
      }
    };

    window.addEventListener('scroll', changeBackground);
  }

  return haveBackground;
}