import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer } from 'native-base';

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

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
          <Button
            block
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text>Login</Text>
          </Button>
          <Text>OR</Text>
          <Button
            block bordered
            onPress={() => this.props.navigation.navigate('RegisterWearer')}
          >
            <Text>Register of device</Text>
          </Button>
        </Content>

          <Footer style={{ backgroundColor: '#ddd' }}>
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
