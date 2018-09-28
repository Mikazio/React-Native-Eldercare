import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer, Right, Header, Body, Title } from 'native-base';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
    header: null
  };

  state = {
    username: '',
    password: '',
    user: {},
    userAttributes: {}
  }

  getUserInfo() {
    Auth.currentUserInfo()
    .then(userAttributes => {
      this.setState({ userAttributes });
      console.log('get user data: ', userAttributes);
    })
    .catch(err => console.log('err set data: ', err));
  }

  signIn() {
    const { username, password } = this.state;
    Auth.signIn(username, password)
    .then(user => {
      this.setState({ user });
      console.log(user);
      this.getUserInfo();
      this.props.navigation.navigate('Home', { userdata: this.userAttributes });
    })
    .catch(err => console.log('err signing in: ', err));
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header
          androidStatusBarColor='#168297'
          style={{ backgroundColor: '#16879E', width: '100%' }}
        >

         <Body style={{ alignItems: 'center' }}>
           <Title>Eldercare</Title>
         </Body>
       </Header>
        <Content style={styles.content}>
          <View style={styles.photo_container}>
            <Image
              source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
              style={styles.photo}
            />
          </View>
          <Form>
            <Item floatingLabel last >
              <Label style={{ color: '#3C436A' }}>Email</Label>
              <Input
                value={this.state.username}
                onChangeText={value => this.setState({ username: value })}
              />
            </Item>

            <Item floatingLabel last>
              <Label style={{ color: '#3C436A' }}>Password</Label>
              <Input
              secureTextEntry
              value={this.state.password}
              onChangeText={value => this.setState({ password: value })}
              />
            </Item>
          </Form>

          <View style={{ paddingBottom: 5, width: 500 }}>
            <Right>
              <Button
                transparent info
                onPress={() => this.props.navigation.navigate('ForgetPassword')}
              >
                <Text style={{ color: '#16879E' }}>Forget Password?</Text>
              </Button>
            </Right>
          </View>

          <Button
            block
            onPress={this.signIn.bind(this)}
            style={{ backgroundColor: '#16879E' }}
          >
            <Text>Login</Text>
          </Button>

          <View style={{ alignItems: 'center', padding: 5 }}>
            <Text style={{ color: '#979A9A' }}>OR</Text>
          </View>

          <Button
            block bordered
            onPress={() => this.props.navigation.navigate('RegisterWearer')}
            style={{ borderColor: '#16879E' }}
          >
            <Text style={{ color: '#16879E' }}>Register device</Text>
          </Button>

        </Content>

          <Footer style={styles.footer}>
            <Text style={{ color: '#979A9A', paddingTop: 3 }}>Do not have an account? </Text>
            <Button
              transparent small info
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text style={{ color: '#16879E' }}>Register.</Text>
            </Button>
          </Footer>

      </Container>
    );
  }
}
const styles = {
  container: {
    alignItems: 'center',
    flex: 1

  },
  content: {
    width: '90%'
  },
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
  footer: {
    backgroundColor: '#FFFF',
    paddingTop: 12,
    width: '100%'
  }

};
