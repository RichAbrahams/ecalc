import React, { Component, Fragment } from "react";
import RecipeForm from "../RecipeForm";
import RecipeResults from "../RecipeResults";
import SavedRecipes from "../SavedRecipes";
import Terms from "../Terms";
import { Route } from "react-router-dom";
import Loading from '../Loading';
import Loadable from 'react-loadable';

const LoadableRecipeForm = Loadable({
  loader: () => import('../RecipeForm'),
  loading: Loading,
});

const LoadableRecipeResults = Loadable({
  loader: () => import('../RecipeResults'),
  loading: Loading,
});

const LoadableSavedRecipes = Loadable({
  loader: () => import('../SavedRecipes'),
  loading: Loading,
});

const LoadableTerms = Loadable({
  loader: () => import('../Terms'),
  loading: Loading,
});

export default class Loadables extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={LoadableRecipeForm} />
        <Route path="/reciperesults" component={LoadableRecipeResults} />
        <Route path="/savedrecipes" component={LoadableSavedRecipes} />
        <Route path="/terms" component={LoadableTerms} />
      </Fragment>
    );
  }
}
