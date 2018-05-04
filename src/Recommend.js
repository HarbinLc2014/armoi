import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class Recommend extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH }}>
      <Text style={{ fontWeight:'bold', fontSize: 25, color: 'red', marginBottom: 40 }}>COTTON:ON</Text>
      <Text style={{ marginBottom: 8 }}>Nearest store: ------------</Text>
      <Text style={{ marginBottom: 8 }}>Cost: $120</Text>
      <Text style={{ marginBottom: 8 }}>Delivery: Free over $55</Text>
      </View>
      <Text style={{ marginBottom: 45, marginTop: 45 }}>Browse your favorite</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', width: SCREEN_WIDTH, alignItems: 'center' }}>
      <Image source={require('../assets/suit/1.jpg')} style={{ width: 180, height: 300, marginRight: 14, marginLeft: 13 }} />
      <Image source={require('../assets/suit/2.jpg')} style={{ width: 180, height: 300, marginRight: 13 }} />
      </View>
      </View>
    );
  }
}

export default Recommend;
