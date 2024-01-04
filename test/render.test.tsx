/**
* @jest-environment jsdom
*/
import {render, screen} from "@testing-library/react"
import App from '../src/App.tsx';

test('App component renders without crashing', () => {
  render(<App />);
});