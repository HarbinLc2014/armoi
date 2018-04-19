import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MyToast from './component/MyToast';

class Setting extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyToast />
      </View>
    );
  }
}

export default Setting;
