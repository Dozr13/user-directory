import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import data from './Components/data'
import Card from './Components/Card'
import Edit from './Components/Edit'
import Nav from './Components/Nav'


export default class App extends Component {
  constructor() {
    super()


    this.state = { 
      users: data,
      index: 0,
      notVisible: true,
      newUser: false,
      id: 25
    }

    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.new = this.new.bind(this)
    this.edit = this.edit.bind(this)
    this.editUser = this.editUser.bind(this)
    this.delete = this.delete.bind(this)
  }

  previous() {
    let newInd = this.state.index - 1
    if( newInd < 0 ) {
    this.setState({
      index: this.state.users.length - 1
    })
  } else {
    this.setState({
      index: newInd
    })
  }
  }

  next() {
    let newInd = this.state.index + 1
    if( this.state.index + 1 >= this.state.users.length) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: newInd
      })
    }
  }

  new() {
    this.setState({ notVisible: !this.state.notVisible, newUser: true })
  }

  edit() {
    this.setState({ notVisible: !this.state.notVisible, newUser: false })
  }

  editUser(user) {
    console.log(user)
    let newIndex = this.state.users.findIndex(u => u.id === user.id)
    if(newIndex === -1) {
      this.setState({
        users: [...this.state.users, user], id: this.state.id + 1, notVisible: true
      })
    } else {
      let newUsersArr = this.state.users.slice()
      newUsersArr.splice(newIndex, 1, user)
      this.setState({
        users: newUsersArr, notVisible: true
      })
    }
  }

  delete() {
    let toast = this.state.users.slice()
    toast.splice(this.state.index, 1)
    let newIndex = this.state.index - 1
    if( newIndex < 0 ){
      newIndex = 0
    }
    this.setState({
      users: toast,
      index: 0
    })
  }


  
  render() {
    return (
      <div className="App">
        <header className="home-bar"><label>Home</label></header>
      
        <div className="container">
          <div>
            <Card user={ this.state.users[ this.state.index ]} cards={ this.state.users.length } />
          </div>

          <div className="change-btn">
            <Nav previous={ this.previous } next={ this.next } />
          </div>
          

          <div id="mod-btns">
            <button className="edit-btn" onClick={ this.edit }>Edit</button>
            <button className="delete-btn" onClick={ this.delete }>Delete</ button>
            <button className="new-btn" onClick={ this.new }>New</button>
          </div>

          { !this.state.notVisible && <Edit user={ this.state.users[ this.state.index ] }  edit={ this.editUser } newUser={ this.state.newUser } id={ this.state.id }  /> }
 


        </div>

      </div>
    );
  }
}
