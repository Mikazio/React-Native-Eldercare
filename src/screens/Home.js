import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import CardWearer from '../component/CardWearer';
import AddButton from '../component/common/AddButton';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.layout_card}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>

        </Content>
        <AddButton />
      </Container>
    );
  }
}
const styles = {
  container: {
    flex: 1
  },
  layout_card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }
};
