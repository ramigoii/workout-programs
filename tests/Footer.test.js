// Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../src/Components/Footer';

test('Footer renders content', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  
  expect(screen.getByText('Workout Programs')).toBeInTheDocument();
  expect(screen.getByText('Навигация')).toBeInTheDocument();
  expect(screen.getByText('Контакты')).toBeInTheDocument();
  expect(screen.getByText(/© 2025 Workout Programs/)).toBeInTheDocument();
});