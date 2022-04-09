import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  let now = new Date();
  return (
    <>
      <nav>
        <div className="logo">
          <div>
            <div>
              <a href="/" className="item-1">
                <div>
                  <i class="fas fa-moon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="menu">
          <ul className="menu-list">
            <li>
              <a href="/" className="item-1">
                <div>
                  <i className="fas fa-home"></i>
                </div>
                home
              </a>
            </li>
            <li>
              <a href="#objective" className="item-1">
                <div>
                  <i class="fas fa-bullseye"></i>
                </div>
                objective
              </a>
            </li>
            <li>
              <a href="#article" className="item-1">
                <div>
                  <i class="fas fa-book"></i>
                </div>
                article
              </a>
            </li>

            <li>
              <a href="#about" className="item-1">
                <div>
                  <i class="fas fa-info"></i>
                </div>
                about
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="user-login">
          <div>
            <a href="/login" className="item-1">
              <div>
                <i class="fas fa-user-circle"></i>
              </div>
            </a>
          </div>
        </div> */}
      </nav>
    </>
  );
};
