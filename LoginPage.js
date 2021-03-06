'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

class LoginPage extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
            routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
            onPress={this.gotoNext.bind(this)}>
          <Text style={{color: 'red'}}>gotoNext</Text>
        </TouchableHighlight>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'Main',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Login Title
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = LoginPage;
