import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchList from '../src/searchList'; 
import {expect, jest, test} from '@jest/globals';

describe('SearchList component', () => {
  test('renders filtered players', () => {
    // Mock data for filtered players
    const mockFilteredPlayers = ['Ike Anigbogu', 'MarShon Brooks', 'Ron Baker'];

    render(<SearchList filteredPlayers={mockFilteredPlayers} />);

    // Asserts that each player is rendered
    mockFilteredPlayers.forEach((player) => {
      const playerElement = screen.getByText(JSON.stringify(player));
      expect(playerElement).toBeDefined();
    });
  });

  test('renders no players when filteredPlayers is empty', () => {
    // Render the component with an empty array
    render(<SearchList filteredPlayers={[]} />);

    // This asserts when there are no player elements
    const playerElements = screen.queryAllByText(/Player/);
    expect(playerElements.length).toBe(0);
  });
});