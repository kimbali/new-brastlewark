import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Has Brastlewark title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Welcome to Brastlewark/i);
  expect(title).toBeInTheDocument();
});

test('Add hero name in header', async () => {
  render(<App />);
  const input = await screen.findByRole('textbox');
  const button = await screen.findByRole('button');

  expect(button).toBeDisabled();
  
  fireEvent.change(input, { target: { value: 'Black Widow' }})
  fireEvent.click(button)

  const heroName = screen.getAllByText(/Black Widow/i)

  expect(heroName).toHaveLength(1);
  expect(button).not.toBeDisabled();
});
