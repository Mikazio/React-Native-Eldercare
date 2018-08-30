/** @format */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Home from './src/screens/Home';


const App = () => (
  <View>
    <Home />
  </View>
);

AppRegistry.registerComponent('Eldercare', () => App);
