import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "../index.css"
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
			<h2>Learning Through Spaced Repetition</h2>
			<LoginForm />
			<div className="signup">
			  <Link to="/register" className="signup-button">Sign up</Link>
			</div>
		</div>
	  <div className="infoaboutapp">
	  	<h3>Demo Account:</h3>
	  	<h4>Username: demouser</h4>
	  	<h4>Password: demouser</h4>
	  	<hr />
	  	<p>Spaced repetition is a method for efficient learning that has you practice concepts or skills over increasing periods of time. </p>
	  	<p>It's based on the notion of a "forgetting curve," or the idea that over time, if we don't actively use or reflect on something we know, our knowledge decays. </p>
	  	<p>With spaced repetition, we stay ahead of that moment of forgetting, but we do it in a smart way: if we know something, we don't need to practice it for some period of time. </p>
	  	<p>If we don't know something, we need to practice it.</p>
	  </div>
	</div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
