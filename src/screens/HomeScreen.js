import React, { Component } from 'react';
import { View } from 'react-native';
import { AddButton } from './common/AddButton.js';
import { CardDetails } from './CardDetails.js';
import { Header } from './Header.js';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Home'} />
        <CardDetails />
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
