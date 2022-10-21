import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signIn">
      <div className="signIn__contentContainer">
        <div className="signIn__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </div>
        <div className="signIn__contentBox">
          <form className="signIn__form">
            <h1>Sign In</h1>
            <input type="email" placeholder=" Email" required />
            <input type="text" required placeholder=" Password" />
            <button className="signIn__signInButton">Sign In</button>
            <h3>
              <span>New to Netflix? </span>
              <Link to="/signup" className="signIn__Link">
                Sign up now
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
