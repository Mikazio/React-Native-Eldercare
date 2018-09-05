import React from 'react';
import { ScrollView, Text } from 'react-native';

const CardDetails = ({ data }) => {
    const { DeviceId, timestamp } = data;
    const { XMag,
            YMag,
            ZMag,
            Heading,
            Pitch,
            Roll,
            XAxis,
            YAxis,
            ZAxis
          } = data.data;

    return (
    <ScrollView>
      <Text>Xmag= {XMag}</Text>
      <Text>Ymag= {YMag}</Text>
      <Text>Zmag= {ZMag}</Text>
      <Text>Heading= {Heading}</Text>
      <Text>Pitch= {Pitch}</Text>
      <Text>Roll= {Roll}</Text>
      <Text>XAxis= {XAxis}</Text>
      <Text>YAxis= {YAxis}</Text>
      <Text>ZAxis= {ZAxis}</Text>
      <Text>DeviceId= {DeviceId}</Text>
      <Text>timestamp= {timestamp}</Text>
    </ScrollView>
  );
  };

export default CardDetails;
