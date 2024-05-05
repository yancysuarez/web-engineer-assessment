import "./table.css"

const Table = ({ contents }) => {
  const tableContent = contents[0]

  console.log({tableContent})

  // Get the Table Headers
  const tableHeaders = []
  for (let key in tableContent[0]) {
    tableHeaders.push(key)
  }

  return (
    <table className="table">
      <thead className="table-header text-center" >
        <tr>
          { tableHeaders.map(val => (<th key={val}>{val}</th>)) }
        </tr>
      </thead>
      <tbody className="table-body text-center">
        {
          tableContent.map((row) => {
            let xxx = []
            for (let key in row) {
              xxx.push(row[key])
            }
            return (<tr>{xxx.map(x => (<td>{x}</td>))}</tr>)
          })
        }
      </tbody>
    </table>
  )
}

export default Table