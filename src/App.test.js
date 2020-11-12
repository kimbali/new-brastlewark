import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Has Brastlewark title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/BRASTLEWARK/i);
  expect(title).toBeInTheDocument();
});

test('Add hero name twice in document', async () => {
  render(<App />);
  const input = await screen.findByRole('textbox');
  const button = await screen.findByRole('button');

  fireEvent.change(input, { target: { value: 'Black Widow' }})
  fireEvent.click(button)

  const heroName = screen.getAllByText(/Black Widow/i)
  expect(heroName).toHaveLength(2);
});
