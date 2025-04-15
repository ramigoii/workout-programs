import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

// Simple render function
export function render(element) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  
  act(() => {
    root.render(element);
  });
  
  return {
    container,
    getByText: (text) => {
      const elements = Array.from(container.querySelectorAll('*'))
        .filter(el => el.textContent === text);
      if (elements.length === 0) {
        throw new Error(`Could not find element with text: ${text}`);
      }
      return elements[0];
    },
    getByLabelText: (label) => {
      const labelElement = Array.from(container.querySelectorAll('label'))
        .find(el => el.textContent === label);
      if (!labelElement) {
        throw new Error(`Could not find label with text: ${label}`);
      }
      const input = document.getElementById(labelElement.htmlFor);
      if (!input) {
        throw new Error(`Could not find input for label: ${label}`);
      }
      return input;
    },
    getAllByTestId: (testId) => {
      return Array.from(container.querySelectorAll(`[data-testid^="${testId}"]`));
    },
    getByTestId: (testId) => {
      const element = container.querySelector(`[data-testid="${testId}"]`);
      if (!element) {
        throw new Error(`Could not find element with data-testid: ${testId}`);
      }
      return element;
    },
    unmount: () => {
      act(() => {
        root.unmount();
      });
      document.body.removeChild(container);
    }
  };
}

// Simple fireEvent utility
export const fireEvent = {
  click: (element) => {
    act(() => {
      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      });
      element.dispatchEvent(event);
    });
  },
  change: (element, { target }) => {
    act(() => {
      const event = new Event('change', {
        bubbles: true,
        cancelable: true,
      });
      Object.assign(element, target);
      element.dispatchEvent(event);
    });
  },
  submit: (element) => {
    act(() => {
      const event = new Event('submit', {
        bubbles: true,
        cancelable: true,
      });
      element.dispatchEvent(event);
    });
  }
};

// Simple expect utilities
export const expect = {
  toBeInTheDocument: (element) => {
    if (!document.body.contains(element)) {
      throw new Error('Element is not in the document');
    }
    return true;
  },
  toHaveTextContent: (element, text) => {
    if (element.textContent !== text) {
      throw new Error(`Expected element to have text content "${text}" but got "${element.textContent}"`);
    }
    return true;
  },
  toHaveValue: (element, value) => {
    if (element.value !== value) {
      throw new Error(`Expected element to have value "${value}" but got "${element.value}"`);
    }
    return true;
  }
};
export const mockPrograms = [
    {
      id: '1',
      title: 'Программа Сила',
      description: 'Описание силовой программы',
      schedule: [
        { day: 'Понедельник', exercises: ['Присед', 'Жим'] },
        { day: 'Среда', exercises: ['Становая тяга', 'Подтягивания'] },
      ],
    },
  ];
  
  export const mockProgramDetails = {
    '1': mockPrograms[0],
  };
  