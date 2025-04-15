import { useState, useEffect } from 'react';

export const useVirtualization = (initialColumnCount = 3) => {
  const [columnCount, setColumnCount] = useState(initialColumnCount);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (window.innerWidth < 640) {
        setColumnCount(1);
      } else if (window.innerWidth < 1024) {
        setColumnCount(2);
      } else {
        setColumnCount(initialColumnCount);
      }
    };

    handleResize(); // Set initial values
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initialColumnCount]);

  return { columnCount, dimensions };
};

export default useVirtualization;
