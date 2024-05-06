import { render, screen } from '@testing-library/react';
import Button from '../Button';

const mockedOnClick = jest.fn()

describe("Button", () => {
  test('should render same text passed into text prop', () => {
    render(<Button text="my text" onClick={mockedOnClick}/>);
  
    const buttonElement = screen.getByText(/my text/i);
    expect(buttonElement).toBeInTheDocument();
  })
})