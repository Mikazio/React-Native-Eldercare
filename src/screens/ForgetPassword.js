import React, { Component } from 'react';
import { View } from 'react-native';
import { Container,
          Item,
          Text,
          Button,
          Input,
          Label,
          Form,
          Icon,
          Header,
          Left,
          Body,
          Right,
          Title
        } from 'native-base';

import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);

export default class ForgetPassword extends Component {

  static navigationOptions = {
    title: 'ForgetPassword',
    header: null
  };

  state = {
    username: ''
  }

sendCheckPassword(username) {
  Auth.forgotPassword(username)
    .then(
      this.props.navigation.navigate('ResetPassword', { username: this.props.data.username }))
    .catch(err => console.log(err));
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
              <Title>ForgetPassword</Title>
            </Body>
            <Right />
        </Header>
        <View style={{ width: '90%' }}>
            <View style={{ paddingBottom: 16, paddingTop: 16 }}>
              <Form>
                <Item floatingLabel last>
                  <Label style={{ color: '#3C436A' }}>Enter your email address</Label>
                  <Input
                    value={this.state.username}
                    onChangeText={value => this.setState({ username: value })}
                  />
                </Item>
              </Form>
            </View>
            <View>
              <Button
                block
                style={{ backgroundColor: '#16879E' }}
                onPress={() => this.sendCheckPassword(this.state.username)}
              >
                <Text>Send Login Link</Text>
              </Button>
            </View>
        </View>
      </Container>
    );
  }
}
