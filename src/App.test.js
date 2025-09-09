import React, { render, screen } from '@testing-library/react';
import App from './App';
// no-unused-vars , no-undef

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
