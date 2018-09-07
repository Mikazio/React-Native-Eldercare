/** @format */
import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import Header from './src/components/Header';
import CardList from './src/components/CardList';
import Home from './src/components/Home';

const App = () => (
  <ScrollView>
    <Header headerText={'Eldercare'} />
    <Home />
  </ScrollView>
);

AppRegistry.registerComponent('Eldercare', () => App);
