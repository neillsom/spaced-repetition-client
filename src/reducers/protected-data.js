import {
	FETCH_PROTECTED_DATA_SUCCESS,
	FETCH_PROTECTED_DATA_ERROR,
	CHECK_ANSWER,
	RECEIVE_ANSWER,
	CLEAR_ANSWER,
	ADD_CORRECT_ANSWER
} from '../actions/protected-data';

const initialState = {
	input: null,
	data: '',
	error: null,
	answer: null,
	result: null
};

export default function wordReducer(state = initialState, action) {
	if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
		return {
			...state,
			data: action.data,
			error: null
		}
	} else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	} else if (action.type === CHECK_ANSWER) {
		return {
			...state,
			input: action.input
		};
	} else if (action.type === RECEIVE_ANSWER) {
		return {
			...state,
			result: action.answer
		}
	} else if (action.type === CLEAR_ANSWER) {
		return {
			...state,
			result: null,
			answer: null
		}
	} else if (action.type === ADD_CORRECT_ANSWER) {
		return {
			...state,
			answer: action.word
		}
	}
	return state;
}