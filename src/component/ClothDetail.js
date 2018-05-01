import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import ClothModal from './ClothModal';
const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class ClothDetail extends Component {
  state = {item: {id: '123'}, visible: false, refreshing: false, inEnd: true, list2: [{id:1, src: require('../../assets/suit/1.jpg')},{id:2, src: require('../../assets/suit/2.jpg')},{id:3, src: require('../../assets/suit/3.jpg')},{id:4, src: require('../../assets/suit/4.jpg')},
  {id:5, src: require('../../assets/suit/5.jpg')},{id:6, src: require('../../assets/suit/6.jpg')},{id:7, src: require('../../assets/suit/7.jpg')},{id:8, src: require('../../assets/suit/8.jpg')}],
  list1: [{id:1, src: require('../../assets/suit/9.jpg')},{id:2, src: require('../../assets/suit/10.jpg')},{id:3, src: require('../../assets/suit/11.jpg')},{id:4, src: require('../../assets/suit/12.jpg')},
  {id:5, src: require('../../assets/suit/13.jpg')},{id:6, src: require('../../assets/suit/14.jpg')},{id:7, src: require('../../assets/suit/15.jpg')},{id:8, src: require('../../assets/suit/16.jpg')}]
 };
  onRefresh() {

  }
  nextPage() {

  }
  onCancel() {
    this.setState({ visible: false });
  }
  showModal(item) {
    console.log(item.id);
    this.setState({visible: true, item: item});
  }
  render() {
    const { params } = this.props.navigation.state;
    const item = params ? params.item : null;
    return (
      <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH, height: 170, backgroundColor: '#fff' }}>
      <Image source={item.src} resizeMode='contain' resizeMethod='scale' style={{ height: 160, width: SCREEN_WIDTH }} />
      </View>
      <View style={{backgroundColor: '#fff', paddingTop: 30, paddingBottom: 10, paddingLeft: 10, width: SCREEN_WIDTH }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>New Product</Text>
      </View>
      <FlatList ref="flatlist2"
        style={{ backgroundColor: '#fff', paddingTop: 20, paddingBottom: 5 }}
        refreshing={this.state.refreshing}
        onRefresh={()=>this.refresh()}
        onEndReached={()=>this.nextPage()}
        horizontal
        renderItem={({ item, index })=>
             <TouchableOpacity onPress={()=>this.showModal(item)}>
             <View style={{ marginTop: 10, marginBottom: 20, marginLeft: index===0 ? 20:0, marginRight: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', borderRadius: 4, marginBottom: 10 }}>
              <Image source={item.src} resizeMethod='scale' resizeMode='contain' style={{ width: SCREEN_WIDTH/3, height: SCREEN_WIDTH/3 }}/>
             </View>
             </TouchableOpacity>
         }
      keyExtractor={(brand)=>brand.id}
      data={this.state.list1}
      />
      <View style={{backgroundColor: '#fff', paddingTop: 30, paddingBottom: 10, paddingLeft: 10, width: SCREEN_WIDTH }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Hot Sale</Text>
      </View>
      <FlatList ref="flatlist2"
        style={{ backgroundColor: '#fff', paddingTop: 20, paddingBottom: 30 }}
        refreshing={this.state.refreshing}
        onRefresh={()=>this.refresh()}
        onEndReached={()=>this.nextPage()}
        horizontal
        renderItem={({ item, index })=>
             <TouchableOpacity onPress={()=>this.showModal(item)}>
             <View style={{ marginTop: 10, marginBottom: 20, marginLeft: index===0 ? 20:0, marginRight: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0)', borderRadius: 4, borderColor: '#d1d1d1' }}>
              <Image source={item.src} resizeMethod='scale' resizeMode='contain' style={{ width: SCREEN_WIDTH/3, height: SCREEN_WIDTH/3 }}/>
             </View>
             </TouchableOpacity>
         }
      keyExtractor={(brand)=>brand.id}
      data={this.state.list2}
      />
            <ClothModal visible={this.state.visible} item={this.state.item} cancel={this.onCancel.bind(this)} ></ClothModal>
      </ScrollView>
    );
  }
}

export default ClothDetail;
