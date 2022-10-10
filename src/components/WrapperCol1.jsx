import React from 'react'

const WrapperCol1 = () => {
  return (
    <div className="wrapper col1">
        <div id="topbar" className="clear">
            <form action="#" method="post" id="search">
            <fieldset>
                <legend>Bara de căutare</legend>
                <input type="text" value="Caută ..." onfocus="" />
                <input type="image" id="go" src="../images/search.gif" alt="Caută" />
            </fieldset>
            </form>
        </div>
    </div>
  )
}

export default WrapperCol1