import React from 'react';
import { ScrollView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Header from './component/Header';


const App = () => (
  <ScrollView>
    <Header headerText={'Eldercare'} />
    <HomeScreen />
  </ScrollView>
);

export default App;
