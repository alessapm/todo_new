import React, { Component } from 'react';
import Axios from 'axios';

export default class listItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.id
    }

    this.deleteItem = this.deleteItem.bind(this);
    this.update = this.update.bind(this);
  }


  deleteItem(){
    Axios.delete(`http://localhost:5000/todo/destroy/${this.state.id}`)
      .then((res) => {
        console.log(res)
        this.props.getList()
      })
    }

  update(){
    Axios.put(`http://localhost:5000/todo/complete/${this.state.id}`)
    .then(() => {
      this.props.getList()
    })
   }

  render(){

    if (this.props.highlight && this.props.completed) {
      return (
        <div className="list-item highlight-color" >
          <div className="list-internal" >
            <div className="checkbox " onClick={this.update}><i className="fa fa-check-square-o blue" aria-hidden="true"></i></div>
            <label className="completed">{this.props.item}</label>
          </div>
          <div className="delete-btn" onClick={this.deleteItem}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
        </div>
      )
    } else if (this.props.highlight) {
      return (
        <div className="list-item highlight-color" >
          <div className="list-internal" >
            <div className="checkbox" onClick={this.update}><i className="fa fa-square-o" aria-hidden="true"></i></div>
            <label>{this.props.item}</label>
          </div>
          <div className="delete-btn" onClick={this.deleteItem}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
        </div>
      )
    } else if (this.props.completed) {
      return (
        <div className="list-item">
          <div className="list-internal" >
            <div className="checkbox " onClick={this.update}><i className="fa fa-check-square-o blue" aria-hidden="true"></i></div>
            <label className="completed">{this.props.item}</label>
          </div>
          <div className="delete-btn" onClick={this.deleteItem}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
        </div>
      )
    } else {
      return (
        <div className="list-item">
          <div className="list-internal">
            <div className="checkbox" onClick={this.update}><i className="fa fa-square-o" aria-hidden="true"></i></div>
            <label>{this.props.item}</label>
          </div>
          <div className="delete-btn" onClick={this.deleteItem}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
        </div>
      )
    }
  }
}
