import React, { Component } from 'react'
import App from '../App'

export default class Card extends Component {
  constructor() {
    super()

    this.state = {
      id: 0,
      name: {},
      city: '',
      country: '',
      employer: '',
      title: '',
      favoriteMovies: []
    }
  }

  editName(first, last) {

  }

  editCity(val) {
    this.setState({
      city: val
    })
  }

  editCountry(val) {
    this.setState({
      country: val
    })
  }

  editEmployer(val) {
    this.setState({
      employer: val
    })
  }

  editTitle(val) {
    this.setState({
      title: val
    })
  }

  editMovies(val) {
    this.setState({
      favoriteMovies: val
    })
  }

  addMovie(val) {
    this.setState({
      favoriteMovies: [...this.state.favoriteMovies, val]
    })
  }

  deleteMovie(id) {
  let list = this.state.favoriteMovies.splice(this.state.favoriteMovies.findIndex(m => m === id), 1)    
  }

  render() {
    let movies = this.props.user.favoriteMovies.map((m, i) => <li key={ i } > { m }</li>)

    return (
      <div className="card">

        <div id="leftSide">
          <h1 className="underline">{ this.props.user.name.first } { this.props.user.name.last }</h1>
          <ul>
            <li><h3>From: </h3> { this.props.user.city }, { this.props.user.country }</li>
            <li><h3>Job Title: </h3>{ this.props.user.title }</li>
            <li><h3>Employer: </h3>{ this.props.user.employer }</li>
          </ul>


          <ol>
            <h3>Favorite Movies: </h3>
            { movies }
          </ol>
        </div>
      
        <div id="rightSide">
          <h1>{ this.props.user.id } / { this.props.cards }</h1>
        </div>

      </div>
    )
  }
}

