import { WORD_SETTER } from "../actions/wordSetter";

const initialState = {
  word: ''
};

export default function reducer(state = initialState, action){
  if(action.type === WORD_SETTER){
    return {
      ...state,
      word: action.word
    }
  } 
  return state;
}