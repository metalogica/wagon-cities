import { SELECT_CITY } from '../actions/index.js';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SELECT_CITY:
      return action.payload;
    default:
      return state;
  }
}
