import React, { Component } from 'react';
import {
  InteractionManager
} from 'react-native';

export default class Loading extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => this.setState({loaded: true}));
  }

  render() {
    if (this.state.loaded) {
      return React.Children.only(this.props.children);
      alert();
    }
    return null;
  }
}
