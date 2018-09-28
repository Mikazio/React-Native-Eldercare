import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Button, Icon, Header, Left, Body, Right, Title, Text } from 'native-base';
import awsmobile from '../../aws-exports';
import Amplify, { API } from 'aws-amplify';
import CardWearer from '../component/CardWearer';

Amplify.configure(awsmobile);

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  };

testPostData() {
  API.post('WatchTableCRUD', '/WatchTable', { body: {
    userId: 'Mikaz',
    WearerId: '1123'
  } });
}

  render() {
    return (
      <Container style={styles.container}>
        <Header
          androidStatusBarColor='#168297'
          style={{ backgroundColor: '#16879E' }}
        >
            <Left>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Eldercare</Title>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('SearchWearer')}
              >
              <Text>ADD</Text>
            </Button>
            </Right>
          </Header>
        <View style={styles.layout_card}>
            <Button
              onPress={() => this.testPostData().then(console.log('Succ').catch(err => console.log('err ', err)))}
            >
              <Text>
                Press ME!
              </Text>
            </Button>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>

        </View>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  layout_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  }
};
