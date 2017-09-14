import React, { Component } from 'react';


export default class listItem extends Component {


  render(){

    return (
      <div className="list-item">
        <div className="list-internal">
          <input type="checkbox" className="listItem" name="listItem" value="listItem" />
          <label>{this.props.item}</label>
        </div>
      </div>
    )
  }


}
