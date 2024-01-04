import { render, fireEvent } from '@testing-library/react';
import App from './App.tsx';

test('handleSearchInputChange updates searchQuery correctly', () => {
  const { getByPlaceholderText } = render(<App />);
  const searchInput = getByPlaceholderText('Search');

  fireEvent.change(searchInput, { target: { value: 'new input' } });

  expect(searchInput.value).toBe('new input');
});