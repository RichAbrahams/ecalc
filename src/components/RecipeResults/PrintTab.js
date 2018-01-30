import React, { Component } from 'react'
import { connect } from 'react-redux'
import formatNumber from '../utils/formatNumber';
import { TABLE, TD, TH } from './printStyles';

export class PrintRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = { recipe: null };
  }

  componentDidMount = () => {
    window.addEventListener('storage', this.storageLister)
    localStorage.setItem('printStatus', 'ready');
  }


  storageLister = (e) => {
    if (e.key === 'printData') {
      const newData = JSON.parse(e.newValue);
      this.setState({ recipe: newData });
      window.print();
    }
  }

  render() {
    return (
      <div>
        { this.state.recipe &&
          <TABLE>
            <tr>
              <TH>Ingredient</TH>
              <TH>ml</TH>
              <TH>Drops</TH>
              <TH>Grams</TH>
              <TH>Percentage</TH>
            </tr>
            <tr>
              <TD>Nicotine Base</TD>
              <TD>{ formatNumber(this.state.recipe.nicotineBaseResult.ml, 1) }</TD>
              <TD>{ formatNumber(this.state.recipe.nicotineBaseResult.drops, 0) }</TD>
              <TD>{ formatNumber(this.state.recipe.nicotineBaseResult.g, 1) }</TD>
              <TD>{ `${formatNumber(this.state.recipe.nicotineBaseResult.percentage, 1)}%` }</TD>
            </tr>
            <tr>
              <TD>PG</TD>
              <TD>{ formatNumber(this.state.recipe.pgResult.ml, 1) }</TD>
              <TD>{ formatNumber(this.state.recipe.pgResult.drops, 0) }</TD>
              <TD>{ formatNumber(this.state.recipe.pgResult.g, 1) }</TD>
              <TD>{ `${formatNumber(this.state.recipe.pgResult.percentage, 1)}%` }</TD>
            </tr>
            <tr>
              <TD>VG</TD>
              <TD>{ formatNumber(this.state.recipe.vgResult.ml, 1) }</TD>
              <TD>{ formatNumber(this.state.recipe.vgResult.drops, 0) }</TD>
              <TD>{ formatNumber(this.state.recipe.vgResult.g, 1) }</TD>
              <TD>{ `${formatNumber(this.state.recipe.vgResult.percentage, 1)}%` }</TD>
            </tr>
            { this.state.recipe.flavoursResult.map((flavour, index) => {
              return (
                <tr key={ flavour.name + index }>
                  <TD>Flavour: { flavour.name }</TD>
                  <TD>{ formatNumber(this.state.recipe.flavour.ml, 1) }</TD>
                  <TD>{ formatNumber(this.state.recipe.flavour.drops, 0) }</TD>
                  <TD>{ formatNumber(this.state.recipe.flavour.g, 1) }</TD>
                  <TD>{ `${formatNumber(this.state.recipe.flavour.percentage, 1)}%` }</TD>
                </tr>
              );
            }) }
            <tr>
              <TD>Totals</TD>
              <TD>{ this.state.recipe.totalsResult.ml }</TD>
              <TD>{ this.state.recipe.totalsResult.drops }</TD>
              <TD>{ this.state.recipe.totalsResult.g }</TD>
              <TD>{ `${this.state.recipe.totalsResult.percentage}%` }</TD>
            </tr>
          </TABLE>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recipe: state.formData.recipe,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PrintRecipe)
