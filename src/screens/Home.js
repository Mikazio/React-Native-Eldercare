import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container } from 'native-base';
import CardWearer from '../component/CardWearer';
import AddButton from '../component/common/AddButton';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.layout_card}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>

        </View>
        <AddButton
          onPress={() => this.props.navigation.navigate('SearchWearer')}
        />
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 3
  },
  layout_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  }
};
