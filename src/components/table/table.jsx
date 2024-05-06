import "./Table.css"

const Table = ({ contents }) => {
  // Get the Table Headers
  const tableHeaders = Object.keys(contents[0])

  return (
    <table className="table" data-testid="table">
      <thead className="table-header text-center" >
        <tr key="table-header">
          { tableHeaders.map(val => (<th key={val} data-testid="table-columns">{val}</th>)) }
        </tr>
      </thead>
      <tbody className="table-body text-center">
        {
          contents.map((row) => {
            // Get the row values
            const rowValues = Object.values(row)
            return (
              <tr data-testid="table-row" key={row["_id"]}>
                { rowValues.map((val, i) => (<td key={i}>{val}</td>)) }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table