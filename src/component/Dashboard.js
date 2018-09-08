import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Dashboard
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
