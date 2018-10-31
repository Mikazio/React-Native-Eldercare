import React, { Component } from 'react';
import { Image, Alert, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Icon, Header, Left, Body, Right, Title, Text } from 'native-base';
import Amplify, { Auth } from 'aws-amplify';
import aws from '../config/aws-exports';

Amplify.configure(aws);

export default class RegisterWatcher extends Component {

  static navigationOptions = {
    title: 'RegisterWatcher',
    header: null
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

  
  _handleButtonSubmit = () => {
    Alert.alert(
      'SUCCESSED!',
      'You did it!',
    );
  };


  checkWatcher = () => {
    const { name, lastname, email, password, phone_number } = this.state;

    pattern = /^[a-zA-Z]+$/;
    pattern1 = /^[0-9]+$/;
    pattern2 = /^[0-9a-zA-z]+$/;

    if (pattern1.test(email)) {
      if (pattern2.test(password)) {
        if (pattern.test(name)) {
          if (pattern.test(lastname)) {
            if (phone_number.length==10) {
             
                Auth.signUp({
                  username: this.state.email,
                  password: this.state.password,
                  attributes: {
                    name: this.state.name,
                    'custom:lastname': this.state.lastname,
                    phone_number: this.state.phone_number
                  }
                })
                  .then(() => alert('Success'))
                  .catch(err => alert(err.message));

            
            }
            else {
              alert('Invalid Phone number');
            }
          }
          else {
            alert('please fill lastname');
          }
        }
        else {
          alert('please fill name');
        }
      }
      else {
        alert('please fill password');
      }
    } else {
      alert('please fill email');
    }



  }

  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <Header
          androidStatusBarColor='#168297'
          style={{ backgroundColor: '#16879E', width: '100%' }}
        >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>RegisterWatcher</Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ width: '100%' }}>
          <Container style={styles.photo_container}>
            <Image
              source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
              style={styles.photo}
            />
          </Container>
          <View style={{ alignItems: 'center' }}>
            <Form style={{ width: '90%' }}>
              <Item floatingLabel last >
                <Label style={styles.text_label}>Email</Label>
                <Input
                  value={this.state.email}
                  onChangeText={value => this.setState({ email: value })}
                />
              </Item>
              <Item floatingLabel last>
                <Label style={styles.text_label}>Password</Label>
                <Input
                  secureTextEntry
                  value={this.state.password}
                  onChangeText={value => this.setState({ password: value })}
                />
              </Item>
              <Item floatingLabel last>
                <Label style={styles.text_label}>Name</Label>
                <Input
                  value={this.state.name}
                  onChangeText={value => this.setState({ name: value })}
                />
              </Item>
              <Item floatingLabel last>
                <Label style={styles.text_label}>Lastname</Label>
                <Input
                  value={this.state.lastname}
                  onChangeText={value => this.setState({ lastname: value })}
                />
              </Item>
              <Item floatingLabel last>
                <Label style={styles.text_label}>Phone</Label>
                <Input
                  value={this.state.phone_number}
                  onChangeText={value => this.setState({ phone_number: value })}
                />
              </Item>

            </Form>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View style={{ paddingTop: 15, paddingBottom: 15, width: '90%' }}>
              <Button
                block
                onPress={this.checkWatcher}
                style={{ backgroundColor: '#16879E' }}
              >
                <Text>Submit</Text>
              </Button>
            </View>
          </View>
          <View style={{ backgroundColor: '#EEEE', margin: 15 }}>
            <Item regular last>

              <Input
                placeholder='Get SMS Vertification'
                value={this.state.confirmCode}
                onChangeText={value => this.setState({ confirmCode: value })}
              />
            </Item>
            <Button
              block
              style={{ backgroundColor: '#3C436A' }}
              onPress={this.confirmSignUp.bind(this)}
            >
              <Text style={{ color: '#FFFFFF' }}>Confirm SignUp</Text>
            </Button>
          </View>
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
    marginTop: 30,

  },

  photo: {
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 100
  },
  text_label: {
    color: '#3C436A'
  }
};
