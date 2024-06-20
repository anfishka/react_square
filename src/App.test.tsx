import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './components/MyComponents';


test('renders learn react link', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
