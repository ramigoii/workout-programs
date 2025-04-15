// index.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Mocking document.getElementById
jest.mock('react-dom', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('index.js', () => {
  it('renders the App component', () => {
    // Since we mock createRoot, the root.render won't actually happen in the test.
    // Instead, we test that our App component renders within a BrowserRouter.

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if a specific element from your App is in the document
    // For example, if you have a header or a logo, you can check it:
    expect(screen.getByText(/your text/i)).toBeInTheDocument();
  });
});
