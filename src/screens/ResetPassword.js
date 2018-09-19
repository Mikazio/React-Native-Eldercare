import React, { Component } from 'react';
import { Container, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class ResetPassword extends Component {

  static navigationOptions = {
    title: 'ResetPassword',
  };

  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <Container style={{ width: 320 }}>
          <Form>
            <Item floatingLabel>
              <Label>OTP code</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>New Password</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input />
            </Item>
          </Form>
          <Container style={{ paddingBottom: 16, paddingTop: 16 }}>
            <Button
              block
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text>Submit</Text>
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}
