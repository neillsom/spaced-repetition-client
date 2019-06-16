import React from 'react';
import { connect } from 'react-redux';
import { clearAuth, info } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../index.css';
import './styles/header-bar.css';

export class HeaderBar extends React.Component {
	constructor(props) {
		super(props);
		this.escFunction = this.escFunction.bind(this);
	}
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	escFunction(event) {
		if (event.key === 'Escape') {
			this.props.dispatch({ type: 'TOGGLE_INFO' });
		}
	}
	componentDidMount() {
		document.addEventListener('keydown', this.escFunction, false);
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.escFunction, false);
	}

	render() {
		// Only render the log out button if we are logged in
		let logOutButton;
		if (this.props.loggedIn) {
			logOutButton = (
				<button className="logout-button" onClick={() => this.logOut()}>
					Logout
				</button>
			);
		}

		return (
			<div className="header-bar">
				<div className="header">
					<h1 className="header-title">North American Medicinal Herbs</h1>
				</div>

				<button
					className="guide"
					onClick={event => {
						this.props.dispatch(info(event));
						// console.log('clicked');
					}}
				>
					<a>Study Guide</a>
				</button>

				{logOutButton}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	info: state.auth.info,
});

export default connect(mapStateToProps)(HeaderBar);
