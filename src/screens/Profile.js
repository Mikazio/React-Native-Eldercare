import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

export default class Profile extends Component {

  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Name: {this.props.data.Name}
                </Text>
                <Text>
                   Lastname: {this.props.data.lastname}
                </Text>
                <Text>
                   Gender: {this.props.data.gender}
                </Text>
                <Text>
                   DeviceId: {this.props.data.DeviceId}
                </Text>
                <Text>
                   WearerId: {this.props.data.WearerId}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
