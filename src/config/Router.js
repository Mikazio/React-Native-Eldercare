import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Login from '../screens/Login';

const Nav = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Register: { screen: Register },
});

export default Nav;
