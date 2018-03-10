import {
  SET_PAGE,
  SUBMIT_FORM1,
  SUBMIT_FORM2,
  SUBMIT_FORM3,
  SUBMIT_FORM4,
  SUBMIT_FORM5,
  SUBMIT_FORM6,
  SAVE_COMPLETE,
  VIEW_RECIPE,
  TOGGLE_MODAL,
  RESET_RECIPE_STATE
} from "../actions";
import calcRecipeResult from "../components/utils/calcRecipeResult";

const initialState = {
  currentPage: 1,
  recipe: null,
  showSavedButton: true,
  showSavedMessage: false,
  showSavedModal: false,
  batchSize: "",
  targetStrength: 18,
  baseStrength: 0,
  nicotineBaseLiquid: "PG",
  flavours: [],
  pgRatio: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE: {
      return Object.assign({ ...state }, { currentPage: action.payload });
    }
    case SUBMIT_FORM1: {
      return Object.assign(
        { ...state },
        { currentPage: 2, batchSize: action.payload.batchSize }
      );
    }
    case SUBMIT_FORM2: {
      const { targetStrength } = action.payload;
      const nextPage = targetStrength > 0 ? 3 : 5;
      return Object.assign(
        { ...state },
        { currentPage: nextPage, targetStrength }
      );
    }
    case SUBMIT_FORM3: {
      return Object.assign(
        { ...state },
        { currentPage: 4, baseStrength: action.payload.baseStrength }
      );
    }
    case SUBMIT_FORM4: {
      return Object.assign(
        { ...state },
        {
          currentPage: 5,
          nicotineBaseLiquid: action.payload.nicotineBaseLiquid
        }
      );
    }
    case SUBMIT_FORM5: {
      return Object.assign(
        { ...state },
        { currentPage: 6, flavours: action.payload.flavours }
      );
    }
    case SUBMIT_FORM6: {
      const {
        baseStrength,
        batchSize,
        flavours,
        nicotineBaseLiquid,
        targetStrength
      } = state;

      const recipe = {
        baseStrength,
        batchSize,
        flavours,
        nicotineBaseLiquid,
        pgVgRatio: action.payload.pgVgRatio,
        targetStrength
      };

      return Object.assign(
        { ...state },
        {
          currentPage: 2,
          recipe: calcRecipeResult(recipe),
          showSavedButton: true,
          showSavedMessage: false
        }
      );
    }
    case SAVE_COMPLETE: {
      return Object.assign(
        { ...state },
        {
          showSavedMessage: true,
          showSavedButton: false,
          showSavedModal: false
        }
      );
    }
    case VIEW_RECIPE: {
      return Object.assign(
        { ...state },
        {
          recipe: action.payload,
          showSavedMessage: false,
          showSavedButton: false
        }
      );
    }
    case TOGGLE_MODAL: {
      return Object.assign(
        { ...state },
        { showSavedModal: !state.showSavedModal }
      );
    }
    case RESET_RECIPE_STATE: {
      return Object.assign(
        { ...state },
        {
          currentPage: 1,
          batchSize: "",
          targetStrength: 18,
          baseStrength: 0,
          nicotineBaseLiquid: "PG",
          flavours: [],
          pgRatio: null
        }
      );
    }
    default:
      return state;
  }
};
