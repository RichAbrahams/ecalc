import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Advert from './components/Advert';
import Banner from './components/Banner';
import RecipeForm from './components/RecipeForm';
import RecipeResults from './components/RecipeResults';
import PrintTab from './components/RecipeResults/PrintTab';
import SavedRecipes from './components/SavedRecipes';
import Footer from './components/Footer';
import Terms from './components/Terms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path="/printrecipe" component={ PrintTab } />
              <Route path="/">
              <Fragment>
                <Advert />
                <Banner />
                <Route exact path="/" component={ RecipeForm } />
                <Route path="/reciperesults" component={ RecipeResults } />
                <Route path="/savedrecipes" component={ SavedRecipes } />
                <Route path="/terms" component={ Terms } />
                <Footer />
              </Fragment>
              </Route>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
