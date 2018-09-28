import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Button, Icon, Header, Left, Body, Right, Title, Text } from 'native-base';
import CardWearer from '../component/CardWearer';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  };

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
