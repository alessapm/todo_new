import React, { Component } from 'react';

export default class listItem extends Component {


  render(){
    if (this.props.highlight && this.props.completed) {
      return (
        <div className="list-item highlight-color" >
          <input type="hidden" value={this.props.id} />
          <div className="list-internal" >
            <div className="checkbox " onClick={this.props.markComplete}><i className="fa fa-check-square-o blue" aria-hidden="true"></i></div>
            <label className="completed">{this.props.item}</label>
          </div>
          <div className="delete-btn" onClick={this.props.deleteItem}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
        </div>
      )
    } else if (this.props.highlight) {
      return (
        <div className="list-item highlight-color" >
          <input type="hidden" value={this.props.id} />
          <div className="list-internal" >
            <div className="checkbox" onClick={this.props.markComplete}><i className="fa fa-square-o" aria-hidden="true"></i></div>
            <label>{this.props.item}</label>
          </div>
          <div className="delete-btn" onClick={this.props.deleteItem}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
        </div>
      )
    } else if (this.props.completed) {
      return (
        <div className="list-item">
          <input type="hidden" value={this.props.id} />
          <div className="list-internal" >
            <div className="checkbox " onClick={this.props.markComplete}><i className="fa fa-check-square-o blue" aria-hidden="true"></i></div>
            <label className="completed">{this.props.item}</label>
          </div>
          <div className="delete-btn" onClick={this.props.deleteItem}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
        </div>
      )
    } else {
      return (
        <div className="list-item">
          <input type="hidden" value={this.props.id} />
          <div className="list-internal">
            <div className="checkbox" onClick={this.props.markComplete}><i className="fa fa-square-o" aria-hidden="true"></i></div>
            <label>{this.props.item}</label>
          </div>
          <div className="delete-btn" onClick={this.props.deleteItem}><i className="fa fa-trash-o" aria-hidden="true"></i></div>
        </div>
      )
    }

  }

}
