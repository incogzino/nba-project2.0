/**
* @jest-environment jsdom
*/
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from '../src/App';
// import {expect, jest, test} from '@jest/globals';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks()

beforeEach(() => {
  fetch.resetMocks();
});

describe('App component', () => {
  test('renders player card for Ike Anigbogu', async () => {

fetch.mockResponse(JSON.stringify(

  {"data": [
    {"id": 14, "first_name": "Ike", "last_name": "Anigbogu", "position": "C", "team": {"full_name": "Indiana Pacers"}}
  ],

}));

render(<App />);

    // Waits for the component to update with the mocked data
    const player_firstname = await screen.findByText('Ike');

  //expects to see Ike Anigbogu
    expect(player_firstname).toBeInTheDocument();

  });
});