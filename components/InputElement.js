import React, { useState } from 'react'

const InputElement = () => {
  const [inputText, setInputText] = useState('')
  const [historyEvents, addHistoryEvent] = useState([])

  const handleInputChange = e => {
    setInputText(e.target.value)
    addHistoryEvent([...historyEvents, buildEvent(e.target.value)])
  }

  const buildEvent = text => {
    const timestamp = new Date().toUTCString()
    return {
      text, timestamp
    }
  }

  return (
    <div>
      <p>
        <input placeholder="Input" onChange={handleInputChange} />
      </p>
      <p>
        You typed:{inputText}
      </p>
      <div>
        <h3>Typing history</h3>
        <ul>
          {historyEvents.map((event, index) => <li key={index}>{event.timestamp}: {event.text}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default InputElement