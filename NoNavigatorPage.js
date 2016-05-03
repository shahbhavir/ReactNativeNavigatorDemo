'use strict';

import React, {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Loading from './Loading';

const NoNavigatorPage = (props) => {
  let navigator = props.navigator;
  return (
    <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Loading>
        <TouchableOpacity
          onPress={() => navigator.pop()}>
          <Text style={{color: 'yellow'}}>No Navigator present on this page</Text>
        </TouchableOpacity>
      </Loading>
    </View>
  );
};

module.exports = NoNavigatorPage;
