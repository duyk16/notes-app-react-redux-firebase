// import noteData from './FireBase';

var redux = require('redux');

const dataInitialState = {
  testCon: true
}
const data = (state = dataInitialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      console.log('Connected')
      return { testCon: !state.testCon}
    case "GET_DATA":
      return state
    default:
      return state
  }
}

var store = redux.createStore(data)
store.subscribe(function() {
  console.log(store.getState())
})
export default store;