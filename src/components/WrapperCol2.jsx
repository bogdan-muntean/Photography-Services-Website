import React from "react";

const WrapperCol2 = () => {
  return (
    <div className="wrapper col2">
      <div id="header" className="clear">
        <div className="fl_left">
          <h1>
            <a href="index.html">Professional Photo</a>
          </h1>
          <p>Companie</p>
        </div>
        <div id="topnav">
          <ul>
            <li className="last">
              <a href="pages/gallery.html">Galerie</a>
              <span>Lorem, ipsum dolor.</span>
            </li>
            <li>
              <a href="pages/portfolio.html">Portofoliu</a>
              <span>Lorem, ipsum dolor.</span>
            </li>
            <li>
              <a href="#">DropDown</a>
              <span>Lorem, ipsum dolor.</span>
              <ul>
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="pages/full-width.html">Lorem, ipsum.</a>
              <span>Lorem, ipsum dolor.</span>
            </li>
            <li>
              <a href="pages/style-demo.html">Lorem, ipsum.</a>
              <span>Lorem, ipsum dolor.</span>
            </li>
            <li className="active">
              <a href="index.html">Acasă</a>
              <span>Lorem, ipsum dolor.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WrapperCol2;
