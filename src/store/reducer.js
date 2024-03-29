import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
        const newState = Object.assign({}, state);
        newState.counter = state.counter + 1
      return newState;      
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1 // this is not merge with the state like in normal setState but this returns a new state
      }
    case actionTypes.ADDITION:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACTION:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}) // concat is just like push but concat returns a new array and push mutate the existing array
      }
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.resultId) // concat is just like push but concat returns a new array and push mutate the existing array
      }
    default:
      return state;
  }
}
export default reducer;