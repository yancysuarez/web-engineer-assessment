import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
  test('should render same text passed into text prop', () => {
    render(<Header text="my Header"/>);
  
    const headerElement = screen.getByText(/my Header/i);
    expect(headerElement).toBeInTheDocument();
  });
})