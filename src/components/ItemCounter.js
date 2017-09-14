import React, { Component } from 'react';

export default class ItemCounter extends Component {


  render(){
    return(
      <div className='item-counter bottom'>
        <p>{this.props.numCount} items left</p>
      </div>
    )
  }

}
