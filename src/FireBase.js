import * as firebase from 'firebase';

// Initialize Firebase

const config = {
  apiKey: "AIzaSyAuHYPFvt9HKdwY8pwiqj8pqIK8P2d4joc",
  authDomain: "notesapp-1c663.firebaseapp.com",
  databaseURL: "https://notesapp-1c663.firebaseio.com",
  projectId: "notesapp-1c663",
  storageBucket: "notesapp-1c663.appspot.com",
  messagingSenderId: "892788777572"
}
firebase.initializeApp(config);

export const noteData = firebase.database().ref('NotesData');

// var data = firebase.database().ref('NotesData/note2');

// // GET data
// data.once('value').then((snap) => {
//   console.log(snap.val());
// }).catch( err => console.log(err));

// // // SET data
// // data.set({
// //     id: 2,
// //     title: 'Ghi chú 3',
// //     content: 'Đây là content 3'
// // }).then((value) => console.log(value))
// //   .catch(err => console.log(err)) 