import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Button, Text, Icon, Body, Right } from 'native-base';
import { Auth } from 'aws-amplify';

export default class SideBar extends Component {

  state = {
    userAttributes: {
      name: ''
    }
  }

  componentWillMount() {
    this.getUserInfo();
  }

  async getUserInfo() {
    await Auth.currentUserInfo()
    .then(userAttributes => {
      this.setState({ userAttributes });
    })
    .catch(err => console.log('err set data: ', err));
  }

logout() {
  Auth.signOut()
    .then(this.props.navigator.navigate('Login'))
    .catch(err => console.log(err));
}

  render() {
    return (
        <Container>
        <View style={styles.headerSide}>
          <Image
            source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
            style={styles.photo}
          />
          <Text
            style={{ color: '#FFFF' }}
          >
            Welcome
          </Text>
          <Text
            style={{ color: '#FFFF' }}
          >
            Eldercare
          </Text>
        </View>
        <Button
          transparent full
          onPress={() => this.logout()}
        >
            <Icon style={{ color: '#979A9A' }} name="power" />
            <Body>
                <Text style={{ color: '#979A9A' }}>Logout</Text>
            </Body>
            <Right />
        </Button>

        <Button
          transparent full
          onPress={() => console.log(this.state.userAttributes)}
        >
            <Icon style={{ color: '#979A9A' }} name="power" />
            <Body>
                <Text style={{ color: '#979A9A' }}>UserDetails</Text>
            </Body>
            <Right />
        </Button>

        </Container>
    );
  }
}
const styles = {
  headerSide: {
    padding: 15,
    height: 150,
    width: null,
    backgroundColor: '#16879E'
  },

  photo: {
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 100
  },
};
