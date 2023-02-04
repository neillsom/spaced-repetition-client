import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../index.css';
import './styles/landing-page.css';
import LoadingSpinner from './LoadingSpinner';

import LoginForm from './login-form';

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
					<p>Not registered?</p>
					<Link to="/register" className="signup-button">
						Sign up
					</Link>
					{props.loading && <LoadingSpinner />}
				</div>
			</div>
			<div className="app-info-text">
				<p>
					Name That Plant is a Node & React application that showcases spaced
					repetition learning through the use of linked list data structure. The
					site features authentication and JWTs through the Passport and Bcyrpt
					libraries. A user can create an account, practice learning latin plant
					names, sign out, and return to their previous progress after signing
					back in.
				</p>

				<hr />

				<p>
					Spaced repetition is a learning technique that involves increasing the
					interval of time between subsequent reviews of previously learned
					material in order to exploit the spacing effect.
				</p>
				<p>
					The spacing effect refers to the phenomenon where material is better
					remembered if studied over spaced intervals rather than studied
					intensively in a single session.
				</p>
				<p>
					The goal of spaced repetition is to increase retention and reduce the
					time needed to recall the material.
				</p>
			</div>
			<footer>Neill Somerville, 2018</footer>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	loading: state.auth.loading,
});

export default connect(mapStateToProps)(LandingPage);
