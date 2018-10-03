import React, { Component } from 'react';
import { View } from 'react-native';
import { Auth, API } from 'aws-amplify';
import { Container, Content, Item, Input, Label, Button, Text, Form, Icon, Header, Left, Body, Right, Title } from 'native-base';
import WearerCard from '../component/WearerCard';


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
    await API.get('WearerTableCRUD', `/WearerTable/${WearerId}`)
      .then(data => this.setState({
        WearerData: data
      }))
      .catch(err => console.log('err', err.response));
  }

  displayCard() {
    if (this.state.WearerData.length > 0) {
      return <WearerCard />;
    }
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
            <View>
              {this.displayCard()}
            </View>
        </Content>
      </Container>
    );
  }
}
