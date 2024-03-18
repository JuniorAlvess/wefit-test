import { useState, useEffect } from 'react';

import IWindowDimensions from '../types/WindowDimensions';

function getWindowDimensions(): IWindowDimensions {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

const useWindowDimensions = (): IWindowDimensions => {
  const [windowDimensions, setWindowDimensions] =
    useState<IWindowDimensions>(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
