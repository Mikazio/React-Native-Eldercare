import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Left,
  Body,
  Right,
  Radio,
  ListItem,
  Icon,
  Header,
  Title } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import Amplify, { API, Storage } from 'aws-amplify';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);

export default class RegisterWearer extends Component {

  static navigationOptions = {
    title: 'RegisterWearer',
    header: null
  };

  state = {
      name: '',
      lastname: '',
      gender: 'Female',
      image: null
  };

pickSingleWithCamera(cropping) {
     ImagePicker.openCamera({
       cropping: cropping,
       width: 500,
       height: 500,
       includeExif: true,
     }).then(image => {
       console.log('received image', image);
       this.setState({
         image: { uri: image.path, width: image.width, height: image.height},
         images: null
       });
     }).catch(e => alert(e));
   }

   pickSingleInGallery() {
     ImagePicker.openPicker({
     width: 500,
     height: 500,
     cropping: true
   }).then(image => {
     console.log(image);
   });
}

  postToWearerTable() {
    API.post('WearerTableCRUD', '/WearerTable', { body: {
      name: this.state.name,
      lastname: this.state.lastname,
      gender: this.state.gender,
    } })
      .then(data => console.log(data))
      .catch(err => console.log('err', err.response.data));
  }

  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor='#168297'
          style={{ backgroundColor: '#16879E', width: '100%' }}
        >
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>RegisterWearer</Title>
            </Body>
            <Right />
        </Header>

        <Content>
          <View style={{ alignItems: 'center' }}>
            <Form style={{ width: '90%' }}>

            <Container style={styles.photo_container}>
              <Image
                source={{ uri: 'https://scontent.fbkk2-1.fna.fbcdn.net/v/t1.0-9/10406994_854632824607247_2048936579886851496_n.jpg?_nc_cat=111&oh=3b759dad66550d6680db530e9ca5bc65&oe=5C34B546' }}
                style={styles.photo}
              />
              <Text style={{ color: '#979A9A', marginTop: 10 }}>Upload Picture</Text>
            </Container>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button
                bordered
                style={{ borderColor: '#16879E' }}
                onPress={() => this.pickSingleWithCamera(true)}
              >
                <Icon style={{ color: '#16879E' }} name="camera" type="Entypo" />
                <Text style={{ color: '#16879E' }}> Camera</Text>
              </Button>
              <Button
                bordered
                style={{ borderColor: '#16879E' }}
                onPress={() => this.pickSingleInGallery()}
              >
                <Icon style={{ color: '#16879E' }} name="image" type="MaterialIcons" />
                <Text style={{ color: '#16879E' }}>Gallery</Text>
              </Button>
            </View>
              <Item floatingLabel last>
                <Label style={{ color: '#3C436A' }}>Firstname</Label>
                <Input
                  value={this.state.name}
                  onChangeText={value => this.setState({ name: value })}
                />
              </Item>
              <Item floatingLabel last>
                <Label style={{ color: '#3C436A' }}>Lastname</Label>
                <Input
                  value={this.state.lastname}
                  onChangeText={value => this.setState({ lastname: value })}
                />
              </Item>
              <ListItem last>
                <Left>
                  <Label style={{ color: '#3C436A' }}>Gender</Label>
                </Left>
                <Left>
                    <Radio
                      selectedColor={'#16879E'}
                      onPress={() => this.setState({ gender: 'Female' })}
                      selected={this.state.gender === 'Female'}
                    />
                    <Text> Female</Text>
                </Left>
                <Left>
                    <Radio
                      selectedColor={'#16879E'}
                      onPress={() => this.setState({ gender: 'Male' })}
                      selected={this.state.gender === 'Male'}
                    />
                    <Text> Male</Text>
                </Left>
              </ListItem>
            </Form>

            <View style={{ paddingTop: 20, paddingBottom: 15, width: '90%' }}>
              <Button
                block
                style={{ backgroundColor: '#16879E' }}
                onPress={() => this.postToWearerTable()}
              >
                <Text>Submit</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = {
  photo_container: {
    alignItems: 'center',
    height: 135,
    width: null,
    marginTop: 30,
    marginBottom: 10,

  },

  photo: {
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 100
  },

};
