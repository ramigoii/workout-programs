// Basic setup for tests
import '@testing-library/jest-dom';

global.IS_REACT_ACT_ENVIRONMENT = true;

// Mock window.matchMedia
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
    addEventListener: function() {},
    removeEventListener: function() {},
    dispatchEvent: function() {},
  };
};

// Simple mock for react-window
jest.mock('react-window', () => ({
  FixedSizeGrid: ({ children, itemData }) => {
    return children({ 
      columnIndex: 0, 
      rowIndex: 0, 
      style: {}, 
      data: itemData 
    });
  },
  FixedSizeList: ({ children, itemData, itemCount }) => {
    return Array.from({ length: Math.min(itemCount || 1, 3) }).map((_, index) => {
      return children({ 
        index, 
        style: {}, 
        data: itemData 
      });
    });
  },
}));

// Mock AutoSizer
jest.mock('react-virtualized-auto-sizer', () => ({
  __esModule: true,
  default: ({ children }) => children({ width: 1000, height: 600 }),
}));