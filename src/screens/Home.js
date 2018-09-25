import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, Button, Icon } from 'native-base';
import CardWearer from '../component/CardWearer';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.layout_card}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Watch')}>
              <CardWearer />
            </TouchableOpacity>

        </View>
          <Button
            style={{ backgroundColor: 'blue', borderRadius: 100 }}
            onPress={() => this.props.navigation.navigate('SearchWearer')}
          >
            <Icon type='EvilIcons' name='plus' />
          </Button>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 3
  },
  layout_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  }
};
