import React, { Component } from 'react'
import Edit from './Edit'
import App from '../App'

export default class Nav extends Component {
  constructor() {
    super()


  }


  render() {
    return (
      <div className="change-btn">
        <button className="last-btn" onClick={ this.props.previous }>{`< Previous`}</button>
        <button className="next-btn" onClick={ this.props.next }>{` Next >`}</button>
      </div>
    )
  }
}