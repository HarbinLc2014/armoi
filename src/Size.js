import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

class Size extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{uri: this.props.navigation.state.params.image}} style={{ width: 200, height: 200 }} />
      <Text style={{ marginTop: 50, marginBottom: 50 }}>Here is your size fit</Text>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Text>Chest: 40 in</Text>
      <Text>Waist: 34 in</Text>
      <Text>Hips: 36 in</Text>
      </View>
      <Text style={{ marginTop: 50, marginBottom: 50 }}>Here are some of the recommended brand!</Text>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('recommend')}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontWeight:'bold', fontSize: 25, color: 'red', marginRight: 15 }}>COTTON:ON</Text>
      <Text style={{ fontWeight:'200', fontSize: 22, color: 'black' }}>DAVID JONES</Text>
      </View>
      </TouchableOpacity>
      </View>
    );
  }
}

export default Size;
