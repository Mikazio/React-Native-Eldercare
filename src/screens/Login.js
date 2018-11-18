import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container,
          Content,
          Form,
          Item,
          Input,
          Label,
          Button,
          Text,
          Footer,
          Right,
          Header,
          Body,
          Title
        } from 'native-base';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import logo from '../component/common/Icon2.png';

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

  checkUser =() => {
    const { username, password } = this.state;
    // pattern = /^[a-zA-Z]+$/;
    if (username === '') {
      alert('please fill Username');
    } else if (password === '') {
      alert('please fill Password');
    } else {
         Auth.signIn(username, password)
          .then(user => {
            this.setState({ user });
            this.props.navigation.navigate('Home');
          })
          .catch(err => alert(err.message));
    }
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
              source={logo}
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

          <View style={{ paddingBottom: 5, width: '150%' }}>
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
            onPress={this.checkUser}//this.signIn.bind(this)
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
    height: 150,
    width: 150,
    borderRadius: 100
  },
  footer: {
    backgroundColor: '#FFFF',
    paddingTop: 12,
    width: '100%'
  }

};
