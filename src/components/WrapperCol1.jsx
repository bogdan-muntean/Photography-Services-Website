import React from 'react'

const WrapperCol1 = () => {
  return (
    <div className="wrapper col1">
        <div id="topbar" className="clear">
            <form action="#" method="post" id="search">
            <fieldset>
                <legend>Site Search</legend>
                <input type="text" value="Search In Our Website" onfocus="" />
                <input type="image" id="go" src="../images/search.gif" alt="Search" />
            </fieldset>
            </form>
        </div>
    </div>
  )
}

export default WrapperCol1