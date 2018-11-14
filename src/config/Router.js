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
import LoginDevice from '../screens/LoginDevice';
import ConfirmSignUp from '../screens/ConfirmSignUp';
import SideBar from '../screens/SideBar';

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
  LoginDevice: { screen: LoginDevice },
  ConfirmSignUp: { screen: ConfirmSignUp },
  SideBar: { screen: SideBar },
});

export default Nav;
