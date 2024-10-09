import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../Projects';

describe('Projects Component', () => {
  test('renders Projects component header', () => {
    render(<Projects />);
    // Filter out the "Show all" link if it's included in the rendered output
    const headerElement = screen.getByText(/These are some of my projects/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the correct number of project tiles', () => {
    render(<Projects />);
    const projectTiles = screen.getAllByRole('link');
    expect(projectTiles).toHaveLength(10);
  });

  test('renders the project details correctly', () => {
    render(<Projects />);
    const projectLink = screen.getByText(/Text Analyser/i);
    expect(projectLink).toBeInTheDocument();

    const projectImage = screen.getByAltText(/Text Analyser project image/i);
    expect(projectImage).toBeInTheDocument();
    // Since images are mocked, you can just check if the src is stubbed correctly
    expect(projectImage).toHaveAttribute('src', 'test-file-stub');
  });
});