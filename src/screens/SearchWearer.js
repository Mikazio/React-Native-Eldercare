import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Card, CardItem } from 'native-base';

export default class SearchWearer extends Component {

  static navigationOptions = {
    title: 'SearchWearer',
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Device ID</Label>
              <Input />
            </Item>
            <Button
              block
            />
          </Form>
        </Content>
        <Content>
        <Card style={{ height: 228, width: 172 }} >
          <CardItem>
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
        </Content>
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
