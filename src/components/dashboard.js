import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import {
  fetchProtectedData,
  // fetchNextQuestion,
  toggleAnswered
} from "../actions/protected-data";
import Question from "./question";
// import Feedback from "./Feedback";
import "../index.css"
import "./scripts/dashboard.css";

export class Dashboard extends React.Component {
  onClickhandler() {
	//check on state
	this.props.dispatch(fetchProtectedData());
	this.props.dispatch(toggleAnswered());
  }
  componentDidMount() {
	this.props.dispatch(fetchProtectedData());
  }

  render() {
	const answered = this.props.answered;
	let currQuestion = this.props.question;

	return (
	  <div className="dashboard">
		<div className="dashboard-username">Hello, {this.props.username}</div>
		<h3 className="dashboard-h3">What is the Latin name for this plant?</h3>
		<h4>The common name is {this.props.colloquial}</h4>
		<div className="dashboard-protected-data">
		  {currQuestion ? <Question {...currQuestion} /> : null}
		  {answered === false ? null : (
			<button
			  className="next"
			  onClick={() => this.onClickhandler(fetchProtectedData())}
			>
			  Next
			</button>
		  )}
		</div>
	  </div>
	);
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
	username: state.auth.currentUser.username,
	name: `${currentUser.firstname} ${currentUser.lastname}`,
	protectedData: state.protectedData,
	question: state.protectedData.data.image,
	// feedback: state.protectedData.feedback,
	answered: state.protectedData.answered,
	colloquial: state.protectedData.data.colloquial,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
