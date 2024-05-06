import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '../Accordion';

const mockAccordionData = [
  { "header": "Header 1", "body": "Body 1" },
  { "header": "Header 2", "body": "Body 2" },
  { "header": "Header 3", "body": "Body 3" },
  { "header": "Header 4", "body": "Body 4" }
]

describe("Accordion", () => {
  test('should render accordion in body', () => {
    render(<Accordion contents={mockAccordionData}/>)
  
    const accordionElement = screen.getByTestId("accordion")
    expect(accordionElement).toBeInTheDocument()
  })

  test('should render exact number of accordion given from props', () => {
    render(<Accordion contents={mockAccordionData}/>)
  
    const accordionItemElement = screen.getAllByTestId("accordion-item")
    expect(accordionItemElement.length).toBe(4)
  })

  test('should render exact accordion header given from props', () => {
    render(<Accordion contents={[mockAccordionData[0]]}/>)
  
    const accordionItemHeaderElement = screen.getByText(/Header 1/i)
    expect(accordionItemHeaderElement.textContent).toBe("Header 1")
  })

  test('should render exact accordion body given from props', () => {
    render(<Accordion contents={[mockAccordionData[0]]}/>)
  
    const accordionItemHeaderElement = screen.getByText(/Body 1/i)
    expect(accordionItemHeaderElement.textContent).toBe("Body 1")
  })

  test('should collapse correct accordion item', () => {
    render(<Accordion contents={mockAccordionData}/>)
  
    const accordionItemHeaderElement = screen.getByText(/Header 2/i)
    fireEvent.click(accordionItemHeaderElement)

    const accordionItemBodyElement = screen.getByText(/Body 2/i)
    const accordionItemCollapseElement = accordionItemBodyElement.parentNode
    
    expect(accordionItemCollapseElement.getAttribute("data-show")).toBe("1")
  })
})