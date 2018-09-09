import React from 'react';
import { ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from '../src/screens/Home';
import Register from '../src/screens/Register';
import Login from '../src/screens/Login';
import Nav from './config/Router';


export default class App extends React.Component {
  render() {
    return (
      <Nav />
    );
  }
}
