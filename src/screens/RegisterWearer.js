import React, { Component } from 'react';
//import { View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, DatePicker } from 'native-base';

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
            <Item>
              <Label>Date of brind</Label>
              <DatePicker
              defaultDate={new Date(2018, 7, 11)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(1818, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select date"
              textStyle={{ color: 'green' }}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={this.setDate}
              />
              <Text>
                Date: {this.state.chosenDate.toString().substr(4, 12)}
              </Text>
            </Item>
            <Item floatingLabel>
              <Label>gender</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Disease</Label>
              <Input />
            </Item>
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
