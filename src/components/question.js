import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { required, nonEmpty } from "../validators";
// import { FETCH_QUESTION_SUCCESS } from '../actions/question';
import { postAnswer, toggleAnswered /*, incrementCountCorrect, incrementCountTotal */ } from '../actions/protected-data';
import "../index.css"
import "./styles/question.css";

class Question extends Component {
  onSubmit = (event) => {
    event.preventDefault();

    // let correctAnswer = this.correctAnswer;
    let userAnswer = event.target.userInput.value.toLowerCase();
    this.props.dispatch(postAnswer({
      answer: userAnswer
    }));
    event.target.userInput.value = "";
  }


  render() {

    const feedbackData = (this.props.feedback === undefined || this.props.answered === false) ? null : (
      <div className="feedbackboard">
        <p>{this.props.feedback.feedback}. The answer is: {this.props.feedback.answer}</p>
        <br />
        <p>You answered correctly {this.props.feedback.correctTries} out of {this.props.feedback.totalTries} guesses for this card</p>
        <br />
        <p>You answered correctly {this.props.correctScore} out of {this.props.totalScore} guesses for this session</p>
      </div>
    );

    return (

      <div className="questionboard">
        <form onSubmit={event => { this.onSubmit(event), this.props.dispatch(toggleAnswered()) }}>


          <div className="question-img-container" >
            <img key={this.props.id} src={this.props.question} alt="medicinal herbs" />
          </div>

          {(this.props.answered === true) ? null :
            <div className="conditional-input-submit">
              <input className="userInput"
                type="text"
                name="userInput"
                validate={[required, nonEmpty]}
                required
              />
              <button className="button-submit">Submit</button>
            </div>
          }
        </form>
        <div className="feedback">
          {feedbackData}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  // correctAnswer: state.correctAnswer,
  answered: state.protectedData.answered,
  question: state.protectedData.data.image,
  id: state.protectedData.id,
  feedback: state.protectedData.feedback,
  totalScore: state.protectedData.totalScore,
  correctScore: state.protectedData.correctScore
});

export default requiresLogin()(connect(mapStateToProps)(Question));