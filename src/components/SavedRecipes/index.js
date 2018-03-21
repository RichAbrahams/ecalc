import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../../actions";
import { Label } from "semantic-ui-react";
import MainWrapper from '../MainWrapper';
import { Table, Header, Message } from "semantic-ui-react";
import styled from 'styled-components';

const TableRow = styled(Table.Row)`
  & :hover {
    cursor: pointer;
  }
`;

const info = () => {
  return (
  <Message info style={{ width: '100%', textAlign:"center"}}>
      <p>{`You have no saved recipes`}</p>
  </Message>
  )
};

export class SavedRecipes extends Component {

  componentWillMount() {
    this.props.getSavedRecipes();
  }

  formatTime = (time) => {
    let newTime = time;
    if (time.length < 2) {
      newTime = toString(time);
      newTime = "0" + newTime;
    }
    return newTime
  }

  timeConverter = (timestamp) => {
    const a = new Date(timestamp);
    const year = a.getFullYear();
    const month = (a.getMonth() + 1) < 10 ? "0" + (a.getMonth() + 1) : a.getHours() + 1;
    const date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();
    const hour = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
    const min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
    const sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
    const time = `${date}/${month}/${year}, ${hour}:${min}:${sec}`
    return time;
  }

  rowClicked = (recipe) => {
    this.props.viewRecipe(recipe);
    this.props.history.push('/reciperesults')
  }

  render() {
    const savedRecipes = this.props.savedRecipes;
    return (
      <MainWrapper>
          <Header as='h2'style={{ marginTop: '1em'}} >Saved Recipes</Header>
        { (savedRecipes.length > 0) &&
        <Table celled unstackable={ true } selectable style={ { maxWidth: '700px' } }>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Recipe Name</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.props.savedRecipes.map((recipe) => {
              return (
                <TableRow key={ recipe.id }>
                  <Table.Cell  onClick={() => this.rowClicked(recipe) }>{ recipe.name }</Table.Cell>
                  <Table.Cell  onClick={() => this.rowClicked(recipe) }>{ this.timeConverter(recipe.id) }</Table.Cell>
                  <Table.Cell textAlign="center"><Label circular color="orange" content="X" onClick={ (e) => {
                    e.stopPropagation();
                    this.props.deleteSavedRecipe(recipe.id)
                  }

                  } /></Table.Cell>
                </TableRow>
              )
            }) }
          </Table.Body>
        </Table>}
        { savedRecipes.length === 0 && info()}
      </MainWrapper>
    )
  }
}


// {this.props.savedRecipes.map(recipe => {
//   return (
//     <div key={recipe.id}>
//       <span>{recipe.id}</span>
//       <span>{recipe.name}</span>
//       <Label circular color="orange" content="X" onClick={() => this.props.deleteSavedRecipe(recipe.id)}/>
//     </div>
//   );
// })}

const mapStateToProps = (state) => ({
  savedRecipes: state.savedRecipes.recipes,
})

const mapDispatchToProps = dispatch => ({
  getSavedRecipes: payload => dispatch(actions.getSavedRecipes()),
  deleteSavedRecipe: payload => dispatch(actions.deleteSavedRecipe(payload)),
  viewRecipe: payload => dispatch(actions.viewRecipe(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipes)
