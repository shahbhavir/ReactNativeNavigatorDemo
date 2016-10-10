/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import slowlog from 'react-native-slowlog';

import SplashPage from './SplashPage';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import PersonPage from './PersonPage';
import NoNavigatorPage from './NoNavigatorPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class App extends Component {
  constructor(props){
    super(props);
    slowlog(this, /.*/);
    this.state = {
      showSplash: true
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showSplash: false
      });
    }, 1000);
  }

  render() {
    let { showSplash } = this.state;
    if (showSplash) {
      return (
        <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 32,}}>Hello</Text>
        </View>
      );
    }
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.PushFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
          navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
          navigator={navigator} />
      );
    }
    return this.noRoute(navigator);
  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>index.js no renderScene</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeNavigator', () => App);
