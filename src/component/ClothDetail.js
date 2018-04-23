import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ClothDetail extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const item = params ? params.item : null;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{item.id}</Text>
      </View>
    );
  }
}

export default ClothDetail;
