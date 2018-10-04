import React, { Component } from 'react';
import { Container, Label, Form, Item, Input, Text, Button } from 'native-base';

export default class ConfirmSignUp extends Component {

  static navigationOptions = {
    title: 'ConfirmSignUp',
  };

  state = {
    confirmSignUp: ''
  };

  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Confirm SignUp</Label>
            <Input
              value={this.state.confirmSignUp}
              onChangeText={value => this.setState({ confirmSignUp: value })}
            />
          </Item>
        </Form>

        <Button
          block bordered
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>Back</Text>
        </Button>

        <Button
          block
          onPress={this.confirmSignUp.bind(this)}
        >
          <Text>Confirm</Text>
        </Button>

      </Container>
    );
  }
}
