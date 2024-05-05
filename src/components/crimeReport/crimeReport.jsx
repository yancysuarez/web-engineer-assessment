import { useState } from "react"

import Accordion from "../accordion/accordion"
import crimeRecord from "../../data/crimeRecords.json"

import "./crimeReport.css"

const CrimeReport = () => {
  const [grouping, setGrouping] = useState('Suburb - Incident')
  const newGrouping = grouping === "Suburb - Incident" ? "Offence Level 2 Description" : "Suburb - Incident"

  const handleSwitchGroupClick = (grouping) => {
    setGrouping(grouping)
  }

  // Group the crime records
  let crimeRecordGrouped = {}
  crimeRecord.forEach(record => {
    const key = grouping

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

  return (
    <div>
      <header>
        Crime Report Page
      </header>
 
      <div className="page-body">
        <div className="switch-mode-container">
          <button className="switch-mode-button" onClick={() => {
            handleSwitchGroupClick(newGrouping)
          }}>Group by {newGrouping}</button>
        </div>
        <Accordion contents={crimeRecordFormatted} />
      </div>
    </div>
  )
}

export default CrimeReport