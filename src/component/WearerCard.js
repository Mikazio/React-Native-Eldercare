import React from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Text, Button } from 'native-base';
import { Auth, API } from 'aws-amplify';

async function postToWatchTable(Wearer) {
 await API.post('WatchTableCRUD', '/WatchTable', { body: {
    userId: Auth.currentAuthenticatedUser(),
    UserSub: Auth.user.username,
    WearerId: Wearer
  } })
    .then(data => console.log(data))
    .catch(err => console.log('err', err.response.data));
  }

const WearerCard = ({ data }) => {
    const { DeviceId, Name, lastname, WearerId } = data;
    return (
      <View style={{ paddingTop: 50, alignItems: 'center' }}>

      <Card style={{ height: 280, width: 220, alignItems: 'center' }} >
        <CardItem header>
          <Text>DeviceID: </Text>
          <Text>{DeviceId}</Text>
        </CardItem>
        <CardItem style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
            <Image
              source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
              style={styles.photo}
            />
        </CardItem>
        <CardItem>
            <Text>{Name} {lastname}</Text>
        </CardItem>
        <CardItem>
          <Button
            style={{ backgroundColor: '#16879E' }}
            onPress={() => postToWatchTable(WearerId)}
          >
            <Text>Add</Text>
          </Button>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = {
  photo: {
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 100
  }
};

export default WearerCard;
