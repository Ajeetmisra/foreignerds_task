import {ADD_ITEM} from './action.type';
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
