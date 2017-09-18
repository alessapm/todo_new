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
  Axios.get('http://localhost:5000/')
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

  Axios.post(`http://localhost:5000/new?item=${this.state.action_item}`)
  .then(() => {
    this.getList();
    document.getElementById("add-form").reset()
  })
 }

 update(){
  console.log('action_id: ', this.state.action_id)
  Axios.put(`http://localhost:5000/comp/${this.state.action_id}`)
  .then(() => {
    this.getList()
  })
 }

 markComplete(event){
   const targetValue = event.target.parentNode.nextSibling.innerHTML
   this.state.todo_list.forEach((item, i) => {
    if (item.item === targetValue) {
      const todo_copy = [...this.state.todo_list]
      const itemId = todo_copy[i].id
      this.setState({action_id: itemId}, this.update)
    }
   })
 }

 markAll(){
  // const todo_arr = [...this.state.todo_list]
  // const completedArr = []

  // this.state.todo_list.forEach(obj => {
    // console.log('obj.id: ', obj.id)
    // this.setState({action_id: obj.id}, this.update)
    Axios.put(`http://localhost:5000/comp/all`)
    .then((res) => {
      console.log(res)
      this.getList()
    })
  // })


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
        <AllListItems listItems={this.state.todo_list} markComplete={this.markComplete.bind(this)} />
        <div className="bottom-details">
          <ItemCounter numCount={this.state.num_count} />
          <MarkAllComplete markAll={this.markAll.bind(this)} />
        </div>
      </div>
    </div>
    )
  }
}

