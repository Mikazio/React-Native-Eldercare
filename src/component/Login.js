import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

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
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button transparent light>
            <Text>Forget Password?</Text>
          </Button>
          <Button block>
            <Text>Login</Text>
          </Button>
          <Text>OR</Text>
          <Button block>
            <Text>Login with Facebook</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
