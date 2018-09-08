import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text } from 'native-base';
import Dashboard from './Dashboard.js';
import Profile from './Profile.js';

export default class WatchScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading={<TabHeading><Text>Dashboard</Text></TabHeading>}>
            <Dashboard />
          </Tab>
          <Tab heading={<TabHeading><Text>Profile</Text></TabHeading>}>
            <Profile />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
