import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <>
      <div className="flexRow header justifyCntr alignCntr">
        <div className="flexRow alignCntr menuContainer">
          <div className="flexAutoRow">
            <a href="/">
              <img className="iqLogo" alt="iqLogo" src="https://github.com/maverick-commit/bits_assests/blob/main/logos/circuit_logo.png" />
            </a>
          </div>
          <div className="flexMinWidthRow">
            <nav className="flexRow">
              <ul className="flexRow ulMenu justifyEnd">
                <li className="flexInline listMenu">
                  <span className="flexRow listAnchorSpan pdngMD alignCntr justifyCntr ">
                    Solutions
                    <div className="flexCol drpDwnMnu">
                      <small>ABC</small>

                      <small>XYZ</small>

                      <small>TPL</small>
                    </div>
                  </span>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/product"
                  >
                    Product
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/software"
                  >
                    Software
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/support"
                  >
                    Support
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/aboutus"
                  >
                    About Us
                  </a>
                </li>
                <li className="flexInline listMenu">
                  <a
                    className="flexRow listAnchor pdngMD alignCntr justifyCntr"
                    href="/constactus"
                  >
                    Constact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
