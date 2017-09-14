import React, { Component } from 'react';

import AllListItems from './AllListItems'
import ItemCounter from './ItemCounter';
import MarkAllComplete from './MarkAllComplete'
import '../App.css';

export default class App extends Component {
  constructor(){
    super();
// maybe make todo_list an array of objects with completed boolean field
    this.state = {
      todo_list: [],
      action_item: '',
      num_count: 0
    }
 }

 componentWillMount(){
  // will do axios request to API here
  this.setState({
    num_count: this.state.todo_list.length
  })
 }

 addItem(event){
  event.preventDefault();
  // console.log('inside addItem')
  const updatedList = this.state.todo_list;
  const newActionItem ={item: this.state.action_item, completed: false}
  updatedList.push(newActionItem)

  document.getElementById("add-form").reset()

  this.setState({
    todo_list: updatedList,
    action_item: '',
    num_count: this.state.num_count + 1

  })
 }

 markComplete(event){
   console.log('insideMark complete')
   console.log('target: ', event.target.parentNode.nextSibling.innerHTML)
   const targetValue = event.target.parentNode.nextSibling.innerHTML
   this.state.todo_list.forEach((item, i) => {
    if (item.item === targetValue) {
      // if item.item === target, then reassign this.state.todo_list[i].completed = true
      const todo_copy = this.state.todo_list
      todo_copy[i].completed = true;
      this.setState({todo_list: todo_copy})
    }
   })
 }

 markAll(){
  const todo_arr = this.state.todo_list
  const completedArr = []
  todo_arr.forEach(obj => {
    obj.completed = true;
    completedArr.push(obj)
  })
  this.setState({
    todo_list: completedArr
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
          <form onSubmit={this.addItem.bind(this)} id="add-form">
            <input type="text" name="new-list-item" className='list-input' onChange={this.handleChange.bind(this)} placeholder="What needs to be done?" />
            <button type="submit" className='list-btn'>Add Todo</button>
          </form>
        </div>
        <AllListItems listItems={this.state.todo_list} markComplete={this.markComplete.bind(this)}/>
        <div className="bottom-details">
          <ItemCounter numCount={this.state.num_count} />
          <MarkAllComplete />
        </div>
      </div>
    </div>
    )
  }
}

