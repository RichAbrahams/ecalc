import { put, takeEvery, call, all } from "redux-saga/effects";
import { SAVE_RECIPE, DELETE_SAVED_RECIPE, GET_SAVED_RECIPES, saveComplete, getSavedRecipesSuccess } from "../actions";

async function saveToLocalStorage(payload) {
  try {
    await localStorage.setItem('savedRecipes', JSON.stringify(payload));
    return true;
  } catch (e) {
    return false;
  }
}

async function loadFromLocalStorage() {
  try {
    const recipes = await localStorage.getItem('savedRecipes');
    return JSON.parse(recipes) || [];
  } catch (e) {
    return [];
  }
}

function* saveRecipe({ payload }) {
  const current = yield call(loadFromLocalStorage);
  current.push(payload);
  yield call(saveToLocalStorage, current);
  yield put(saveComplete(true));
}

function* deleteRecipe({ payload }) {
  const current = yield call(loadFromLocalStorage);
  const next = current.filter(item => item.id !== payload);
  yield call(saveToLocalStorage, next);
  yield put(getSavedRecipesSuccess(next));
}

function* getRecipes() {
  const recipes = yield call(loadFromLocalStorage);
  yield put(getSavedRecipesSuccess(recipes));
}

export default function *watchAll() {
yield all([
  takeEvery(SAVE_RECIPE, saveRecipe),
  takeEvery(DELETE_SAVED_RECIPE, deleteRecipe),
  takeEvery(GET_SAVED_RECIPES, getRecipes),
]);
}