import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ""
    }
  } // end constructor

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      payload: {
        review: this.state,
        restaurant: this.props.restaurant
      }
    })
  } // end handleSubmit

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review</label>
          <input type="text" onChange={this.handleChange} />
          <input type="submit"/>
        </form>
        <Reviews restaurantId={this.props.restaurant.id} store={this.props.store} />
      </div>
    );
  }
};

export default ReviewInput;
