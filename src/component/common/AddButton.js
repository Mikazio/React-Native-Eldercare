import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const AddButton = () => (
    <TouchableOpacity>
      <View style={{ backgroundColor: 'blue', borderRadius: 100 }}>
        <Icon name='plus' />
      </View>
    </TouchableOpacity>
  );

export default AddButton;
