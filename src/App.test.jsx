import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders page heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/introduction to flexbox/i);
  expect(headingElement).toBeInTheDocument();
});
