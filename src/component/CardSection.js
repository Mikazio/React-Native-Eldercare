import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Button, Icon, Header, Left, Body, Right, Title, Text } from 'native-base';
import Amplify, { API } from 'aws-amplify';
import CardWearer from '../component/CardWearer';

export default class Home extends Component {

    displayWatchCard() {
      if (this.state.WatchData.length > 0) {
        return this.state.WatchData.map(Watch =>
          <CardWearer key={Watch.WearerId} data={Watch} />
        );
      }
    }


  render() {
    return (
      <View style={styles.layout_card}>
          <TouchableOpacity
            onPress={() => { console.log(this.state.WatchData); }}
          >
            {this.displayWatchCard()}
          </TouchableOpacity>
      </View>
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
