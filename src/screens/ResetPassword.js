import React, { Component } from 'react';
import { Container, Form, Item, Input, Label, Button, Text, Icon, Header, Left, Body, Right, Title } from 'native-base';

export default class ResetPassword extends Component {

  static navigationOptions = {
    title: 'ResetPassword',
    header: null
  };

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
              <Title>ResetPassword</Title>
            </Body>
            <Right />
        </Header>
        <Container style={{ width: '90%' }}>
          <Form>
            <Item floatingLabel last>
              <Label style={{ color: '#3C436A' }}>OTP code</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{ color: '#3C436A' }}>New Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{ color: '#3C436A' }}>Confirm Password</Label>
              <Input />
            </Item>
          </Form>
          <Container style={{ paddingBottom: 16, paddingTop: 16 }}>
            <Button
              block
              style={{ backgroundColor: '#16879E' }}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text>Submit</Text>
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}
