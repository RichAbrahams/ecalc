import { SET_PAGE, SUBMIT_FORM, SAVE_COMPLETE } from '../actions';
import calcRecipeResult from '../components/utils/calcRecipeResult';

const initialState = {
  currentPage: 1,
  recipe: null,
  saved: null,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE: {
      return Object.assign({...state}, { currentPage: action.payload })
    }
    case SUBMIT_FORM: {
      return Object.assign({...state}, { currentPage: 1, recipe: calcRecipeResult(action.payload), saved: null });
    }
    case SAVE_COMPLETE: {
      return Object.assign({...state}, { saved: action.payload });
    }
    default:
      return state;
  }
};