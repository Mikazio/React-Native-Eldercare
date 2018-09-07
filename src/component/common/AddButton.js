import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

const AddButton = () => {
  return (
    <TouchableOpacity>
      <View style={{ backgroundColor: 'blue', borderRadius: 100 }}>
        <Icon name='plus' />
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;
