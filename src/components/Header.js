import React from 'react';
import { Text, View, Platform } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',  //vertical
    alignItems: 'center', // Horizontal
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },

    ...Platform.select({
    ios: {
      shadowOpacity: 0.2, //ios
    },
    android: {
      elevation: 5 // Android
    },
}),
position: 'relative'
},
textStyle: {
fontSize: 20
}
};

export default Header;
