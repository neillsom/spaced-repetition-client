import * as actions from '../actions/question';
const initialState = {
	loading: null,
	error: null,
	correct: false,
	wrong: false,
	feedback:null,
	score: 0,
	totalscore: 0,
	guess: null
}

const questionReducer = (state=initialState, action) => {
	if (action.type === actions.FETCH_QUESTION_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error:null
		});
	} else if (action.type === actions.FETCH_QUESTION_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			guess: action.payload
		});
	} else if (action.type === actions.FETCH_QUESTION_ERROR) {
		return Object.assign({}, state, {
			guess:null,
			loading: false,
			error: action.error
		});
	} 

	// neill
	// else if (action.type === actions.USER_ANSWER_CORRECT) {
	// 	return Object.assign({}, state, {
	// 		correct: true,
	// 		wrong:false,
	// 		score: state.score + 1,
	// 		totalscore: state.totalscore + 1,

	// 	});
	// } 

	// neill
	// else if (action.type === actions.USER_ANSWER_WRONG) {
	// 	return Object.assign({}, state, {
	// 		correct:false,
	// 		wrong: true,
	// 		totalscore: state.totalscore + 1
	// 	});
	// } 

	else if (action.type === actions.FETCH_FEEDBACK_FOR_CORRECT_ANS) {
		return Object.assign({}, state, {
			feedback:action.payload,
			//correctAnswer:`The correct answer is ${state.guess.answer}`
		});
	} else if (action.type === actions.FETCH_FEEDBACK_FOR_WRONG_ANS) {
		return Object.assign({}, state, {
			feedback: `${action.payload}`,
			correctAnswer:`The correct answer is ${state.guess.answer}`
		});
	} else {
		return state;
	}
}
export default questionReducer;