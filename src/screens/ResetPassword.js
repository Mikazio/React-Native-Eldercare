import React, { Component } from 'react';
import { Container,
          Form,
          Item,
          Input,
          Label,
          Button,
          Text,
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

export default class ResetPassword extends Component {

  static navigationOptions = {
    title: 'ResetPassword',
    header: null
  };

  state = {
    username: '',
    newPassword: '',
    confirmPassword: '',
    OTP: ''
  }


confirmForgetPassword(username, code, newPassword) {
    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then(() => this.props.navigation.navigate('Login'))
      .catch(err => console.log(err));
  }

  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'NO-ID');
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
              <Title>ResetPassword</Title>
            </Body>
            <Right />
        </Header>
        <Container style={{ width: '90%' }}>
          <Form>
            <Item floatingLabel last>
              <Label style={{ color: '#3C436A' }}>OTP code</Label>
              <Input
                value={this.state.OTP}
                onChangeText={value => this.setState({ OTP: value })}
              />
            </Item>
            <Item floatingLabel last>
              <Label style={{ color: '#3C436A' }}>New Password</Label>
              <Input
                value={this.state.newPassword}
                onChangeText={value => this.setState({ newPassword: value })}
              />
            </Item>
            <Item floatingLabel last>
              <Label style={{ color: '#3C436A' }}>Confirm Password</Label>
              <Input
                value={this.state.confirmPassword}
                onChangeText={value => this.setState({ confirmPassword: value })}
              />
            </Item>
          </Form>
          <Container style={{ paddingBottom: 16, paddingTop: 16 }}>
            <Button
              block
              style={{ backgroundColor: '#16879E' }}
              onPress={() =>
                this.confirmForgetPassword(username, this.state.OTP, this.state.newPassword)}
            >
              <Text>Submit</Text>
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}
