import React from 'react'
import WrapperCol1 from './Components/WrapperCol1'

export const App = () => {
  return (
    <div id="topOfBody">
      <WrapperCol1/>
      <div id="backtotop">
        <a href="#topOfBody" class="topOfPage">To The Top</a>
      </div>
    </div>
  )
}
