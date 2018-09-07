import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import CardDetails from './CardDetails';


class CardList extends Component {
  state = { datas: [] };   //How declear state init state not for modification

  componentDidMount() {
    axios.get('https://on3ae7ainf.execute-api.ap-southeast-1.amazonaws.com/default/EldercareCRUD')
      .then(response => this.setState({ datas: response.data.Items }));
  }

  renderData() {
    return this.state.datas.map(data =>
      <CardDetails key={data.DeviceId} data={data} />
    );
  }

  render() {
    return (
      <ScrollView style={styles.viewContainerStyle}>
        {this.renderData()}
      </ScrollView>
    );
  }
}

const styles = {
  viewContainerStyle: {
    backgroundColor: '#ddd'
  }
};

export default CardList;
