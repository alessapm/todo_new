import React, { Component } from 'react';
import ListItem from './listItem';

export default class AllListItems extends Component {

  render(){
    const listItems = this.props.listItems.map(item => {
      return <ListItem item={item} key={item} />
    });

    return (
      <div className="list-area">
        {listItems}
      </div>
    )

  }
}
