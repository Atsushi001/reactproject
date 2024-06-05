import React from "react"
import logoImg from "./kartinki/Alica.jpg"

function SiteHead() {
    return (
        <header className="AppHeader">
          <div className="container">
            <div className="header_row">
              <div className="header_logo"><img src={logoImg} alt="Logo" className="Alicka"></img></div>
              <nav className="header_nav">
                <ul> 
                  <li><a href="#!" className="header_nav_btn">КНОПКА</a></li>
                  <li><a href="#!" className="header_nav_btn">КНОПКА</a></li>
                  <li><a href="#!" className="header_nav_btn">КНОПКА</a></li>
                  <li><button type="button" class="btn btn-dark header_nav_btn">Dark</button></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    );
  }

export default SiteHead;