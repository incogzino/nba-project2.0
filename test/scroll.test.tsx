import React from 'react';
import { render, screen } from '@testing-library/react';
import Scroll from '../src/scroll';
import {expect, jest, test} from '@jest/globals';

describe('Scroll component', () => {
  test('renders children inside a scrollable container', () => {
    // Mock child content
    const childContent = 'This is a child element';

    // Renders the Scroll component with mocked children
    render(<Scroll>{childContent}</Scroll>);

    // Verifies that the Scroll component renders the children correctly
    const scrollContainer = screen.getByTestId('mock-scroll');
    expect(scrollContainer).toBeDefined();
    expect(scrollContainer.innerHTML).toContain(childContent);
  });
});