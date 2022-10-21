import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__contentContainer">
        <div className="signUp__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </div>
        <Link to="/signin">
          <button className="signIn__button">Sign In</button>
        </Link>
        <div className="signUp__contentBox">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form className="signUp__form">
            <input
              className="signUp__input"
              type="email"
              placeholder=" Email"
              required
            />
            <button>Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
