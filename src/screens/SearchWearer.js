import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Auth, API } from 'aws-amplify';
import { Container, Item, Input, Label, Button, Text, Card, CardItem, Form } from 'native-base';

export default class SearchWearer extends Component {

  static navigationOptions = {
    title: 'SearchWearer',
  };

  postToWatchTable() {
    API.post('WatchTableCRUD', '/WatchTable', { body: {
      userId: Auth.currentAuthenticatedUser(),
      UserSub: Auth.user.username,
      WearerId: '1123'
    } })
      .then(data => console.log(data))
      .catch(err => console.log('err', err.response.data));
  }

  async searchForWearer() {
    let queryParams: {
      KeyConditionExpression: 'userId = :userId',
      ExpressionAttributeValues: {
                ':userId': '123'
            },
    };
    await API.get('WearerTable', '/WearerTable/object', queryParams)
      .then(data => console.log(data))
      .catch(err => console.log('err', err.response.data));
  }

  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <View style={{ width: '90%' }}>
          <Form>
            <Item floatingLabel last>
              <Label>Device ID</Label>
              <Input />
            </Item>
          </Form>
            <View style={{ paddingTop: 16 }}>
              <Button
                block
                onPress={() => this.searchForWearer()}
              >
                <Text>Check DeviceID</Text>
              </Button>
          </View>
        </View>

        <View style={{ paddingTop: 50 }}>
        <Card style={{ height: 280, width: 220, alignItems: 'center' }} >
          <CardItem header>
            <Text>DeviceID 58130500026</Text>
          </CardItem>
          <CardItem style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
              <Image
                source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
                style={styles.photo}
              />
          </CardItem>
          <CardItem>
              <Text>Name Lastname</Text>
          </CardItem>
          <CardItem>
            <Button
              onPress={() => this.postToWatchTable()}
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
