import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Page1 from "./FormPages/Page1";
import Page2 from "./FormPages/Page2";
import Page3 from "./FormPages/Page3";
import Page4 from "./FormPages/Page4";
import Page5 from "./FormPages/Page5";
import Page6 from "./FormPages/Page6";
import { destroy } from 'redux-form';
import MainWrapper from '../MainWrapper';
import Progress from './Progress';

const wizardSubmit = (payload, submitForm, history, destroyForm) => {
  console.log('submitted')
  submitForm(payload);
  history.push('/reciperesults');
  destroyForm('wizard');
}

const toRender = (props) => {
  const { setPage, submitForm, history, destroyForm } = props;
  return [
    <Page1 key={1} {...props} onSubmit={() => setPage(2)} />,
    <Page2
      key={2}
      {...props}
      onSubmit={({ targetStrength }) => {
        if (targetStrength) {
          setPage(3);
        } else {
          setPage(5);
        }
      }}
    />,
    <Page3 key={3} {...props} onSubmit={() => setPage(4)} />,
    <Page4 key={4} {...props} onSubmit={() => setPage(5)} />,
    <Page5 key={5} {...props} onSubmit={() => setPage(6)} />,
    <Page6 key={6} {...props} onSubmit={(payload) => wizardSubmit(payload, submitForm, history, destroyForm)} />
  ].filter((item, index) => props.currentPage - 1 === index);
};

export class RecipeForm extends Component {

componentWillMount() {
  this.props.destroyForm();
}

  render() {
    return <MainWrapper>
    <Progress {...this.props} />
      {toRender(this.props)}
    </MainWrapper>;
  }
}

RecipeForm.propTypes = {
  currentPage: PropTypes.number,
  setPage: PropTypes.func
};

const mapStateToProps = state => ({
  currentPage: state.formData.currentPage
});

const mapDispatchToProps = dispatch => ({
  setPage: payload => dispatch(actions.setPage(payload)),
  submitForm: payload => dispatch(actions.submitForm(payload)),
  destroyForm: () => dispatch(destroy('wizard'))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
