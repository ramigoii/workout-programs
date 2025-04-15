import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import { act } from 'react-dom/test-utils';

test('About page renders content', async () => {
  await act(async () => {
    render(<About />);
  });

  expect(screen.getByText('О нас')).toBeInTheDocument();
  expect(screen.getByText('Наша миссия')).toBeInTheDocument();
  expect(screen.getByText('Наши ценности')).toBeInTheDocument();

  // Проверка пунктов ценностей
  expect(screen.getByText('Фитнес для всех')).toBeInTheDocument();
  expect(screen.getByText('Профессионализм')).toBeInTheDocument();
  expect(screen.getByText('Сообщество')).toBeInTheDocument();
});

test('matches snapshot', async () => {
  let container;
  await act(async () => {
    const rendered = render(<About />);
    container = rendered.container;
  });
  expect(container).toMatchSnapshot();
});
