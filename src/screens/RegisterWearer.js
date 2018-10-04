import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Left, Body, Right, Radio, ListItem, Icon, Header, Title } from 'native-base';
import { Auth, API } from 'aws-amplify';

export default class RegisterWearer extends Component {

  static navigationOptions = {
    title: 'RegisterWearer',
    header: null
  };

  state = {
      name: '',
      lastname: '',
      gender: 'Female'
  };

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
