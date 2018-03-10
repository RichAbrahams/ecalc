import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import PrintTab from "./components/RecipeResults/PrintTab";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import Loading from "./components/Loading";
import Loadable from "react-loadable";

const LoadableRecipeForm = Loadable({
  loader: () => import("./components/RecipeForm"),
  loading: Loading
});

const LoadableRecipeResults = Loadable({
  loader: () => import("./components/RecipeResults"),
  loading: Loading
});

const LoadableSavedRecipes = Loadable({
  loader: () => import("./components/SavedRecipes"),
  loading: Loading
});

const LoadableTerms = Loadable({
  loader: () => import("./components/Terms"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>E-Liquid Wizard</title>
          <meta
            name="description"
            content="Easy E-liquid calculations.  Create, save and print your recipe using our user-friendly wizard."
          />
          <meta
            name="keywords"
            content="E-liquid, E-Juice, eliquid, ejuice, calculator, save, print, e-cigarette"
          />
          <meta property="og:title" content="E-Liquid Wizard" />
        </Helmet>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path="/printrecipe" component={PrintTab} />
              <Route path="/">
                <Fragment>
                  <Banner />
                  <Route exact path="/" component={LoadableRecipeForm} />
                  <Route
                    path="/reciperesults"
                    component={LoadableRecipeResults}
                  />
                  <Route
                    path="/savedrecipes"
                    component={LoadableSavedRecipes}
                  />
                  <Route path="/terms" component={LoadableTerms} />
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

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>E-Liquid Wizard</title>
//           <meta name="description" content="Easy E-liquid calculations.  Create, save and print your recipe using our user-friendly wizard." />
//           <meta name="keywords" content="E-liquid, E-Juice, eliquid, ejuice, calculator, save, print, e-cigarette" />
//           <meta property="og:title" content="E-Liquid Wizard" />
//         </Helmet>
//         <BrowserRouter>
//           <Fragment>
//             <Switch>
//               <Route path="/printrecipe" component={ PrintTab } />
//               <Route path="/">
//                 <Fragment>
//                   <Banner />
//                   <Route exact path="/" component={ RecipeForm } />
//                   <Route path="/reciperesults" component={ RecipeResults } />
//                   <Route path="/savedrecipes" component={ SavedRecipes } />
//                   <Route path="/terms" component={ Terms } />
//                   <Footer />
//                 </Fragment>
//               </Route>
//             </Switch>
//           </Fragment>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

export default App;
