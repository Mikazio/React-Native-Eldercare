import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
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
        phone_number: ''
    };

    onChangeText(key, value) {
      this.setState({
        [key]: value
      });
    }

  signUp() {
    Auth.signUp({
        username: this.state.email,
        password: this.state.password,
        attributes: {
          name: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          phone_number: this.state.phone_number
        }
    })
    .then(() => console.log('Success'))
    .catch(err => console.log('Error in signing up', err));
  }
  confirmSignUp() {
    Auth.confirmSignUp();
  }

  _handleButtonSubmit = () => {
    Alert.alert(
      'SUCCESSED!',
      'You did it!',
    );
  };


  render() {
    return (
      <Container>
        <Content style={styles.photo_container}>
        <Image
          source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71f-PFbeSRL._SX425_.jpg' }}
          style={styles.photo}
        />
        </Content>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                value={this.state.email}
                onChangeText={value => this.setState({ email: value })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                value={this.state.password}
                onChangeText={value => this.setState({ password: value })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                value={this.state.name}
                onChangeText={value => this.setState({ name: value })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Lastname</Label>
              <Input
                value={this.state.lastname}
                onChangeText={value => this.setState({ lastname: value })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Phone</Label>
              <Input
                value={this.state.phone_number}
                onChangeText={value => this.setState({ phone_number: value })}
              />
            </Item>
          </Form>
        </Content>
        <Content>
          <Button
            color="#BBBBBB" title="BACK"
            onPress={() => this.props.navigation.goBack()}
          />
          <Button
            color="#BBBBBB" title="SUBMIT"
            onPress={this.signUp.bind(this)}
          />
        </Content>
      </Container>
    );
  }
}
const styles = {
  photo_container: {
    height: 110,
    width: 110,
    marginTop: 30,
    marginBottom: 30,
  },

  photo: {
    alignItems: 'center',
    height: 100,
    width: 100
  }
};
