// Home.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '../pages/Home';

test('Home renders hero section', () => {
  const mockOnProg = jest.fn();
  const mockOnContact = jest.fn();
  
  render(<Home OnProg={mockOnProg} OnContact={mockOnContact} />);
  
  // Check hero content
  expect(screen.getByText('Твой путь к идеальному телу')).toBeInTheDocument();
  
  // Test callback
  fireEvent.click(screen.getByText('Выбрать программу'));
  expect(mockOnProg).toHaveBeenCalled();
});

test('Home renders pricing section', () => {
  const mockOnProg = jest.fn();
  const mockOnContact = jest.fn();
  
  render(<Home OnProg={mockOnProg} OnContact={mockOnContact} />);
  
  // Check pricing content
  expect(screen.getByText('Выберите свой тариф')).toBeInTheDocument();
  
  // Test pricing buttons
  const pricingButtons = screen.getAllByText('Выбрать');
  fireEvent.click(pricingButtons[0]);
  expect(mockOnContact).toHaveBeenCalled();
});
test('matches snapshot', () => {
    const mockOnProg = jest.fn();
    const mockOnContact = jest.fn();
  
    const { container } = render(<Home OnProg={mockOnProg} OnContact={mockOnContact} />);
    expect(container).toMatchSnapshot();
  });
  