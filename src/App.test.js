// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App, { ThemeProvider, useTheme } from './App';

// Вспомогательная функция для обёртки
const renderWithProviders = (ui) => {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        {ui}
      </ThemeProvider>
    </BrowserRouter>
  );
};

// Тест ThemeProvider
test('ThemeProvider provides theme context', () => {
  const TestComponent = () => {
    const { theme } = useTheme();
    return <div data-testid="theme">{theme}</div>;
  };

  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  expect(screen.getByTestId('theme')).toHaveTextContent('light');
});

// Проверка рендера App
test('App renders navbar and main content', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/Workout Programs/i)).toBeInTheDocument();
});

// Снапшот тест
test('matches snapshot', () => {
  const { container } = renderWithProviders(<App />);
  expect(container).toMatchSnapshot();
});
