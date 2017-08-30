
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [], reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      let id = cuid();
      const restaurant = {...action.restaurant, id: id};
      return {...state, restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      state.restaurants = restaurants
      return {...state, restaurants }
    case 'ADD_REVIEW':
      let reviewID = cuid();
      const review = {...action.payload.review, id: reviewID, restaurantId: action.payload.restaurant.id}
      return {...state, reviews: state.reviews.concat(review)}
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      state.reviews = reviews
      return {...state, reviews }
    default:
      return state;
  }
}
