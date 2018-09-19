import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import RegisterWatcher from '../screens/RegisterWatcher';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Watch from '../screens/Watch';
import Dashboard from '../screens/Dashboard';
import RegisterWearer from '../screens/RegisterWearer';
import SearchWearer from '../screens/SearchWearer';
import ForgetPassword from '../screens/ForgetPassword';
import ResetPassword from '../screens/ResetPassword';

const Nav = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Register: { screen: RegisterWatcher },
  Profile: { screen: Profile },
  Watch: { screen: Watch },
  Dashboard: { screen: Dashboard },
  RegisterWearer: { screen: RegisterWearer },
  SearchWearer: { screen: SearchWearer },
  ForgetPassword: { screen: ForgetPassword },
  ResetPassword: { screen: ResetPassword },
});

export default Nav;
