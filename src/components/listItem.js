import React, { Component } from 'react';


export default class listItem extends Component {


  render(){
    if (this.props.highlight && this.props.item.completed) {
      return (
        <div className="list-item highlight-color">
          <div className="list-internal" >
            <div className="checkbox" onClick={this.props.markComplete}><i className="fa fa-check-square-o" aria-hidden="true"></i></div>
            <label className="completed">{this.props.item.item}</label>
          </div>
        </div>
      )
    } else if (this.props.highlight) {
      return (
        <div className="list-item highlight-color">
          <div className="list-internal" >
            <div className="checkbox" onClick={this.props.markComplete}><i className="fa fa-square-o" aria-hidden="true"></i></div>
            <label>{this.props.item.item}</label>
          </div>
        </div>
      )
    } else if (this.props.item.completed) {
      return (
        <div className="list-item highlight-color">
          <div className="list-internal" >
            <div className="checkbox" onClick={this.props.markComplete}><i className="fa fa-check-square-o" aria-hidden="true"></i></div>
            <label className="completed">{this.props.item.item}</label>
          </div>
        </div>
      )
    } else {
      return (
        <div className="list-item">
          <div className="list-internal">
            <input type="checkbox" className="listItem" name="listItem" value="listItem" />
            <label>{this.props.item.item}</label>
          </div>
        </div>
      )
    }

  }


}
