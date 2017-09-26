import React, { Component } from 'react';

import AllListItems from './AllListItems'
import ItemCounter from './ItemCounter';
import MarkAllComplete from './MarkAllComplete'
import '../App.css';
import Axios from 'axios';

export default class App extends Component {
  constructor(){
    super();
// maybe make todo_list an array of objects with completed boolean field
    this.state = {
      todo_list: [],
      action_item: '',
      num_count: 0,
      action_id: ''
    }
 }

 updateCount(){
  let pendingCount = 0
  this.state.todo_list.forEach((item) => {
    if (!item.completed){
      pendingCount++
    }
  })

  this.setState({num_count: pendingCount})
 }

 getList(){
  Axios.get('http://localhost:5000/todo')
  .then((response) => {
    console.log('response: ', response)
    this.setState({
      todo_list: response.data,
    }, this.updateCount)
  })
 }

 componentWillMount(){
  this.getList()
 }

 addItem(event){
  event.preventDefault();

  Axios.post(`http://localhost:5000/todo/new?item=${this.state.action_item}`)
  .then(() => {
    this.getList();
    document.getElementById("add-form").reset()
  })
 }

 markAll(){
    Axios.put(`http://localhost:5000/todo/complete/all`)
    .then((res) => {
      console.log(res)
      this.getList()
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
        <AllListItems listItems={this.state.todo_list}
          getList={this.getList.bind(this)} />
        <div className="bottom-details">
          <ItemCounter numCount={this.state.num_count} />
          <MarkAllComplete markAll={this.markAll.bind(this)} />
        </div>
      </div>
    </div>
    )
  }
}

