import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { jwtDecode } from 'jwt-decode';
import { wordSetter } from './wordSetter';

export const CHECK_ANSWER = 'CHECK_ANSWER';
export const checkAnswer = input => ({
	type: CHECK_ANSWER,
	input
});

export const ADD_CORRECT_ANSWER = 'ADD_CORRECT_ANSWER';
export const addCorrectAnswer = word => ({
	type: ADD_CORRECT_ANSWER,
	word
});

export const CLEAR_ANSWER = 'CLEAR_ANSWER';
export const clearAnswer = () => ({
	type: CLEAR_ANSWER
});

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const receiveAnswer = answer => ({
	type: RECEIVE_ANSWER,
	answer
});

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
	type: FETCH_PROTECTED_DATA_SUCCESS,
	data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
	type: FETCH_PROTECTED_DATA_ERROR,
	error
});

export const sendAnswer = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	const decodedToken = jwtDecode(authToken);
	let userId = decodedToken.user.id;
	const answer = getState().protectedData.input;
	return fetch(`${API_BASE_URL}/api/users/answer`, {
			method: 'POST',
			headers: {
				'content-type': 'applilcation/json',
				Authorization: `Bearer ${authToken}`
			},
			body: JSON.stringify({
				answer,
				userId
			})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then((data) => {
			if (typeof data === 'boolean') {
				dispatch(receiveAnswer(data));
			} else {
				dispatch(addCorrectAnswer(data.answer));
				dispatch(receiveAnswer(data.boolean));
			}
		})
		.catch(err => {
			console.error(err);
		})
}

export const fetchProtectedData = () => (dispatch, getState) => {
	dispatch(clearAnswer());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/api/users/next`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${authToken}`
			}
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({ data }) => {
			dispatch(fetchProtectedDataSuccess(data));
			dispatch(wordSetter(data));
		})
		.catch(err => {
			dispatch(fetchProtectedDataError(err));
		});
};