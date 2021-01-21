import React, { Component } from 'react'

export default class Edit extends Component {
  constructor(props) {
    super(props)

    if(props.newUser){
      this.state = {
      id: props.id + 1,
      name: {first: '', last: ''},
      city: '',
      country: '',
      employer: '',
      title: '',
      favoriteMovies: []
      }
    } else {
    this.state = {
      id: props.user.id,
      name: {first: props.user.name.first, last: props.user.name.last},
      city: props.user.city,
      country: props.user.country,
      employer: props.user.employer,
      title: props.user.title,
      favoriteMovies: props.user.favoriteMovies
    }
  }

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  changeFirst(value) {
    this.setState({
      name: {...this.state.name, first: value}
    })
  }

  changeLast(value) {
    this.setState({
      name: {...this.state.name, last: value}
    })
  }

  changeCity(value) {
    this.setState({
      city: value
    })
  }

  changeCountry(value) {
    this.setState({
      country: value
    })
  }

  changeTitle(value) {
    this.setState({
      title: value
    })
  }

  changeEmployer(value) {
    this.setState({
      employer: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.edit( this.state )
  }




render() {
  return (

      <div className="pos">
        <div>

          <form className="form-container">
            <h1 className="center">User Input Form</h1>
            <label>
              First Name: 
              <input type="text" onChange={ (e) => this.changeFirst(e.target.value) } value={ this.state.name.first } />
            </label>
            
            <label>
              Last Name:
              <input type="text" onChange={ (e) => this.changeLast(e.target.value) } value={ this.state.name.last }/>
            </label>

            <label>
              City: 
              <input type="text" onChange={ (e) => this.changeCity(e.target.value) } value={ this.state.city } />
            </label>

            <label>
              Country: 
              <input type="text" onChange={ (e) => this.changeCountry(e.target.value) } value={ this.state.country } />
            </label>

            <label>
              Employer:
              <input type="text" onChange={ (e) => this.changeEmployer(e.target.value) } value={ this.state.employer } />
            </label>

            <label>
              Title:
              <input type="text" onChange={ (e) => this.changeTitle(e.target.value) } value={ this.state.title } />
            </label>

            <button type="submit" value="Submit" onClick={ this.handleSubmit }>Submit User</button>
          </form>
        </div>
      </div>
    )
  }

}