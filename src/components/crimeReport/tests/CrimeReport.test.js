import { render, screen, fireEvent } from '@testing-library/react';
import CrimeReport from '../CrimeReport';

describe("Crime Report", () => {
  test('should render Crime Report in body', () => {
    render(<CrimeReport/>)
  
    const crimeReportElement = screen.getByTestId("crime-report-page")
    expect(crimeReportElement).toBeInTheDocument()
  })

  test('should render switch mode button text correctly', () => {
    render(<CrimeReport/>)
  
    const toggleDataCategButton = screen.getByText(/Group by Offence Level 2 Description/i)
    expect(toggleDataCategButton.textContent).toBe("Group by Offence Level 2 Description")

    fireEvent.click(toggleDataCategButton)
    expect(toggleDataCategButton.textContent).toBe("Group by Suburb - Incident")
  })
})