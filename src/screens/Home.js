import React, { Component } from 'react';
import { Container, Button, Icon, Header, Left, Body, Right, Title, Text, Drawer } from 'native-base';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import CardSection from '../component/CardSection';
import SideBar from './SideBar';

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
    this.updateUserWatch();
  }

  updateUserWatch() {
    API.get('WatchTableCRUD', '/WatchTable/')
      .then(data => this.setState({ WatchData: data }))
      .catch(err => console.log('err', err.response));
  }

  shouldComponentUpdate() {
    return true;
  }

  closeDrawer() {
      this.drawer._root.close();
  }
    openDrawer() {
      this.drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
      <Container style={styles.container} >
        <Header
          androidStatusBarColor='#168297'
          style={{ backgroundColor: '#16879E' }}
        >
            <Left>
              <Button
              transparent
              onPress={() => this.openDrawer()}
              >
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
      </Drawer>
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
