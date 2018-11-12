import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Button, Text, List, ListItem, Icon, Left, Body, Right } from 'native-base';

export default class SideBar extends Component {

  render() {
    return (
        <Container>
        <View style={styles.headerSide}>
          <Image
            source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
            style={styles.photo}
          />
          <Text
            style={{ color: '#FFFF' }}
          >
            name watcher
          </Text>
          <Text
            style={{ color: '#FFFF' }}
          >
            email
          </Text>
        </View>
        <Button transparent full>
            <Icon style={{ color: '#979A9A' }} name="power" />
            <Body>
                <Text style={{ color: '#979A9A' }}>Logout</Text>
            </Body>
            <Right />
        </Button>
        </Container>
    );
  }
}
const styles = {
  headerSide: {
    padding: 15,
    height: 150,
    width: null,
    backgroundColor: '#16879E'
  },

  photo: {
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 100
  },
};
