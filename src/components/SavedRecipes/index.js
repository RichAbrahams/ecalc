import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../../actions";
import { Label } from "semantic-ui-react";
import MainWrapper from '../MainWrapper';

export class SavedRecipes extends Component {

  componentWillMount () {
    this.props.getSavedRecipes();
  }

  render() {
    return (
      <MainWrapper>
        {this.props.savedRecipes.map(recipe => {
          return (
            <div key={recipe.id}>
              <span>{recipe.id}</span>
              <span>{recipe.name}</span>
              <Label circular color="orange" content="X" onClick={() => this.props.deleteSavedRecipe(recipe.id)}/>
            </div>
          );
        })}
      </MainWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  savedRecipes: state.savedRecipes.recipes,
})

const mapDispatchToProps = dispatch => ({
  getSavedRecipes: payload => dispatch(actions.getSavedRecipes()),
  deleteSavedRecipe: payload => dispatch(actions.deleteSavedRecipe(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipes)
