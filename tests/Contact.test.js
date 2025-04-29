import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Contact } from '../pages/Contact';

// Mock window.alert
const mockAlert = jest.fn();
window.alert = mockAlert;

describe('Contact Component', () => {
  beforeEach(() => {
    mockAlert.mockClear();
  });

  test('renders contact form', () => {
    render(<Contact />);
    
    // Check if the title is rendered
    expect(screen.getByText('Свяжитесь с нами')).toBeInTheDocument();
    
    // Check if form elements are rendered
    expect(screen.getByLabelText('Ваше имя')).toBeInTheDocument();
    expect(screen.getByLabelText('Ваш Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Ваше сообщение')).toBeInTheDocument();
    expect(screen.getByText('Отправить')).toBeInTheDocument();
  });

  test('form validation - shows alert when fields are empty', () => {
    render(<Contact />);
    
    // Submit the form without filling any fields
    fireEvent.click(screen.getByText('Отправить'));
    
    // Check if alert was called with the correct message
    expect(mockAlert).toHaveBeenCalledWith('Пожалуйста, заполните все поля.');
  });

  test('form submission - adds message to the list when all fields are filled', () => {
    render(<Contact />);
    
    // Fill in the form
    fireEvent.change(screen.getByLabelText('Ваше имя'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Ваш Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Ваше сообщение'), { target: { value: 'Test message' } });
    
    // Submit the form
    fireEvent.click(screen.getByText('Отправить'));
    
    // Check if alert was called with the success message
    expect(mockAlert).toHaveBeenCalledWith('Сообщение успешно отправлено!');
    
    // Check if the message list is now visible
    expect(screen.getByText('Отправленные сообщения')).toBeInTheDocument();
  });
});
test('matches snapshot', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });