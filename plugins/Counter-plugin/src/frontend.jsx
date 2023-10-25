import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

const containers = document.querySelectorAll('.root')

containers.forEach((container) => {
  ReactDOM.render(<App />, container)
})
