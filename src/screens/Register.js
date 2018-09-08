import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Alert, TextInput } from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      reEnter: '',
      phone: ''
    };
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
            source={{ uri: '' }}
            style={styles.photo}
          />
        </View>
        <View style={styles.textInput_container}>

              <TextInput
                style={styles.text_layout}
                placeor="Name"
                value={this.state.name}
                onChangeText={(text) => this.setState({ name: text })}
              />

              <TextInput
                style={styles.text_layout}
                placeholder="Lastname"
                value={this.state.lastname}
                onChangeText={(text) => this.setState({ lastname: text })}
              />

              <TextInput
                style={styles.text_layout}
                placeholder="Email"
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
              />

              <TextInput
                secureTextEntry
                style={styles.text_layout}
                placeholder="Password"
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
              />

              <TextInput
                secureTextEntry
                style={styles.text_layout}
                placeholder="Re-enter password"
                value={this.state.reEnter}
                onChangeText={(text) => this.setState({ reEnter: text })}
              />

              <TextInput
                style={styles.text_layout}
                placeholder="Phone"
                value={this.state.phone}
                onChangeText={(text) => this.setState({ phone: text })}
              />

        </View>


        <View style={styles.btn_container}>

          <View style={styles.btn_layout}>
            <Button
              color="#BBBBBB" title="BACK"
            />
          </View>

          <View style={styles.btn_layout}>
            <Button
              color="#BBBBBB" title="SUBMIT"
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
