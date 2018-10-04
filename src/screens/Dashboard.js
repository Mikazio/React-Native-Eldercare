import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import CardDetails from '../component/CardDetails';
import CardList from '../component/CardList';

export default class Dashboard extends Component {

  static navigationOptions = {
    title: 'Dashboard',
  };

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <CardList>
                  <CardDetails />
                </CardList>  
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
