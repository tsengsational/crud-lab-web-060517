import React, { Component } from 'react';

class Review extends Component {
  handleOnClick = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id
    })
  }

  render() {
    return (
      <li>
        {this.props.review.text} <button onClick={this.handleOnClick}>Delete</button>
      </li>
    );
  }
};

export default Review;
