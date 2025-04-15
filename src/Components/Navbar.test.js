import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

// Создаём глобальный mock, чтобы управлять toggleTheme
const mockToggleTheme = jest.fn();

jest.mock('../App', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: mockToggleTheme,
  }),
}));

beforeEach(() => {
  mockToggleTheme.mockClear(); // очищаем вызовы перед каждым тестом
});

test('Navbar renders navigation links', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  
  expect(screen.getByText('Главная')).toBeInTheDocument();
  expect(screen.getByText('Программы')).toBeInTheDocument();
  expect(screen.getByText('О нас')).toBeInTheDocument();
  expect(screen.getByText('Контакты')).toBeInTheDocument();
});

test('Theme toggle button works', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  
  fireEvent.click(screen.getByLabelText('Переключить тему'));
  expect(mockToggleTheme).toHaveBeenCalled();
});
