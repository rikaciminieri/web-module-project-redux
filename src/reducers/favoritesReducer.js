import {
  TOGGLE_FAVORITES,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from "../actions/favoritesActions";

import data from '../data';

const initialState = {
  favorites: data,
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
          ...state,
          displayFavorites: !action.payload
      };
    case ADD_FAVORITES:
      return {};
    case REMOVE_FAVORITES:
      return {};
    default:
      return state;
  }
};

export default reducer;
