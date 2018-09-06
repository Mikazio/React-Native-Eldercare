import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

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
    <Card>
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
    </Card>
  );
 };

export default CardDetails;
