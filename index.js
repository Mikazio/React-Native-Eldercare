/** @format */
import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import Header from './src/components/Header';
import CardList from './src/components/CardList';

const App = () => (
  <ScrollView>
    <Header headerText={'Eldercare'} />
    <CardList />
  </ScrollView>
);

AppRegistry.registerComponent('Eldercare', () => App);
