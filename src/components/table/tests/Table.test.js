import { render, screen } from '@testing-library/react';
import Table from '../Table';

const mockTableData = [
  { "col1": "row1 - value 1", "col2": "row1 - value 2" },
  { "col1": "row2 - value 1", "col2": "row2 - value 2" },
  { "col1": "row3 - value 1", "col2": "row3 - value 2" },
  { "col1": "row4 - value 1", "col2": "row4 - value 2" }
]

describe("Test Table Component", () => {
  test('should render table in body', () => {
    render(<Table contents={mockTableData}/>)
  
    const tableElement = screen.getByTestId("table")
    expect(tableElement).toBeInTheDocument()
  })

  test('should render exact number of rows give from props', () => {
    render(<Table contents={mockTableData}/>)
  
    const tableRowElement = screen.getAllByTestId("table-row")
    expect(tableRowElement.length).toBe(4)
  })

  test('should render exact number of columns give from props', () => {
    render(<Table contents={mockTableData}/>)
  
    const tableColumnElement = screen.getAllByTestId("table-columns")
    expect(tableColumnElement.length).toBe(2)
  })

  test('should render correct header values given from props', () => {
    render(<Table contents={mockTableData}/>)

    const tableHeader = Object.keys(mockTableData[0]);
    tableHeader.forEach(header => {
      const headerElement = screen.getByText(header)
      expect(headerElement).toBeInTheDocument()
    })
  })

  test('should render correct row values given from props', () => {
    render(<Table contents={mockTableData}/>)

    const tableValues = Object.values(mockTableData[0]);
    tableValues.forEach(value => {
      const tdElement = screen.getByText(value)
      expect(tdElement).toBeInTheDocument()
    });
  })
})