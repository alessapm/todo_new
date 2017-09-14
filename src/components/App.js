import React, { Component } from 'react';

import AllListItems from './AllListItems'
import ItemCounter from './ItemCounter';
import MarkAllComplete from './MarkAllComplete'
import '../App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      todo_list: ['do laundry', 'go to gym', 'struggle with life choices'],
      completed_items: [],
      action_item: '',
      num_count: 0
    }
 }

 componentWillMount(){
  this.setState({
    num_count: this.state.todo_list.length
  })
 }

 addItem(event){
  event.preventDefault();
  console.log('inside addItem')
  const updatedList = this.state.todo_list;
  updatedList.push(this.state.action_item)

  this.setState({
    todo_list: updatedList,
    action_item: '',
    num_count: this.state.todo_list.length

  })
 }

 markComplete(){
   // can add class to change render
 }

 markAll(){
  this.setState({
    todo_list: []
  })
 }

handleChange(event){

  this.setState({action_item: event.target.value})
}

  render() {
    return (
    <div id="container">
      <div id="todo-list">
        <div className="header">
          <h1>Todos</h1>
        </div>
        <div className="search-area">
          <form onSubmit={this.addItem.bind(this)}>
            <input type="text" name="new-list-item" className='list-input' onChange={this.handleChange.bind(this)} placeholder="What needs to be done?" />
            <button type="submit" className='list-btn'>Add Todo</button>
          </form>
        </div>
        <AllListItems listItems={this.state.todo_list}/>
        <div className="bottom-details">
          <ItemCounter numCount={this.state.num_count} />
          <MarkAllComplete />
        </div>
      </div>
    </div>
    )
  }
}

