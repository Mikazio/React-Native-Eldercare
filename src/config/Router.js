import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Watch from '../screens/Watch';
import Dashboard from '../screens/Dashboard';

const Nav = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Register: { screen: Register },
  Profile: { screen: Profile },
  Watch: { screen: Watch },
  Dashboard: { screen: Dashboard },
});

export default Nav;
