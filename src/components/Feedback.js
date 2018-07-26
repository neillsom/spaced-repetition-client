import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import "../index.css"

class Feedback extends Component{
	render(){
		return (
			<div className="feedbackboard">
			</div>
		);
	}
}

const mapStateToProps = state => ({
	correctAnswer:state.question.score,
	totalQuestion:state.question.totalscore,
	feedback: state.protectedData.feedback
})

export default requiresLogin()(connect(mapStateToProps)(Feedback));