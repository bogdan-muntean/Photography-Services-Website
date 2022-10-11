import React from 'react'

const WrapperCol1 = () => {
  const [inputText, setInputText] = useState("")
  return (
    <div className="wrapper col1">
        <div id="topbar" className="clear">
            <form action="#" method="post" id="search">
            <fieldset>
                <legend>Bara de căutare</legend>
                <input type="text" onChange={(event) => { setInputText(event) }} placeholder="Caută ..." />
                <input type="image" id="go" src="../images/search-photo.gif" alt="Caută" />
            </fieldset>
            </form>
        </div>
    </div>
  )
}

{/* De ce nu functioneaza placeholder-ul si daca este bine cum ii modific value-ul  */}
{/* 2.poza de ce nu se afiseaza */}

export default WrapperCol1