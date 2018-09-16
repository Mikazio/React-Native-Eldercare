import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Alert, TextInput } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import aws from '../config/aws-exports';

Amplify.configure(aws);

export default class Register extends Component {

  static navigationOptions = {
    title: 'Register',
  };

    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        reEnter: '',
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
          phone: this.state.phone
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
      <View style={styles.container}>
        <View style={styles.photo_container}>
          <Image
            source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71f-PFbeSRL._SX425_.jpg' }}
            style={styles.photo}
          />
        </View>
        <View style={styles.textInput_container}>

              <TextInput
                style={styles.text_layout}
                placeor="Name"
                value={this.state.name}
                onChangeText={value => this.setState({ name: value })}
              />

              <TextInput
                style={styles.text_layout}
                placeholder="Lastname"
                value={this.state.lastname}
                onChangeText={value => this.setState({ lastname: value })}
              />

              <TextInput
                style={styles.text_layout}
                placeholder="Email"
                value={this.state.email}
                onChangeText={value => this.setState({ email: value })}
              />

              <TextInput
                secureTextEntry
                style={styles.text_layout}
                placeholder="Password"
                value={this.state.password}
                onChangeText={value => this.setState({ password: value })}
              />

              <TextInput
                secureTextEntry
                style={styles.text_layout}
                placeholder="Re-enter password"
                value={this.state.reEnter}
                onChangeText={value => this.setState({ reEnter: value })}
              />

              <TextInput
                style={styles.text_layout}
                placeholder="Phone"
                value={this.state.phone}
                onChangeText={value => this.setState({ phone_number: value })}
              />

        </View>


        <View style={styles.btn_container}>

          <View style={styles.btn_layout}>
            <Button
              color="#BBBBBB" title="BACK"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>

          <View style={styles.btn_layout}>
            <Button
              color="#BBBBBB" title="SUBMIT"
              onPress={this.signUp.bind(this)}
            />
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EEEEEE'
  },

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
  },

  textInput_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 276,
    width: 300,
    marginBottom: 45
  },

  text_layout: {
    height: 36,
    width: 300,
    padding: 8
  },

  btn_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    height: 36,
    marginBottom: 30
  },

  btn_layout: {
    width: 146,
    height: 36
  },
});
