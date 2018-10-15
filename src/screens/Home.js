import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Button, Icon, Header, Left, Body, Right, Title, Text } from 'native-base';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import CardSection from '../component/CardSection';

Amplify.configure(awsmobile);

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  };

  state = {
    WatchData: []
  }

  componentWillMount() {
    API.get('WatchTableCRUD', '/WatchTable/')
      .then(data => this.setState({ WatchData: data }))
      .catch(err => console.log('err', err.response));
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
        <CardSection data={this.state.WatchData} navigation={this.props.navigation} />
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
