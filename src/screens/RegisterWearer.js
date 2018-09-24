import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import Calender from '../component/DatePicker';

export default class RegisterWearer extends Component {

  static navigationOptions = {
    title: 'RegisterWearer',
  };

  state = {
      name: '',
      lastname: '',
      congenital_disease: '',
      gender: '',
      DOB: ''
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel last>
              <Label>Name</Label>
              <Input
                value={this.state.name}
                onChangeText={value => this.setState({ name: value })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Lastname</Label>
              <Input
                value={this.state.lastname}
                onChangeText={value => this.setState({ lastname: value })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>gender</Label>
              <Input
                value={this.state.gender}
                onChangeText={value => this.setState({ gender: value })}
              />
            </Item>
            <Item floatingLabellast>
              <Label>congenital disease</Label>
              <Input 
                value={this.state.DOB}
                onChangeText={value => this.setState({ DOB: value })}
              />
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
