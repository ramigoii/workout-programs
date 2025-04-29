import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProgramDetails } from '../src/Components/ProgramDetails';
import { mockPrograms, mockProgramDetails } from '../src/test-utils';



describe('ProgramDetails Component', () => {
  test('renders program not found message when program is null', () => {
    const mockOnBack = jest.fn();
    render(<ProgramDetails program={null} onBack={mockOnBack} />);
    
    expect(screen.getByText('Программа не найдена')).toBeInTheDocument();
    
    const backButton = screen.getByText(/Назад к программам/i);
    fireEvent.click(backButton);
    expect(mockOnBack).toHaveBeenCalled();
  });

  test('renders program details when program is provided', () => {
    const mockOnBack = jest.fn();
    const program = mockPrograms[0];
    
    render(<ProgramDetails program={program} onBack={mockOnBack} />);
    
    expect(screen.getByText(program.title)).toBeInTheDocument();
    expect(screen.getByText(program.description)).toBeInTheDocument();
    expect(screen.getByText('Расписание тренировок')).toBeInTheDocument();
    
    const backButton = screen.getByText(/Назад к программам/i);
    fireEvent.click(backButton);
    expect(mockOnBack).toHaveBeenCalled();
  });

  test('matches snapshot with program', () => {
    const mockOnBack = jest.fn();
    const program = mockPrograms[0];
    const { container } = render(<ProgramDetails program={program} onBack={mockOnBack} />);
    expect(container).toMatchSnapshot();
  });
});
