
import "./CrimeReport.css"

import Button from "../Button/Button"
import Header from "../Header/Header"
import Table from "../Table/Table"
import Accordion from "../Accordion/Accordion"

import crimeRecord from "../../data/crimeRecords.json"

import { useState } from "react"

const CrimeReport = () => {
  const [grouping, setGrouping] = useState('Suburb - Incident')
  const newGrouping = grouping === "Suburb - Incident" ? "Offence Level 2 Description" : "Suburb - Incident"
  const newGroupBtnTxt = "Group by " + newGrouping 

  const handleSwitchGroupClick = () => {
    setGrouping(newGrouping)
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
      "body": (<Table contents={crimeRecordGrouped[key]}/>)
    })
  }
  console.log({crimeRecordFormatted})

  return (
    <div>
      <Header text="Crime Report Page"/>
 
      <div className="page-body">
        <div className="switch-mode-container">
          <Button text={newGroupBtnTxt} onClick={handleSwitchGroupClick}/>
        </div>

        <Accordion contents={crimeRecordFormatted} />
      </div>
    </div>
  )
}

export default CrimeReport