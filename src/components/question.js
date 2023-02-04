import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { required, nonEmpty } from '../validators';
import { postAnswer, toggleAnswered } from '../actions/protected-data';
import '../index.css';
import './styles/question.css';

class Question extends Component {
	onSubmit = event => {
		event.preventDefault();

		let userAnswer = event.target.userInput.value.toLowerCase();
		this.props.dispatch(
			postAnswer({
				answer: userAnswer,
			})
		);
		event.target.userInput.value = '';
	};

	render() {
		const feedbackData =
			this.props.feedback === undefined ||
			this.props.answered === false ? null : (
				<div className="feedback-board">
					<p>
						{this.props.feedback.feedback} The answer is:{' '}
						<span className="feedback-answer-name">
							{this.props.feedback.answer}
						</span>
					</p>
					<p>
						You answered correctly {this.props.feedback.score} out of{' '}
						{this.props.feedback.total} total times
					</p>
					<p>
						You answered correctly {this.props.sessionCorrectScore} out of{' '}
						{this.props.sessionTotalScore} times this session
					</p>
				</div>
			);

		return (
			<div className="question-board">
				<form
					onSubmit={event => {
						this.onSubmit(event), this.props.dispatch(toggleAnswered());
					}}
				>
					<div className="question-img-container">
						<img
							key={this.props.id}
							src={this.props.question}
							alt={
								'A photo of the medicinal plant called ' + this.props.colloquial
							}
						/>
					</div>

					{this.props.answered === true ? null : (
						<div className="conditional-input-submit">
							<input
								className="userInput"
								type="text"
								name="userInput"
								validate={[required, nonEmpty]}
								required
							/>
							<button className="button-submit">Submit</button>
						</div>
					)}
				</form>
				<div className="feedback">{feedbackData}</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	questions: state.questions,
	answered: state.protectedData.answered,
	question: state.protectedData.data.image,
	id: state.protectedData.id,
	feedback: state.protectedData.feedback,
	sessionTotalScore: state.protectedData.sessionTotalScore,
	sessionCorrectScore: state.protectedData.sessionCorrectScore,
	colloquial: state.protectedData.data.colloquial,
});

export default requiresLogin()(connect(mapStateToProps)(Question));
