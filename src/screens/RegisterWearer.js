import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import Calender from '../component/DatePicker';

export default class RegisterWearer extends Component {

  static navigationOptions = {
    title: 'RegisterWearer',
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Lastname</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>gender</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Disease</Label>
              <Input />
            </Item>
            <Label>Date of Birth</Label>
              <Calender />
          </Form>

          <Button transparent info>
            <Text>Back</Text>
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
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
