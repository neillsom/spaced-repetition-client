import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import "../index.css"
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';
import Guide from './guide';

export class App extends React.Component {
	componentDidUpdate(prevProps) {
		if (!prevProps.loggedIn && this.props.loggedIn) {
			this.startPeriodicRefresh();
		} else if (prevProps.loggedIn && !this.props.loggedIn) {
			this.stopPeriodicRefresh();
		}
	}

	componentWillUnmount() {
		this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(refreshAuthToken()),
			60 * 60 * 1000 // One hour
		);
	}

	stopPeriodicRefresh() {
		if (!this.refreshInterval) {
			return;
		}

		clearInterval(this.refreshInterval);
	}

	render() {
		return (
			<div className="app">
				<HeaderBar />
				{this.props.displayInfo 
			? <Guide /> 
			: ''}
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/register" component={RegistrationPage} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null,
	displayInfo: state.auth.displayInfo
});

export default withRouter(connect(mapStateToProps)(App));
