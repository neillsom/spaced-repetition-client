import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = question => ({
	type: FETCH_QUESTION_REQUEST,
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = question => ({
	type: FETCH_QUESTION_SUCCESS,
	payload: question,
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = err => ({
	type: FETCH_QUESTION_ERROR,
	err,
});

export const fetchQuestion = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchQuestionRequest());
	return fetch(`${API_BASE_URL}/questions`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(question => dispatch(fetchQuestionSuccess(question)))
		.catch(err => {
			dispatch(fetchQuestionError(err));
		});
};
