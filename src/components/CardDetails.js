import React from 'react';
import { ScrollView, Text } from 'react-native';

const CardDetails = ({ data }) => (
    <ScrollView>
      <Text>{data.DeviceId}</Text>
    </ScrollView>
  );

export default CardDetails;
