import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CardDetails from './CardDetails';

class CardList extends Component {
  render() {
    return (
      <ScrollView style={styles.viewContainerStyle}>
        <CardDetails />
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
