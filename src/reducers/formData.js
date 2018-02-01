import { SET_PAGE, SUBMIT_FORM, SAVE_COMPLETE, VIEW_RECIPE } from '../actions';
import calcRecipeResult from '../components/utils/calcRecipeResult';

const initialState = {
  currentPage: 1,
  recipe: null,
  showSavedButton: true,
  showSavedMessage: false,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE: {
      return Object.assign({...state}, { currentPage: action.payload })
    }
    case SUBMIT_FORM: {
      console.log(action.payload);
      return Object.assign({...state}, { currentPage: 1, recipe: calcRecipeResult(action.payload), showSavedButton: true, showSavedMessage: false });
    }
    case SAVE_COMPLETE: {
      return Object.assign({...state}, { showSavedMessage: true, showSavedButton: false });
    }
    case VIEW_RECIPE: {
      return Object.assign({...state}, { recipe: action.payload, showSavedMessage: false, showSavedButton: false });
    }
    default:
      return state;
  }
};