import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }; // end constructor

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      restaurant: this.state
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Restaurant</label>
          <input onChange={(event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
