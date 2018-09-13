import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Text, Card, CardItem, Body } from 'native-base';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
          <Card style={{ height: 228, width: 172 }} >
            <CardItem style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
                <View style={{ height: 175, width: null, flex: 1 }}>
                  <Text>Image</Text>
                </View>
            </CardItem>
            <CardItem style={{ backgroundColor: '#16879E', paddingTop: 6, paddingLeft: 8 }} >
              <Body>
                <Text>Name Lastname</Text>
                <Text note>id58130500026</Text>
              </Body>
            </CardItem>
          </Card>
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
