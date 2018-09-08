import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AddButton from '../component/common/AddButton.js';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <View style={styles.layoutButtom}>
          <AddButton />
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
export default HomeScreen;
