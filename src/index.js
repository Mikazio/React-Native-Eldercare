import React from 'react';
import { ScrollView } from 'react-native';
import CardList from './component/CardList';
import Header from './component/Header';


const App = () => (
  <ScrollView>
    <Header headerText={'Eldercare'} />
    <CardList />
  </ScrollView>
);

export default App;
