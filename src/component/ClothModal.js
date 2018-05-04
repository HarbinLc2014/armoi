import React, {Component} from 'react';
import { Text, View, Image, Modal,TouchableWithoutFeedback, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ClothModal extends Component {
  state = {id: '123'};
  componentWillMount() {
    this.setState({id: this.props.item.id});
  }
  render() {
    let a = this.props.item;
    console.log('a:');
    console.log(a);
    console.log(this.props.item);
    return (
        <Modal
            visible={this.props.visible}
            transparent
            animationType="slide"
            onRequestClose={() => {
            }}
        >

        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }} >
<TouchableWithoutFeedback onPress={this.props.cancel}><View style={{ width: SCREEN_WIDTH, height:135 }} /></TouchableWithoutFeedback>
<View style={{ flexDirection: 'row', width: SCREEN_WIDTH, height: SCREEN_HEIGHT-270 }}>
<TouchableWithoutFeedback onPress={this.props.cancel}><View style={{ width:35, height: SCREEN_HEIGHT-270 }} /></TouchableWithoutFeedback>

  <View style={{ flexDirection: 'column', width: SCREEN_WIDTH-70, height: SCREEN_HEIGHT-270, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderWidth: 0.5, borderColor: '#d1d1d1' }}>
          <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
  <Image source={this.props.item.src} resizeMethod='scale' resizeMode='contain' style={{ marginTop: 50, width: SCREEN_WIDTH-150, height: SCREEN_WIDTH-150 }}/>
  <Text style={{fontSize: 25, margin: 10 }}>Deep Color Suit</Text>
  <Text style={{fontSize: 22 }}>Price: $120</Text>
            </ScrollView>
  </View>
<TouchableWithoutFeedback onPress={this.props.cancel}><View style={{ width:35, height: SCREEN_HEIGHT-270 }} /></TouchableWithoutFeedback>
        </View>
<TouchableWithoutFeedback onPress={this.props.cancel}><View style={{ width: SCREEN_WIDTH, height:135 }} /></TouchableWithoutFeedback>
        </View>

        </Modal>
      );
  }
}

export default ClothModal;
