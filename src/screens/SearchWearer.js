import React, { Component } from 'react';
import { View } from 'react-native';
import { API } from 'aws-amplify';
import {
  Container,
  Content,
  Item,
  Input,
  Label,
  Button,
  Text,
  Form,
  Icon,
  Header,
  Left,
  Body,
  Right,
  Title
} from 'native-base';
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

  async searchForWearer(WearerId) {
    await API.get('WearerTableCRUD', `/WearerTable/${WearerId}`)
      .then(data => this.setState({
        WearerData: data
      }))
      .catch(err => console.log('err', err.response));
  }

  displayCard() {
    if (this.state.WearerData.length > 0) {
      return this.state.WearerData.map(Wearer =>
        <WearerCard key={Wearer.DeviceId} data={Wearer} />
      );
    }
  }

  checkWearer=() => {
    const { WearerId } = this.state;
      if (WearerId === '') {
        alert('Not found!');
      } else {
            this.searchForWearer(WearerId);
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
              onPress={this.checkWearer}
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
