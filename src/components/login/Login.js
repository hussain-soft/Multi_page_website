import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <>
      <section className="login-container">
        <div className="">
          <div className="loo">
            <form className="">
              <div className="login-img">
                <i class="fas fa-user-circle"></i>
                <h1>Login</h1>
              </div>
              <div className="input-area">
                <label for="Name">User id</label>
                <input
                  id="two"
                  classname="ar"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="input-area">
                <label for="Name">Password</label>
                <input
                  id="one"
                  classname="ar"
                  type="text"
                  placeholder="******"
                  required
                />
              </div>
              <div>
                <input type="submit" value="submit" />
              </div>

              <div className="login-media">
                <p>join or contact us on</p>
                <ul>
                  <a href>
                    <li>
                      <i class="fa fa-twitter"></i>
                    </li>
                  </a>
                  <a href>
                    <li>
                      <i class="fa fa-facebook"></i>
                    </li>
                  </a>
                  <a href>
                    <li>
                      <i class="fa fa-instagram"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
