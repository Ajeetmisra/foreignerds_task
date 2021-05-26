import {ADD_ITEM} from '../action/action.type';
const initialstate = [];

export default (state = initialstate, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];

    default:
      return state;
  }
};
