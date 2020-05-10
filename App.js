import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigator from './Navigation/navigation'





export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <View style={{ flex: 1 }}>

        <Navigator />

      </View>

    );
  }
}