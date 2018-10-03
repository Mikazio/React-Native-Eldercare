import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Auth, API } from 'aws-amplify';
import { Container, Content, Item, Input, Label, Button, Text, Card, CardItem, Form, Icon, Header, Left, Body, Right, Title } from 'native-base';

export default class SearchWearer extends Component {

  static navigationOptions = {
    title: 'SearchWearer',
    header: null
  };

  state = {
    WearerId: '',
    WearerData: []
  }

  postToWatchTable() {
    API.post('WatchTableCRUD', '/WatchTable', { body: {
      userId: Auth.currentAuthenticatedUser(),
      UserSub: Auth.user.username,
      WearerId: 'Mikazio Mikaza'
    } })
      .then(data => console.log(data))
      .catch(err => console.log('err', err.response.data));
  }

  async searchForWearer(WearerId) {
    await API.get('WearerTableCRUD', '/WearerTable/' + WearerId)
      .then(res => this.setState({
        WearerData: res
      }))
      .catch(err => console.log('err', err.response));
  }

  async testSearch() {
    let apiName = 'NewWearerCRUD';
    let path = '/NewWearer/object/' + this.state.WearerId;
    let myInit = {
      queryStringParameters: {
        gender: 'Female'
      }
    }
    console.log('current path ', path);
    await API.get(apiName, path)
      .then(response => console.log(response))
      .catch(error => { console.log(error.response); });
  }

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
              <Title>Search Wearer</Title>
            </Body>
            <Right />
        </Header>

        <Content style={{ width: '90%' }}>
          <Form>
            <Item floatingLabel last>
              <Label style={{ color: '#3C436A' }}>Device ID</Label>
              <Input
                value={this.state.WearerId}
                onChangeText={value => this.setState({ WearerId: value })}
              />
            </Item>
          </Form>
            <View style={{ paddingTop: 10 }}>
              <Button
                block
                style={{ backgroundColor: '#16879E' }}
                onPress={() => this.searchForWearer(this.state.WearerId)}
              >
                <Text>Check DeviceID</Text>
              </Button>
            </View>


        <View style={{ paddingTop: 50, alignItems: 'center' }}>

          <Card style={{ height: 280, width: 220, alignItems: 'center' }} >
            <CardItem header>
              <Text>DeviceID: </Text>
              <Text>58130500026</Text>
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
                style={{ backgroundColor: '#16879E' }}
                onPress={() => console.log(this.state.WearerData)}
              >
                <Text>Add</Text>
              </Button>
            </CardItem>
          </Card>

        </View>
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
