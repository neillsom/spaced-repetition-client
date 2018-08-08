import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';


export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = question => ({
	type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = question => ({
	type: FETCH_QUESTION_SUCCESS,
	payload:question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = err => ({
	type: FETCH_QUESTION_ERROR,
	err
});


// // neill
// export const USER_ANSWER_CORRECT = 'USER_ANSWER_CORRECT';
// const userAnswerCorrect = () => ({
// // const feedbackForRight = () => ({
// 	type: USER_ANSWER_CORRECT
// });

// // neill
// export const USER_ANSWER_WRONG = 'USER_ANSWER_WRONG';
// const userAnswerWrong = () => ({
// // const feedbackForWrong = () => ({
// 	type: USER_ANSWER_WRONG
// });

export const FETCH_FEEDBACK_FOR_CORRECT_ANS = 'FETCH_FEEDBACK_FOR_CORRECT_ANS';
export const fetchFeedbackForCorrectAns = () => ({
	type: FETCH_FEEDBACK_FOR_CORRECT_ANS,
	payload: "Yes! You got it!"
});

export const FETCH_FEEDBACK_FOR_WRONG_ANS = 'FETCH_FEEDBACK_FOR_WRONG_ANS';
export const fetchFeedbackForWrongAns = () => ({
	type: FETCH_FEEDBACK_FOR_WRONG_ANS,
	payload: "Sorry! It is incorrect answer!"
});


export const fetchQuestion = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchQuestionRequest());
	return fetch(`${API_BASE_URL}/questions`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(question => dispatch(fetchQuestionSuccess(question)))
		.catch(err => {
			dispatch(fetchQuestionError(err));
		});
};
