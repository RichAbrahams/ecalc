import React, { Component } from 'react'
import Loading from '../Loading';

export default class componentName extends Component {

  componentDidMount = () => {
    this.props.history.push('/newrecipe');
  }

  render() {
    return (
      <Loading />
    )
  }
}
