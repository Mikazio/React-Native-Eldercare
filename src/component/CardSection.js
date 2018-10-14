import React, { Component } from 'react';
import { View } from 'react-native';
import CardWearer from '../component/CardWearer';

export default class Home extends Component {

    displayWatchCard() {
      if (this.props.data.length > 0) {
        return this.props.data.map(Watch =>
          <CardWearer key={Watch.WearerId} data={Watch} navigation={this.props.navigation} />
        );
      }
    }


  render() {
    return (
      <View style={styles.layout_card}>
            {this.displayWatchCard()}
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
