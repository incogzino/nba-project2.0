import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.tsx';

// This mocks the SearchList component
jest.mock('../src/App.tsx', () => ({ filteredPlayers }: { filteredPlayers: any[] }) => (
  <div data-testid="mock-search-list">
   
  </div>
));

describe('Search component', () => {
  test('handles input change', () => {
    const mockDetails = [
      { first_name: 'Ike', last_name: 'Anigbogu' },
      { first_name: 'MarShon', last_name: 'Brooks' },
    ];

    render(<Search details={mockDetails} />);

    // This simulates a change event on the input
    const inputElement = screen.getByPlaceholderText('Search'); 
    fireEvent.change(inputElement, { target: { value: 'Marshon' } });

    // Asserts that the handleChange function updates the state correctly
    expect(inputElement.value).toBe('MarShon');
  });
});