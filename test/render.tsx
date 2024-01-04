/**
* @jest-environment jsdom
*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App component', () => {
  test('renders search bar and player cards', async () => {
    render(<App />);

    // Check if the search bar is rendered
    const searchBar = screen.getByPlaceholderText('Search');
    expect(searchBar).toBeInTheDocument();

    // check if the player cards are rendered
    const playerCards = screen.getAllByRole('listitem');
    expect(playerCards.length).toBeGreaterThan(0);
  });

});