import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, Footer } from 'native-base';
import { Auth, API } from 'aws-amplify';

export default class LoginDevice extends Component {

  static navigationOptions = {
    title: 'LoginDevice',
  };

  state = {
    deviceId: '',
    gdata: ''
  }

  async searchForDevices(DevicesId) {
    await API.get('IoTDataTableCRUD', `/IoTDataTable/${DevicesId}`)
      .then(data => this.setState({ gdata: data }))
      .catch(err => console.log('err', err.response));
  }

  checkdata(data) {
    if (data.length > 0) {
      this.props.navigation.navigate('RegisterWearer');
    } else {
      console.log('not found');
    }
  }

  render() {
    return (
      <Container>

        <Content>
          <Form>
            <Item floatingLabel last>
              <Label>DeviceID</Label>
              <Input
                value={this.state.deviceId}
                onChangeText={value => this.setState({ deviceId: value })}
              />
            </Item>
          </Form>

          <Button
            block
            onPress={() => this.searchForDevices(this.state.deviceId).then(this.checkdata(this.state.gdata))}
          >
            <Text>Login</Text>
          </Button>

        </Content>

      </Container>
    );
  }
}
