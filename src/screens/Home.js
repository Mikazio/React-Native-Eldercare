import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Button, Icon, Header, Left, Body, Right, Title, Text } from 'native-base';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import CardWearer from '../component/CardWearer';

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

  displayWatchCard() {
    if (this.state.WatchData.length > 0) {
      return this.state.WatchData.map(Watch =>
        <CardWearer key={Watch.WearerId} data={Watch} />
      );
    }
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
            <TouchableOpacity
              onPress={() => { console.log(this.state.WatchData); }}
            >
              {this.displayWatchCard()}
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
