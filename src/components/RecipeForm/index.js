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
import { destroy } from "redux-form";
import MainWrapper from "../MainWrapper";
import Progress from "./Progress";
import pgMinMax from "../utils/pgMinMax";

const toRender = props => {
  const {
    history,
    submitForm1,
    submitForm2,
    submitForm3,
    submitForm4,
    submitForm5,
    submitForm6
  } = props;
  return [
    <Page1 key={1} {...props} onSubmit={payload => submitForm1(payload)} />,
    <Page2 key={2} {...props} onSubmit={payload => submitForm2(payload)} />,
    <Page3 key={3} {...props} onSubmit={payload => submitForm3(payload)} />,
    <Page4 key={4} {...props} onSubmit={payload => submitForm4(payload)} />,
    <Page5 key={5} {...props} onSubmit={payload => submitForm5(payload)} />,
    <Page6
      key={6}
      {...props}
      onSubmit={payload => {
        submitForm6(payload);
        history.push("/reciperesults");
      }}
      initialValues={{
        pgVgRatio: props.pgVgRatio || pgMinMax(
            props.targetStrength,
            props.baseStrength,
            props.nicotineBaseLiquid,
            props.flavours,
            props.batchSize
        )[0]
      }      }
    />
  ].filter((item, index) => props.currentPage - 1 === index);
};

export class RecipeForm extends Component {

  componentWillMount = () => {
    this.destroyAllForms();
    this.props.resetRecipeState();
  }
  componentWillUnmount = () => {
    this.destroyAllForms();
    this.props.resetRecipeState();
  };

  destroyAllForms = () => {
    this.props.destroyForm("FormPage1");
    this.props.destroyForm("FormPage2");
    this.props.destroyForm("FormPage3");
    this.props.destroyForm("FormPage4");
    this.props.destroyForm("FormPage5");
    this.props.destroyForm("FormPage6");
  }

  render() {
    return (
      <MainWrapper>
        <Progress {...this.props} />
        {toRender(this.props)}
      </MainWrapper>
    );
  }
}

RecipeForm.propTypes = {
  currentPage: PropTypes.number,
  setPage: PropTypes.func
};

const mapStateToProps = state => ({
  currentPage: state.formData.currentPage,
  batchSize: state.formData.batchSize,
  targetStrength: state.formData.targetStrength,
  baseStrength: state.formData.baseStrength,
  nicotineBaseLiquid: state.formData.nicotineBaseLiquid,
  flavours: state.formData.flavours,
  pgRatio: state.formData.pgRatio
});

const mapDispatchToProps = dispatch => ({
  setPage: payload => dispatch(actions.setPage(payload)),
  submitForm1: payload => dispatch(actions.submitForm1(payload)),
  submitForm2: payload => dispatch(actions.submitForm2(payload)),
  submitForm3: payload => dispatch(actions.submitForm3(payload)),
  submitForm4: payload => dispatch(actions.submitForm4(payload)),
  submitForm5: payload => dispatch(actions.submitForm5(payload)),
  submitForm6: payload => dispatch(actions.submitForm6(payload)),
  destroyForm: payload => dispatch(destroy(payload)),
  resetRecipeState: () => dispatch(actions.resetRecipeState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
