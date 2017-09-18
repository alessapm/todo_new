import React, { Component } from 'react';

export default class MarkAllComplete extends Component {


  render(){
    return(
      <div className="mark-all bottom" onClick={this.props.markAll}>
        <p>Mark all as complete</p>
      </div>
    )
  }
}
