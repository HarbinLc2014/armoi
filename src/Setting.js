import React, { Component } from 'react';
import { View, Text, ImagePickerIOS, Platform, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import {SimpleLineIcons} from '@expo/vector-icons';
import MyToast from './component/MyToast';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class Setting extends Component {

  state = { picker: false, loading: false, image: null };
  renderContent() {
    if(!this.state.image) {
      return(
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <SimpleLineIcons name="camera" size={100} color='#d1d1d1' />
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#d1d1d1', textAlign: 'center', marginTop: 20 }}>Upload your image here</Text>
        </View>
      );
    }
    return (
      <ImageBackground source={{ uri: this.state.image }} resizeMode="cover" resizeMethod="scale" style={{ height: 500, width: SCREEN_WIDTH-50 }} />
    );
  }
  render() {
    let { image } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ borderRadius: 1, borderColor:'#d1d1d1', borderWidth: 2, height: 500, width: SCREEN_WIDTH-50, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableWithoutFeedback onPress={this.renderPicker}>
      {this.renderContent()}
      </TouchableWithoutFeedback>
      </View>
      </View>
    );
  }
  renderPicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

export default Setting;
