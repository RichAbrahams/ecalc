export const SET_PAGE = 'SET_PAGE';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SAVE_RECIPE = 'SAVE_RECIPE';
export const SAVE_COMPLETE = 'SAVE_COMPLETE';
export const GET_SAVED_RECIPES = "GET_SAVED_RECIPES";
export const DELETE_SAVED_RECIPE = "DELETE_SAVED_RECIPE";
export const GET_SAVED_RECIPES_SUCCESS = "GET_SAVED_RECIPES_SUCCESS";
export const VIEW_RECIPE = "VIEW_RECIPE";

export const setPage = (payload) => ({
  type: SET_PAGE,
  payload
});

export const submitForm = (payload) => ({
  type: SUBMIT_FORM,
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