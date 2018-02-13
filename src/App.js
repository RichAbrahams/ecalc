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
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>E-Liquid Wizard</title>
          <meta name="description" content="Easy E-liquid calculations.  Create, save and print your recipe using our user-friendly wizard." />
          <meta name="keywords" content="E-liquid, E-Juice, eliquid, ejuice, calculator, save, print, e-cigarette" />
          <meta property="og:title" content="E-Liquid Wizard" />
        </Helmet>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path="/printrecipe" component={ PrintTab } />
              <Route path="/">
                <Fragment>
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