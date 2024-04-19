/**
* @jest-environment jsdom
*/
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks()

beforeEach(() => {
  fetch.resetMocks();
});

describe('App component', () => {
    test('renders players whos first name begins with I', async () => {
  
  fetch.mockResponse(JSON.stringify(
  
    {"data": [
      {"id": 14, "first_name": "Ike", "last_name": "Anigbogu", "position": "C", "team": {"full_name": "Indiana Pacers"}},
      {"id": 15, "first_name": "Isaiah", "last_name": "Canaan", "position": "PG", "team": {"full_name": "Houston Rockets"}},
      {"id": 16, "first_name": "Ike", "last_name": "Borsavage", "position": "C/PF", "team": {"full_name": "Philadelphia Warriors"}},
      {"id": 17, "first_name": "Felipe", "last_name": "Lopez", "position": "SG", "team": {"full_name": "San Antonio Spurs"}},
      {"id": 18, "first_name": "Allen", "last_name": "Iverson", "position": "SG/PG", "team": {"full_name": "Philadelphia 76ers"}}
    ],
  
  }));
  
  render(<App />);
  
      // Waits for the component to update with the mocked data
      const player_firstname = await screen.findByText('I');
  
    //expects to see a list of players whose first name begins with 'I'
      expect(player_firstname).toBeInTheDocument();
  
    });
  });