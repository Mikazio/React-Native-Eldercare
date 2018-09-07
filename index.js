/** @format */
import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import CardList from './src/components/CardList';
import Header from './src/components/Header';

const App = () => (
  <ScrollView>
    <Header headerText={'Eldercare'} />
    <CardList />
  </ScrollView>
);

AppRegistry.registerComponent('Eldercare', () => App);
