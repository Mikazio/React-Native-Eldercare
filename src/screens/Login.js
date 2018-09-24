import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer } from 'native-base';
import { Auth } from 'aws-amplify';

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  state = {
    username: '',
    password: '',
    user: {},
    userAttributes: {}
  }

  getUserInfo() {
    Auth.currentUserInfo()
    .then(userAttributes => {
      this.setState({ userAttributes });
      console.log('get user data: ', userAttributes);
    })
    .catch(err => console.log('err set data: ', err));
  }

  signIn() {
    const { username, password } = this.state;
    Auth.signIn(username, password)
    .then(user => {
      this.setState({ user });
      console.log(user);
      this.getUserInfo();
      this.props.navigation.navigate('Home', { userdata: this.userAttributes });
    })
    .catch(err => console.log('err signing in: ', err));
  }

  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <Content style={{ width: '90%' }}>
          <Form>
            <Item floatingLabel last>
              <Label>Username</Label>
              <Input
                value={this.state.username}
                onChangeText={value => this.setState({ username: value })}
              />
            </Item>

            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
              secureTextEntry
              value={this.state.password}
              onChangeText={value => this.setState({ password: value })}
              />
            </Item>
          </Form>
          <Button
            transparent info
            onPress={() => this.props.navigation.navigate('ForgetPassword')}
          >
            <Text>Forget Password?</Text>
          </Button>

          <Button
            block
            onPress={this.signIn.bind(this)}
          >
            <Text>Login</Text>
          </Button>

          <Text>OR</Text>

          <Button
            block bordered
            onPress={() => this.props.navigation.navigate('SearchWearer')}
          >
            <Text>Register device</Text>
          </Button>

        </Content>

          <Footer style={{ backgroundColor: '#ddd', width: '100%' }}>
            <Text>Do not have an account? </Text>
            <Button
              transparent small info
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text>Register.</Text>
            </Button>
          </Footer>

      </Container>
    );
  }
}
