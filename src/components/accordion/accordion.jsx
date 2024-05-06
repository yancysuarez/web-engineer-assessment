import { useState } from "react"
import "./Accordion.css"

const Accordion = ({ contents }) => {
  const [ active, setActive ] = useState(contents[0]['header'])

  const handleClick = (header) => setActive(header)

  return (
    <div className="accordion" data-testid="accordion">
      { 
        contents.map(({ header, body }) => (
          <div className="accordion-item" data-testid="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" onClick={() => handleClick(header)}>
                { header }
              </button>
            </h2>
            
            <div className="accordion-collapse collapse" 
              data-testid="accordion-collapse" 
              data-show={active === header ? "1" : "0"}
            >
              <div className="accordion-body">
                { body }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Accordion