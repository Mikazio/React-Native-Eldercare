import React, { Component } from 'react';
import { Image, View, Alert } from 'react-native';
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Text,
  Icon,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button
} from 'native-base';
import { API } from 'aws-amplify';
import Profile from './Profile.js';

export default class Watch extends Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    WearerData: {}
  }

  async searchForWearer(WearerId) {
    await API.get('WearerTableCRUD', `/WearerTable/${WearerId}`)
      .then(data => this.setState({
        WearerData: data[0]
      }))
      .catch(err => alert(err.message));
  }

  deleteWearer(WearerId) {
      Alert.alert(
        'Are you Sure?',
        'to delete this wearer',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK',
              onPress: () => API.del('WatchTableCRUD', `/WatchTable/object/${WearerId}`)
              .then(() => this.props.navigation.navigate('Home', {
                shouldRefresh: true
              }))
              .catch(err => alert(err.message)) },
        ],
        { cancelable: false }
      );
  }

  render() {
    const { navigation } = this.props;
    const WearerId = navigation.getParam('WearerId', 'NO-ID');
    this.searchForWearer(WearerId);
    return (
      <Container>
        <Header
          hasTabs
          androidStatusBarColor='#168297'
          style={{ backgroundColor: '#16879E' }}
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
              <Title>Eldercare</Title>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() => this.deleteWearer(WearerId)}
              >
              <Icon name='trash-o' type="FontAwesome" />
            </Button>
            </Right>
          </Header>
          <View style={styles.photo_container}>
            <Image
              source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
              style={styles.photo}
            />
            <Text
              style={{ color: '#FFFF' }}
            >
              {this.state.WearerData.Name} {this.state.WearerData.lastname}
            </Text>
          </View>
        <Tabs>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#16879E' }}>
                <Text>Profile</Text>
              </TabHeading>}
          >
            <Profile data={this.state.WearerData} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = {
  photo_container: {
    alignItems: 'center',
    height: 140,
    width: null,
    backgroundColor: '#16879E'
  },

  photo: {
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 100
  },
};
