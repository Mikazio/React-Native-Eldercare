import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Item, Text, Button, Input, Label } from 'native-base';

export default class ForgetPassword extends Component {

  static navigationOptions = {
    title: 'ForgetPassword',
  };

  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <Container style={{ width: 320 }}>
            <View style={{ paddingBottom: 16, paddingTop: 16 }}>
              <Item floatingLabel>
                <Label>Enter your email address</Label>
                <Input />
              </Item>
            </View>
            <View>
              <Button
                block
                onPress={() => this.props.navigation.navigate('ResetPassword')}
              >
                <Text>Send Login Link</Text>
              </Button>
            </View>
        </Container>
      </Container>
    );
  }
}
