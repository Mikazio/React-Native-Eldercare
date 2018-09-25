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

export default class RegisterWearer extends Component {

  static navigationOptions = {
    title: 'RegisterWearer',
  };

  state = {
      name: '',
      lastname: '',
      congenital_disease: '',
      gender: 'Male',
      DOB: ''
  };

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
            onPress={() => this.props.navigation.navigate('Home')}
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
