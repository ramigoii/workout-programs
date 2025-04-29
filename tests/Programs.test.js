import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Programs } from '../pages/Programs';

// 💡 mock react-router-dom ПЕРВЫМ
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

// 🧠 mock кастомного хука useTheme
jest.mock('../App', () => ({
  useTheme: () => ({
    theme: 'light',
  }),
}));

describe('Programs Component', () => {
  test('renders programs section', () => {
    const mockOnProgramClick = jest.fn();
    render(<Programs onProgramClick={mockOnProgramClick} />);
    
    expect(screen.getByText('Наши программы')).toBeInTheDocument();
    expect(screen.getByText('Выберите программу, которая подходит именно вам')).toBeInTheDocument();
  });

  test('calls onProgramClick when a program is clicked', () => {
    const mockOnProgramClick = jest.fn();
    render(<Programs onProgramClick={mockOnProgramClick} />);
    
    const card = screen.getAllByRole('button', { name: /Подробнее/i })[0];
    fireEvent.click(card);
    expect(mockOnProgramClick).toHaveBeenCalled();
  });

  test('matches snapshot', () => {
    const mockOnProgramClick = jest.fn();
    const { container } = render(<Programs onProgramClick={mockOnProgramClick} />);
    expect(container).toMatchSnapshot();
  });
});
