import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Text } from 'native-base';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>HomeScreen</Text>
        <View style={styles.layoutButtom}>
          <Button
              onPress={() => this.props.navigation.navigate('Login')}
          >
              <Text>Go to Login Screen</Text>
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
