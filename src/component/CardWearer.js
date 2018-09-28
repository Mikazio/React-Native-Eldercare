import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Card, CardItem, Body } from 'native-base';

export default class CardWearer extends Component {
  render() {
    return (
        <Card style={{ height: 228, width: 172 }} >
          <CardItem style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
              <Image
                source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
                style={{ height: 175, width: null, flex: 1 }}
              />
          </CardItem>
          <CardItem style={{ backgroundColor: '#16879E', justifyContent: 'center', paddingLeft: 5, flex: 1 }} >
            <Body>
              <Text style={{ color: '#FFFFFF' }}>Name Lastname</Text>
            </Body>
          </CardItem>
        </Card>
    );
  }
}
