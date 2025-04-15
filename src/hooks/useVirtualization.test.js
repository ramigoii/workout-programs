import { renderHook, act } from '@testing-library/react';
import { useVirtualization } from './useVirtualization';

// Mock window resize
const resizeWindow = (width) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

describe('useVirtualization', () => {
  test('returns correct column count based on screen width', () => {
    const { result } = renderHook(() => useVirtualization(3));
    
    // Initial state
    expect(result.current.columnCount).toBe(3);

    // Small screen
    act(() => resizeWindow(600));
    expect(result.current.columnCount).toBe(1);

    // Medium screen
    act(() => resizeWindow(800));
    expect(result.current.columnCount).toBe(2);

    // Large screen
    act(() => resizeWindow(1200));
    expect(result.current.columnCount).toBe(3);
  });

  test('snapshot of hook result', () => {
    const { result } = renderHook(() => useVirtualization(3));
    expect(result.current).toMatchSnapshot();
  });
});
