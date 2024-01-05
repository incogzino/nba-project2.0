
import fetchMock from 'jest-fetch-mock';
import App from './App.tsx';

beforeEach(() => {
  fetchMock.resetMocks();
});

test('fetches players data on mount', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ data: [{ first_name: 'Player' }] }));

  await act(async () => {
    render(<App />);
  });

  expect(fetchMock).toHaveBeenCalledWith('http://localhost:5174/api/players');
});