import { SET_PAGE, SUBMIT_FORM, SAVE_COMPLETE, VIEW_RECIPE, TOGGLE_MODAL } from '../actions';
import calcRecipeResult from '../components/utils/calcRecipeResult';

const initialState = {
  currentPage: 1,
  recipe: null,
  showSavedButton: true,
  showSavedMessage: false,
  showSavedModal: false,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE: {
      return Object.assign({...state}, { currentPage: action.payload })
    }
    case SUBMIT_FORM: {
      return Object.assign({...state}, { currentPage: 1, recipe: calcRecipeResult(action.payload), showSavedButton: true, showSavedMessage: false });
    }
    case SAVE_COMPLETE: {
      return Object.assign({...state}, { showSavedMessage: true, showSavedButton: false, showSavedModal: false });
    }
    case VIEW_RECIPE: {
      return Object.assign({...state}, { recipe: action.payload, showSavedMessage: false, showSavedButton: false });
    }
    case TOGGLE_MODAL: {
      return Object.assign({...state}, { showSavedModal: !state.showSavedModal });
    }
    default:
      return state;
  }
};