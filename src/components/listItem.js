import React, { Component } from 'react';


export default class listItem extends Component {


  render(){
    if (this.props.highlight && this.props.completed) {
      return (
        <div className="list-item highlight-color">
          <div className="list-internal" >
            <div className="checkbox " onClick={this.props.markComplete}><i className="fa fa-check-square-o blue" aria-hidden="true"></i></div>
            <label className="completed">{this.props.item}</label>
          </div>
        </div>
      )
    } else if (this.props.highlight) {
      return (
        <div className="list-item highlight-color">
          <div className="list-internal" >
            <div className="checkbox" onClick={this.props.markComplete}><i className="fa fa-square-o" aria-hidden="true"></i></div>
            <label>{this.props.item}</label>
          </div>
        </div>
      )
    } else if (this.props.completed) {
      return (
        <div className="list-item">
          <div className="list-internal" >
            <div className="checkbox " onClick={this.props.markComplete}><i className="fa fa-check-square-o blue" aria-hidden="true"></i></div>
            <label className="completed">{this.props.item}</label>
          </div>
        </div>
      )
    } else {
      return (
        <div className="list-item">
          <div className="list-internal" >
            <div className="checkbox" onClick={this.props.markComplete}><i className="fa fa-square-o" aria-hidden="true"></i></div>
            <label>{this.props.item}</label>
          </div>
        </div>
      )
    }

  }


}
