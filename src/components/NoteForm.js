import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoteForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      title: '',
      content: ''
    }
    this.onChange = this.onChange.bind(this)
    this.addData = this.addData.bind(this)
    this.clearInput = this.clearInput.bind(this)
    
  }
  onChange(e){
    var name = e.target.name;
    var value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  addData() {
    var {title, content} = this.state;
    var error = []
    if (!title) {
      error.push('Title')
      if (!content ) {
        error.push('Content')
      }
    } else {
      this.props.addDataStore({title, content})
    }
    this.setState({
      error: error
    })
  }
  clearInput() {
    this.setState({
      title: '',
      content: ''
    })
  }
  getData() {
    this.props.getDateStore();

  }
  render() {
    console.log(this.props.data)
    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src="holder.js/100x180/" alt=""/>
          <div className="card-body">
            <h4 className="card-title">Create note</h4>
            {this.state.error && this.state.error.map((item, key) => (
            <div className="alert alert-danger" role="alert" key={key}>
              Please input {item}
            </div>
            ))
            }
            
            <div className="form-group">
              <input type="text" 
                className="form-control" name="title" placeholder="Title" 
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div className="form-group">
              <textarea 
                className="form-control" name="content" rows={3} placeholder="Write something" 
                onChange={this.onChange}
                value={this.state.content}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" onClick={this.props.getDateStore}>Get</button>
              <button className="btn btn-primary" onClick={this.addData}>Add</button>
              <button className="btn btn-secondary mx-1" onClick={this.clearInput}>Clear</button>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (item) => {
      dispatch({type: "ADD_DATA", item})
    },
    getDateStore: () => {
      dispatch({type: "GET_DATA"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)