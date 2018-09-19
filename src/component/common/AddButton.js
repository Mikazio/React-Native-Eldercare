import React from 'react';
//import { View, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'native-base';

const AddButton = () => (
      <Button
        style={{ backgroundColor: 'blue', borderRadius: 100 }}
        onPress={() => this.props.navigation.navigate('SearchWearer')}
      >
        <Icon name='plus' />
      </Button>
  );

export default AddButton;
