export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const toggleFavorites = (favorites) => {
  return { type: TOGGLE_FAVORITES, payload: favorites };
};
