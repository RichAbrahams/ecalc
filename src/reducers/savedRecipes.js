import { GET_SAVED_RECIPES_SUCCESS } from "../actions";

const initialState = {
  recipes: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SAVED_RECIPES_SUCCESS: {
      return Object.assign({ ...state }, { recipes: action.payload });
    }
    default:
      return state;
  }
};
