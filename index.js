/** @format */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import CardList from './src/components/CardList';

const App = () => (
  <View>
    <Header headerText={'Eldercare'} />
    <CardList />
  </View>
);

AppRegistry.registerComponent('Eldercare', () => App);
