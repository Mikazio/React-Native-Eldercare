import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Item, Text, Button, Input, Label, Form, Icon, Header, Left, Body, Right, Title } from 'native-base';

export default class ForgetPassword extends Component {

  static navigationOptions = {
    title: 'ForgetPassword',
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
              <Title>ForgetPassword</Title>
            </Body>
            <Right />
        </Header>
        <View style={{ width: '90%' }}>
            <View style={{ paddingBottom: 16, paddingTop: 16 }}>
              <Form>
                <Item floatingLabel last>
                  <Label style={{ color: '#3C436A' }}>Enter your email address</Label>
                  <Input />
                </Item>
              </Form>
            </View>
            <View>
              <Button
                block
                style={{ backgroundColor: '#16879E' }}
                onPress={() => this.props.navigation.navigate('ResetPassword')}
              >
                <Text>Send Login Link</Text>
              </Button>
            </View>
        </View>
      </Container>
    );
  }
}
