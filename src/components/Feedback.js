import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import "../index.css"

class Feedback extends Component{
	render(){
		return (
			<div className="feedback-board">
			</div>
		);
	}
}

const mapStateToProps = state => ({
	correctAnswer:state.question.score,
	totalQuestion:state.question.sessionTotalScore,
	feedback: state.protectedData.feedback
})

export default requiresLogin()(connect(mapStateToProps)(Feedback));