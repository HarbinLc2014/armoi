import React, { Component } from 'react';
import { View, Text, ImagePickerIOS, Platform, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker, Permissions } from 'expo';
import {SimpleLineIcons} from '@expo/vector-icons';
import MyToast from './component/MyToast';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class Setting extends Component {
    state = { picker: false, loading: false, image: null, status: null };

    askPermissionsAsync = async () => {
      await Permissions.askAsync(Permissions.CAMERA);
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      // you would probably do something to verify that permissions
      // are actually granted, but I'm skipping that for brevity
    };

    useLibraryHandler = async () => {
      await this.askPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: false,
      });
      this.setState({ image: result.uri });
      console.log(result);
    };

    useCameraHandler = async () => {
      await this.askPermissionsAsync();
      let image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: false,
      });
      this.setState({ image: image.uri });
    };


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
      <TouchableWithoutFeedback onPress={this.useLibraryHandler}>
      {this.renderContent()}
      </TouchableWithoutFeedback>
      </View>
        <Button buttonStyle={{ width: 250, backgroundColor: 'rgba(0,0,0,0.5)', height: 50, marginTop: 20, borderRadius: 10, borderColor: '#d1d1d1', borderWidth:0.1 }} title='Get Permission' textStyle={{ fontSize: 20, color: '#fff' }} />
  <Button buttonStyle={{ width: 250, backgroundColor: 'rgba(0,0,0,0.5)', height: 50, marginTop: 20, borderRadius: 10, borderColor: '#d1d1d1', borderWidth:0.1 }} title='Get My Size' textStyle={{ fontSize: 20, color: '#fff' }} onPress={()=>this.props.navigation.navigate('size', { image: this.state.image })}/>
      </View>
    );
  }

}

export default Setting;
