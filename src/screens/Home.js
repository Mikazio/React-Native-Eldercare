import React from 'react';
import { Text } from 'react-native';
import CardList from '../component/CardList.js'
import Header from '../component/Header.js'

class CardList extends Component {
  render() {
    return (
      <View style = {styles.component}>
        <Header headerText={'Home'}/>
        <CardList />
      </View>
    );
  }
}

const styles = {
  component: {
    backgroundColor: '#ddd',
    flex: 1,
    
  }
};

export default Home;
