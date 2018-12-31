import React, { Component } from 'react';

import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

class App extends Component {
  render() {
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
