import React, { Component } from 'react';
import { noteData } from "./FireBase";

import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

class App extends Component {
  render() {
    console.log(noteData.once('value').then(snap => console.log(snap.val())))
    // noteData.once('value')
    // .then((snap) => {
    //   console.log(snap.val())
    // }).catch(err => console.log(err));

    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <NoteList />
            <NoteForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
