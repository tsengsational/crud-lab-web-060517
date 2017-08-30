import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter((review)=>{return review.restaurantId === this.props.restaurantId}).map((review)=>{return <Review key={review.id} review={review} store={this.props.store} />})
    console.log(reviews)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
