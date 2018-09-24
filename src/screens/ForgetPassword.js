import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Item, Text, Button, Input, Label, Form } from 'native-base';

export default class ForgetPassword extends Component {

  static navigationOptions = {
    title: 'ForgetPassword',
  };

  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <View style={{ width: '90%' }}>
            <View style={{ paddingBottom: 16, paddingTop: 16 }}>
              <Form>
                <Item floatingLabel last>
                  <Label>Enter your email address</Label>
                  <Input />
                </Item>
              </Form>
            </View>
            <View>
              <Button
                block
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
