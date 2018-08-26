import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

class CardList extends Component {
  render() {
    return (
      <ScrollView style={styles.viewContainerStyle}>
        <Text>Some Text</Text>
      </ScrollView>
    );
  }
}

const styles = {
  viewContainerStyle: {
    backgroundColor: '#ddd'
  }
};

export default CardList;
