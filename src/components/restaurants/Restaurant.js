import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  constructor(){
    super()

  this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.id
    })
  }

  render() {
    return (
      <li>

          {this.props.restaurant.text} <button onClick={this.handleOnClick}>Delete</button>
          <ReviewInput restaurant={this.props.restaurant} store={this.props.store} />
      </li>
    );
  }
};

export default Restaurant;
