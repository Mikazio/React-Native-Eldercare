import React, { Component } from 'react';
//import { View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button transparent info>
            <Text>Forget Password?</Text>
          </Button>
          <Button block bordered onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Login</Text>
          </Button>
          <Text>OR</Text>
          <Button block>
            <Text>Login with Facebook</Text>
          </Button>
        </Content>
        <Content>
          <Footer style={{ backgroundColor: '#ddd' }}>
            <Text>Do not have an account? </Text>
            <Button
              transparent small info
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text>Register.</Text>
            </Button>
          </Footer>
        </Content>
      </Container>
    );
  }
}
