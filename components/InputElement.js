import React, { useState } from 'react'
import HistoryLog from './HistoryLog'
import * as moment from 'moment'

const InputElement = () => {
  const [inputText, setInputText] = useState('')
  const [historyEvents, addHistoryEvent] = useState([])

  const handleInputChange = e => {
    setInputText(e.target.value)
    addHistoryEvent([...historyEvents, buildEvent(e.target.value)])
  }

  const buildEvent = text => {
    const timestamp = moment(new Date()).format('DD.MM.YYYY, HH:mm:ss')
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
        <HistoryLog historyEvents={historyEvents} />
      </div>
    </div>
  )
}

export default InputElement