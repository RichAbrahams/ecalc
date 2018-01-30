import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import formData from './formData';
import savedRecipes from './savedRecipes'
const rootReducer = combineReducers({
  form: formReducer,
  formData,
  savedRecipes,
});

export default rootReducer;