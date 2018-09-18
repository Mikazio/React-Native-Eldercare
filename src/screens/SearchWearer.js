import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Item, Input, Label, Button, Text, Card, CardItem } from 'native-base';

export default class SearchWearer extends Component {

  static navigationOptions = {
    title: 'SearchWearer',
  };

  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <View style={{ width: 320 }}>
          <View style={{ paddingBottom: 10, paddingTop: 10 }}>
            <Item floatingLabel>
              <Label>Device ID</Label>
              <Input />
            </Item>
          </View>
            <Button
              block
            >
              <Text>Check DeviceID</Text>
            </Button>
        </View>
        <View style={{ paddingTop: 50 }}>
        <Card style={{ height: 280, width: 220, alignItems: 'center' }} >
          <CardItem header>
            <Text>DeviceID 58130500026</Text>
          </CardItem>
          <CardItem style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
              <Image
                source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/71f-PFbeSRL._SX425_.jpg' }}
                style={styles.photo}
              />
          </CardItem>
          <CardItem>
              <Text>Name Lastname</Text>
          </CardItem>
          <CardItem>
            <Button
              onPress={() => this.props.navigation.navigate('RegisterWearer')}
            >
              <Text>Add</Text>
            </Button>
          </CardItem>
        </Card>
        </View>
      </Container>
    );
  }
}
const styles = {
  photo: {
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 100
  }
};
