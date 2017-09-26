import React, { Component } from 'react';
import ListItem from './listItem';

export default class AllListItems extends Component {

  render(){
    const listItems = this.props.listItems.map(item => {
      const highlight = this.props.listItems.indexOf(item) % 2 === 0 ? true : false;

      return <ListItem item={item.item} key={item.id} id={item.id} highlight={highlight}
        markComplete={this.props.markComplete} completed={item.completed}
         deleteItem={this.props.deleteItem}/>
    });

    return (
      <div className="list-area">
        {listItems}
      </div>
    )

  }
}
