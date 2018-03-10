export const SET_PAGE = 'SET_PAGE';
export const SUBMIT_FORM1 = 'SUBMIT_FORM1';
export const SUBMIT_FORM2 = 'SUBMIT_FORM2';
export const SUBMIT_FORM3 = 'SUBMIT_FORM3';
export const SUBMIT_FORM4 = 'SUBMIT_FORM4';
export const SUBMIT_FORM5 = 'SUBMIT_FORM5';
export const SUBMIT_FORM6 = 'SUBMIT_FORM6';
export const SAVE_RECIPE = 'SAVE_RECIPE';
export const SAVE_COMPLETE = 'SAVE_COMPLETE';
export const GET_SAVED_RECIPES = "GET_SAVED_RECIPES";
export const DELETE_SAVED_RECIPE = "DELETE_SAVED_RECIPE";
export const GET_SAVED_RECIPES_SUCCESS = "GET_SAVED_RECIPES_SUCCESS";
export const VIEW_RECIPE = "VIEW_RECIPE";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const RESET_RECIPE_STATE = 'RESET_RECIPE_STATE';


export const setPage = (payload) => ({
  type: SET_PAGE,
  payload
});

export const submitForm1 = (payload) => ({
  type: SUBMIT_FORM1,
  payload
});

export const submitForm2 = (payload) => ({
  type: SUBMIT_FORM2,
  payload
});

export const submitForm3 = (payload) => ({
  type: SUBMIT_FORM3,
  payload
});

export const submitForm4 = (payload) => ({
  type: SUBMIT_FORM4,
  payload
});

export const submitForm5 = (payload) => ({
  type: SUBMIT_FORM5,
  payload
});

export const submitForm6 = (payload) => ({
  type: SUBMIT_FORM6,
  payload
});

export const saveRecipe = (payload) => ({
  type: SAVE_RECIPE,
  payload
});

export const saveComplete = (payload) => ({
  type: SAVE_COMPLETE,
  payload: payload
});

export const getSavedRecipes = () => ({
  type: GET_SAVED_RECIPES
});

export const deleteSavedRecipe = (payload) => ({
  type: DELETE_SAVED_RECIPE,
  payload
});

export const getSavedRecipesSuccess = (payload) => ({
  type: GET_SAVED_RECIPES_SUCCESS,
  payload
});

export const viewRecipe = (payload) => ({
  type: VIEW_RECIPE,
  payload
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const resetRecipeState = () => ({
  type: RESET_RECIPE_STATE,
});
