import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
	type: FETCH_PROTECTED_DATA_SUCCESS,
	data,
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
	type: FETCH_PROTECTED_DATA_ERROR,
	error,
});

export const FETCH_NEXT_QUESTION = 'FETCH_NEXT_QUESTION';
export const fetchNextQuestion = () => ({
	type: FETCH_NEXT_QUESTION,
});

export const SUBMIT_ANSWER_REQUEST = 'SUBMIT_ANSWER_REQUEST';
export const submitAnswerRequest = answer => ({
	type: SUBMIT_ANSWER_REQUEST,
});

export const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
export const submitAnswerSuccess = data => ({
	type: SUBMIT_ANSWER_SUCCESS,
	data,
});

export const SUBMIT_ANSWER_ERROR = 'SUBMIT_ANSWER_ERROR';
export const submitAnswerError = err => ({
	type: SUBMIT_ANSWER_ERROR,
	err,
});

export const TOGGLE_ANSWERED = 'TOGGLE_ANSWERED';
export const toggleAnswered = () => ({
	type: TOGGLE_ANSWERED,
});

export const INCREMENT_COUNT_TOTAL = 'INCREMENT_COUNT_TOTAL';
export const incrementCountTotal = countTotal => ({
	type: INCREMENT_COUNT_TOTAL,
	countTotal,
});

export const INCREMENT_COUNT_CORRECT = 'INCREMENT_COUNT_CORRECT';
export const incrementCountCorrect = () => ({
	type: INCREMENT_COUNT_CORRECT,
});

// export const TOGGLE_INFO = 'TOGGLE_INFO'
// export const info = () => ({
// 		 type: TOGGLE_INFO
// })

export const fetchProtectedData = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/questions`, {
		method: 'GET',
		headers: {
			// Provide our auth token as credentials
			Authorization: `Bearer ${authToken}`,
		},
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())

		.then(data => dispatch(fetchProtectedDataSuccess(data)))

		.catch(err => {
			dispatch(fetchProtectedDataError(err));
		});
};

// Call this action on submit input answer
export const postAnswer = answer => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(submitAnswerRequest());

	return fetch(`${API_BASE_URL}/questions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`,
		},
		body: JSON.stringify(answer),
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(data => {
			dispatch(submitAnswerSuccess(data));
			if (data.feedback === 'You got it!') {
				dispatch(incrementCountCorrect());
			}
		})

		.catch(err => {
			dispatch(submitAnswerError(err));
		});
};
