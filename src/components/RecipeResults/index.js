import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Table, Header, Message, Icon } from "semantic-ui-react";
import SaveModal from './SaveModal';
import * as actions from "../../actions";
import NewRecipeButton from './NewRecipeButton';
import PrintButton from './PrintButton';
import MainWrapper from '../MainWrapper';
import jsPDF from 'jspdf';
import flatten from 'flatten';
import styled from 'styled-components';
import SaveButton from './SaveButton';
require('jspdf-autotable');

const ButtonWrapper = styled.div`
  display: flex;
  max-width: 700px;
  justify-content: flex-end;
  width: 100%;
  margin-top: 3rem;
`;

export class componentName extends Component {

  componentWillMount() {
    if (!this.props.recipe) {
      this.props.history.push('/');
    }
    if (this.props.showSavedModal) {
      this.props.toggleModal();
    }

  }

  generatePDF = () => {
    const doc = new jsPDF('p', 'pt');
    const columns = [
      { title: "Ingredient", dataKey: "name" },
      { title: "mL", dataKey: "ml" },
      { title: "Drops", dataKey: "drops" },
      { title: "Grams", dataKey: "g" },
      { title: "Percent", dataKey: "percentage" },
    ];
    const buildRows = Object.values(this.props.recipe);
    const rows = flatten(buildRows);
    doc.autoTable(columns, rows);
    doc.save('e-liquid_recipe.pdf');
  }

  newRecipe = () => {
    this.props.history.push('/');
  }

  render() {
    const { nicotineBase, pg, vg, flavors, totals, name } = this.props.recipe || {};
    const { showSavedButton, showSavedMessage, showSavedModal } = this.props;
    return (
      <MainWrapper>
        { showSavedModal && <SaveModal {...this.props} /> }
        <Header style={{ marginTop: '5rem'}}>Finished Recipe{name && `: ${name}`}</Header>
        { this.props.recipe && <Fragment>
          <Table celled unstackable={ true } style={{ maxWidth: '700px'}}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ingredient</Table.HeaderCell>
                <Table.HeaderCell>ml</Table.HeaderCell>
                <Table.HeaderCell>Drops</Table.HeaderCell>
                <Table.HeaderCell>Grams</Table.HeaderCell>
                <Table.HeaderCell>Percentage</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Nicotine Base</Table.Cell>
                <Table.Cell>{ nicotineBase.ml }</Table.Cell>
                <Table.Cell>{ nicotineBase.drops }</Table.Cell>
                <Table.Cell>{ nicotineBase.g }</Table.Cell>
                <Table.Cell>{ `${nicotineBase.percentage }%` }</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>PG</Table.Cell>
                <Table.Cell>{ pg.ml }</Table.Cell>
                <Table.Cell>{ pg.drops }</Table.Cell>
                <Table.Cell>{ pg.g }</Table.Cell>
                <Table.Cell>{ `${pg.percentage}%` }</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>VG</Table.Cell>
                <Table.Cell>{ vg.ml }</Table.Cell>
                <Table.Cell>{ vg.drops }</Table.Cell>
                <Table.Cell>{ vg.g }</Table.Cell>
                <Table.Cell>{ `${vg.percentage}%` }</Table.Cell>
              </Table.Row>
              { flavors.map((flavour, index) => {
                return (
                  <Table.Row key={ flavour.name + index }>
                    <Table.Cell>{ flavour.name }</Table.Cell>
                    <Table.Cell>{ flavour.ml }</Table.Cell>
                    <Table.Cell>{ flavour.drops }</Table.Cell>
                    <Table.Cell>{ flavour.g }</Table.Cell>
                    <Table.Cell>{ `${flavour.percentage}%` }</Table.Cell>
                  </Table.Row>
                );
              }) }
              <Table.Row>
                <Table.Cell>Totals</Table.Cell>
                <Table.Cell>{ totals.ml }</Table.Cell>
                <Table.Cell>{ totals.drops }</Table.Cell>
                <Table.Cell>{ totals.g }</Table.Cell>
                <Table.Cell>{ `${totals.percentage}%` }</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          { showSavedMessage && <Message positive style={{ width: "100%", display: "flex", maxWidth: "700px", justifyContent:"center"}}><Icon color='green' name='check'/>
          <span>Recipe saved</span>
        </Message> }
          <ButtonWrapper>
            <NewRecipeButton newRecipe={ this.newRecipe } />
            { showSavedButton && <SaveButton {...this.props}/> }
            <PrintButton newPrintTab={ this.generatePDF } />
          </ButtonWrapper>
        </Fragment> }
      </MainWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  recipe: state.formData.recipe,
  showSavedMessage: state.formData.showSavedMessage,
  showSavedButton: state.formData.showSavedButton,
  showSavedModal: state.formData.showSavedModal,
});


const mapDispatchToProps = dispatch => ({
  saveRecipe: payload => dispatch(actions.saveRecipe(payload)),
  toggleModal: () => dispatch(actions.toggleModal()),
});


export default connect(mapStateToProps, mapDispatchToProps)(componentName);
