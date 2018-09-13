import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Card, CardItem, Body } from 'native-base';

export default class CardWearer extends Component {
  render() {
    return (
        <Card style={{ height: 228, width: 172 }} >
          <CardItem style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
              <View style={{ height: 175, width: null, flex: 1 }}>
                <Text>Image</Text>
              </View>
          </CardItem>
          <CardItem style={{ backgroundColor: '#16879E', paddingTop: 6, paddingLeft: 8 }} >
            <Body>
              <Text>Name Lastname</Text>
              <Text note>id58130500026</Text>
            </Body>
          </CardItem>
        </Card>
    );
  }
}
