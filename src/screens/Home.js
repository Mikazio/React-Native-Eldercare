import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import AddButton from '../component/common/AddButton.js';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <View style={styles.layoutButtom}>
          <Button
              title="Go to Login Screen"
              onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </View>
    );
  }
}
const styles = {
  layoutButtom: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
};
