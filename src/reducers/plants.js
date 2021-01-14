import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (plants = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return plants.map((plant) => (plant._id === action.payload._id ? action.payload : plant));
    case CREATE:
      return [...plants, action.payload];
    case UPDATE:
      return plants.map((plant) => (plant._id === action.payload._id ? action.payload : plant));
    case DELETE:
      return plants.filter((plant) => plant._id !== action.payload);
    default:
      return plants;
  }
};