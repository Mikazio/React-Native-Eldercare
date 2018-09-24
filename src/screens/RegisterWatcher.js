import React, { Component } from 'react';
import { Image, Alert, Text, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import Amplify, { Auth } from 'aws-amplify';
import aws from '../config/aws-exports';

Amplify.configure(aws);

export default class RegisterWatcher extends Component {

  static navigationOptions = {
    title: 'RegisterWatcher',
  };

    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        phone_number: '',
        confirmCode: ''
    };

    onChangeText(key, value) {
      this.setState({
        [key]: value
      });
    }

    confirmSignUp() {
      Auth.confirmSignUp(this.state.email, this.state.confirmCode)
      .then(() => console.log('Sucessful confirm sign Up'))
      .catch(err => console.log('error confirm sing Up! ', err));
    }

    signUp() {
    Auth.signUp({
        username: this.state.email,
        password: this.state.password,
        attributes: {
          name: this.state.name,
          'custom:lastname': this.state.lastname,
          phone_number: this.state.phone_number
        }
    })
    .then(() => console.log('Success'))
    .catch(err => console.log('Error in signing up', err));
  }

  _handleButtonSubmit = () => {
    Alert.alert(
      'SUCCESSED!',
      'You did it!',
    );
  };


  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <Content style={{ width: '90%' }}>
          <Container style={styles.photo_container}>
          <Image
            source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
            style={styles.photo}
          />
          </Container>
          <View style={{ paddingBottom: 16 }}>
          <Form>
            <Item floatingLabel last >
              <Label>Email</Label>
              <Input
                value={this.state.email}
                onChangeText={value => this.setState({ email: value })}
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
              <Label>Phone</Label>
              <Input
                value={this.state.phone_number}
                onChangeText={value => this.setState({ phone_number: value })}
              />
            </Item>
          </Form>
          </View>
          <Button
            block
            onPress={this.signUp.bind(this)}
          >
            <Text>Submit</Text>
          </Button>

          <Input
            value={this.state.confirmCode}
            onChangeText={value => this.setState({ confirmCode: value })}
          />

          <Button
            block
            onPress={this.confirmSignUp.bind(this)}
          >
            <Text>confirmSignUp</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}
const styles = {
  photo_container: {
    alignItems: 'center',
    height: 110,
    width: null,
    marginTop: 16,

  },

  photo: {
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 100
  }
};
