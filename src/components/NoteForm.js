import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoteForm extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src="holder.js/100x180/" alt=""/>
          <div className="card-body">
            <h4 className="card-title">Adding new note</h4>
            <div className="form-group">
              <input type="text" 
                className="form-control" name="title" placeholder="Title" 
                
              />
            </div>
            <div className="form-group">
              <textarea 
                className="form-control" name="centent" rows={3} placeholder="Write something" 
                
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" onClick={this.props.testFunc}>Add</button>
              <button className="btn btn-secondary mx-1">Cancel</button>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testCon
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    testFunc: () => {
      dispatch({type: "ADD_DATA"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)