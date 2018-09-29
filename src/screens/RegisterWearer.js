import React, { Component } from 'react';
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
        Radio,
        ListItem }
        from 'native-base';

import { Auth, API } from 'aws-amplify';

export default class RegisterWearer extends Component {

  static navigationOptions = {
    title: 'RegisterWearer',
  };

  state = {
      name: '',
      lastname: '',
      gender: 'Male'
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
        <Content>
          <Form>
            <Item floatingLabel last>
              <Label>Firstname</Label>
              <Input
                value={this.state.name}
                onChangeText={value => this.setState({ name: value })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Lastname</Label>
              <Input
                value={this.state.lastname}
                onChangeText={value => this.setState({ lastname: value })}
              />
            </Item>

              <Label>gender</Label>
              <ListItem>
                <Left>
                  <Text>Female</Text>
                </Left>
                <Body>
                  <Radio
                     onPress={() => this.setState({ gender: 'Female' })}
                     selected={this.state.gender === 'Female'}
                  />
                </Body>
                <Left>
                  <Text>Male</Text>
                </Left>
                <Body>
                  <Radio
                  onPress={() => this.setState({ gender: 'Male' })}
                  selected={this.state.gender === 'Male'}
                  />
                </Body>
              </ListItem>
          </Form>

          <Button transparent info>
            <Text>Back</Text>
          </Button>
          <Button
            block
            onPress={() => this.postToWearerTable()}
          >
            <Text>Login</Text>
          </Button>
          <Text>OR</Text>
          <Button
            block bordered
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
