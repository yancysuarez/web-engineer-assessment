import Accordion from "../accordion/accordion"
import crimeRecord from "../../data/crimeRecords.json"

import "./crimeReport.css"

// import { useState } from "react"

console.log({crimeRecord})

const CrimeReport = () => {
  // Group the crime records
  let crimeRecordGrouped = {}
  crimeRecord.forEach(record => {
    const key = 'Suburb - Incident'

    if (!crimeRecordGrouped[record[key]])
      crimeRecordGrouped[record[key]] = []

    const recordDuplicate = {}
    for (let x in record) {
      if (x === key) continue
      recordDuplicate[x] = record[x];
    }
    crimeRecordGrouped[record[key]].push(recordDuplicate);
  });

  // Format Crime Records
  let crimeRecordFormatted = []
  for (let key in crimeRecordGrouped) {
    crimeRecordFormatted.push({
      "header": key,
      "body": crimeRecordGrouped[key]
    })
  }
  console.log({crimeRecordFormatted})

  // const [xxx, setXxx] = useState(0)

  // setXxx(crimeRecordFormatted)
  return (
    <div>
      <header>
        Crime Report Page
      </header>
 
      <div className="page-body">
        <Accordion contents={crimeRecordFormatted} />
      </div>
    </div>
  )
}

export default CrimeReport