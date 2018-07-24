import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./scripts/landing-page.css";

import LoginForm from "./login-form";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
	return <Redirect to="/dashboard" />;
  }

  return (
	<div className="landing">
	  <div className="loginbox">
		<h2>Neill's Spaced Repetition App</h2>
		<LoginForm />
		<div className="signup">
		  <Link to="/register" className="signup-button">
			Sign Up
		  </Link>
		</div>
		<div className="demo-account">
		  <span>Username: demouser</span>
		  <span>Password: demodemo</span>
		</div>
	  </div>
	  <div className="infoaboutapp">
			about app info here
	  </div>
	</div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
