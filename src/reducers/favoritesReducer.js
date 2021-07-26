import {
  TOGGLE_FAVORITES,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from "../actions/favoritesActions";

import data from "../data";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !action.payload,
      };
    case ADD_FAVORITES:
      if (!state.favorites.find((movie) => movie.id === action.payload.id)) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return state;

    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
