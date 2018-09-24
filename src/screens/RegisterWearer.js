import React, { Component } from 'react';
import { Container,
        Content,
        Form,
        Item,
        Input,
        Label,
        Button,
        Text,
        DatePicker }
        from 'native-base';

export default class RegisterWearer extends Component {

  static navigationOptions = {
    title: 'RegisterWearer',
  };

  state = {
      name: '',
      lastname: '',
      congenital_disease: '',
      gender: '',
      DOB: ''
  };

  setDate(newDate) {
    this.setState({ DOB: newDate });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel last>
              <Label>Name</Label>
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
            <Item floatingLabel last>
              <Label>gender</Label>
              <Input
                value={this.state.gender}
                onChangeText={value => this.setState({ gender: value })}
              />
            </Item>
            <Item floatingLabellast>
              <Label>congenital disease</Label>
              <Input
                value={this.state.congenital_disease}
                onChangeText={value => this.setState({ congenital_disease: value })}
              />
            </Item>
            <Label>Date of Birth</Label>
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(1900, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select date"
              textStyle={{ color: 'green' }}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={this.setDate.bind(this)}
            />
          </Form>

          <Button transparent info>
            <Text>Back</Text>
          </Button>
          <Button
            block
            onPress={() => console.log(this.state)}
          >
            <Text>Log</Text>
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
