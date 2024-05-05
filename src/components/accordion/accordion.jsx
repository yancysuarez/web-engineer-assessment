import { useState } from "react"
import Table from "../table/table"
import "./accordion.css"

const Accordion = ({ contents }) => {
  const [ active, setActive ] = useState(contents[0]['header'])

  const handleClick = (header) => {
    console.log("waka")
    setActive(header)
  }

  return (
    <div className="accordion">
      { 
        contents.map(content => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" onClick={() => handleClick(content['header'])}>
                {content['header']}
              </button>
            </h2>
            
            <div className="accordion-collapse collapse" data-show={active === content['header'] ? "1" : "0"}>
              <div className="accordion-body">
                <Table contents={[content['body']]} />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Accordion