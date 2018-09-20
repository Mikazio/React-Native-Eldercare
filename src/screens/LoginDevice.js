import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer } from 'native-base';
import { Auth } from 'aws-amplify';

export default class LoginDevice extends Component {

  static navigationOptions = {
    title: 'LoginDevice',
  };

  state = {
    deviceId: '',
    password: '',
  }

  render() {
    return (
      <Container>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>DeviceID</Label>
              <Input
                value={this.state.deviceId}
                onChangeText={value => this.setState({ deviceId: value })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input
              value={this.state.password}
              onChangeText={value => this.setState({ password: value })}
              />
            </Item>
          </Form>

          <Button
            block
            onPress={() => this.props.navigation.navigate('RegisterWearer')}
          >
            <Text>Login</Text>
          </Button>

        </Content>

      </Container>
    );
  }
}
