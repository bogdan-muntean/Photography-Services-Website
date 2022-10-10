import React from 'react'
import WrapperCol1 from './Components/WrapperCol1'
import WrapperCol2 from './components/WrapperCol2'

export const App = () => {
  return (
    <div id="topOfBody">
      <WrapperCol1/>
      <WrapperCol2/>
      <div id="backtotop">
        <a href="#topOfBody" class="topOfPage">La începutul paginii</a>
      </div>
    </div>
  )
}
