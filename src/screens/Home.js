import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';

import CardWearer from '../component/CardWearer';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>
        </View>

        <View style={styles.layoutButtom}>
          <Button
              onPress={() => this.props.navigation.navigate('Watch')}
          >
              <Text>Go to Watch Screen</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = {
  layoutButtom: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'red'
  }
};
