// import noteData from './FireBase';
import { noteData } from "./FireBase";

const uuidv1 = require('uuid/v1');
var redux = require('redux');

const dataInitialState = {
  data: {}
}
const data = (state = dataInitialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      action.item.id = uuidv1(); // generate unich ID
      noteData.push(action.item)
      return state
    case "GET_DATA":
      var dataFirebase;
      noteData.once('value').then(function(snap) {
        dataFirebase = snap.val()
        return 
      }).catch(err => console.log(err))
      return {data: dataFirebase}
    default:
      return state
  }
}

var store = redux.createStore(data)
store.subscribe(function() {
  console.log(store.getState())
})
export default store;