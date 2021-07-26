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
      if (
        !JSON.stringify(state.favorites).includes(
          JSON.stringify(action.payload)
        )
      ) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      } else {
        return { state };
      }

    case REMOVE_FAVORITES:
      return {};
    default:
      return state;
  }
};

export default reducer;
