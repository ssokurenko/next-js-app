import React from 'react'
import * as uuid from 'uuid/v4'

const HistoryLog = ({ historyEvents }) => {
  return (
    <ul>
      {historyEvents.map(event => <li key={uuid()}><strong>{event.timestamp}</strong>&nbsp;&ndash;&nbsp;{event.text}</li>)}
    </ul>
  )
}

export default HistoryLog