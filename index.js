/** @format */
import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import CardList from './src/component/CardList';
import Header from './src/component/Header';

const App = () => (
  <ScrollView>
    <Header headerText={'Eldercare'} />
    <CardList />
  </ScrollView>
);

AppRegistry.registerComponent('Eldercare', () => App);
