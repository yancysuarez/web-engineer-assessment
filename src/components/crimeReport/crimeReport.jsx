
import "./CrimeReport.css"

import Button from "../Button/Button"
import Header from "../Header/Header"
import Table from "../Table/Table"
import Accordion from "../Accordion/Accordion"

import crimeRecord from "../../data/crimeRecords.json"

import { useState } from "react"

const categorizeRecord = (records, categoryField) => {
  const grouped = {}
  records.forEach(record => {
    const key = categoryField

    if (!grouped[record[key]])
      grouped[record[key]] = []

    const recordDuplicate = {}
    for (let x in record) {
      if (x === key) continue
      recordDuplicate[x] = record[x];
    }
    grouped[record[key]].push(recordDuplicate);
  });


  const formatted = []
  for (let key in grouped) {
    formatted.push({
      "header": key,
      "body": (<Table contents={grouped[key]}/>)
    })
  }

  return { grouped, formatted }
}

const CrimeReport = () => {
  const [grouping, setGrouping] = useState('Suburb - Incident')
  const newGrouping = grouping === "Suburb - Incident" ? "Offence Level 2 Description" : "Suburb - Incident"
  const newGroupBtnTxt = "Group by " + newGrouping 

  const handleSwitchGroupClick = () => {
    setGrouping(newGrouping)
  }

  // Categorize Records Accordingly
  const { formatted } = categorizeRecord(crimeRecord, grouping)

  return (
    <div data-testid="crime-report-page">
      <Header text="Crime Report Page"/>
 
      <div className="page-body">

        <div className="switch-mode-container">
          <Button role="toggle"
            text={newGroupBtnTxt} 
            onClick={handleSwitchGroupClick}
          />
        </div>

        <Accordion contents={formatted} />
      </div>
    </div>
  )
}

export default CrimeReport