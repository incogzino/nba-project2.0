// import { render, fireEvent } from '@testing-library/react';
// import App from '../src/searchList';

// test('handleSearchInputChange updates searchQuery correctly', () => {
//   const { getByPlaceholderText } = render(<App />);
//   const searchInput = getByPlaceholderText('Search');

//   fireEvent.change(searchInput, { target: { value: 'new input' } });

//   expect(searchInput.value).toBe('new input');
// });

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.tsx';



// Mock the SearchList component
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