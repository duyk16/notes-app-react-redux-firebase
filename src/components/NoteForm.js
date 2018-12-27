import React, { Component } from 'react'

export default class NoteForm extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src="holder.js/100x180/" alt=""/>
          <div className="card-body">
            <h4 className="card-title">Adding new note</h4>
            <form method="post">
              <div className="form-group">
                <input type="text" className="form-control" name="title" placeholder="Title" />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="centent" rows={3} placeholder="Write something" defaultValue={""} />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">Add</button>
                <button type="submit" className="btn btn-secondary mx-1">Cancel</button>  
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
