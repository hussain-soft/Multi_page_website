import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="col-14">
          <div className="col-15">
            <div className="exp">
              <h4>important links</h4>
              <ul className="col-16">
                <li>
                  <a href="/">
                    <i className="fa fa-home"></i> home
                  </a>
                </li>
                <li>
                  <a href="#objective">
                    <i className="fa fa-bullseye"></i> objective
                  </a>
                </li>
                <li>
                  <a href="#article">
                    <i className="fa fa-book"></i> article
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <i className="fa fa-info"></i> about
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-17">
            <div className="exp">
              <h4>reach us</h4>
              <p>
                <i className="fa fa-phone"></i> (+92) 332 5738393
                <br />
                <i className="fa fa-envelope"></i> info@email.com
                <br />
                <i className="fa fa-map-marker"></i> street # x, abc town,
                pakistan
              </p>
            </div>
          </div>
          <div className="col-18">
            <div className="exp">
              <h4>social links</h4>
              <ul className="col-19">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="end">
          <hr width="1000px" />
          <p>
            All Right Reserved &copy; 2021 | developed by
            <a href="#" className="link">
              - Muhammad Hussain
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
