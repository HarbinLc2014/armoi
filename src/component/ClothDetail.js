import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { AppLoading, Asset, Font, Expo } from 'expo';
import FastImage from 'react-native-fast-image';
import ClothModal from './ClothModal';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;
const images = [
  require('../../assets/suit/1.jpg'),
  require('../../assets/suit/2.jpg'),
  require('../../assets/suit/3.jpg'),
  require('../../assets/suit/4.jpg'),
  require('../../assets/suit/5.jpg'),
  require('../../assets/suit/6.jpg'),
  require('../../assets/suit/7.jpg'),
  require('../../assets/suit/8.jpg'),
  require('../../assets/suit/9.jpg'),
  require('../../assets/suit/10.jpg'),
  require('../../assets/suit/11.jpg'),
  require('../../assets/suit/12.jpg'),
  require('../../assets/suit/13.jpg'),
  require('../../assets/suit/14.jpg'),
  require('../../assets/suit/15.jpg'),
  require('../../assets/suit/16.jpg'),
  require('../../assets/suit/17.jpg'),
  require('../../assets/suit/18.jpg'),
  require('../../assets/suit/19.jpg'),
  require('../../assets/suit/21.jpg'),
  require('../../assets/suit/22.jpg'),
  require('../../assets/suit/23.jpg'),
  require('../../assets/suit/24.jpg'),
  require('../../assets/suit/25.jpg'),
  require('../../assets/suit/26.jpg'),
];

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

class ClothDetail extends Component {
  state = {appIsReady: false, item: {id: '123'}, visible: false, refreshing: false, inEnd: true, list2: [{id:1, src: require('../../assets/suit/1.jpg')},{id:2, src: require('../../assets/suit/2.jpg')},{id:3, src: require('../../assets/suit/3.jpg')},{id:4, src: require('../../assets/suit/4.jpg')},
  {id:5, src: require('../../assets/suit/5.jpg')},{id:6, src: require('../../assets/suit/6.jpg')},{id:7, src: require('../../assets/suit/7.jpg')},{id:8, src: require('../../assets/suit/8.jpg')}],
  list1: [{id:1, src: require('../../assets/suit/9.jpg')},{id:2, src: require('../../assets/suit/10.jpg')},{id:3, src: require('../../assets/suit/11.jpg')},{id:4, src: require('../../assets/suit/12.jpg')},
  {id:5, src: require('../../assets/suit/13.jpg')},{id:6, src: require('../../assets/suit/14.jpg')},{id:7, src: require('../../assets/suit/15.jpg')},{id:8, src: require('../../assets/suit/16.jpg')}]
 };
 async _loadAssetsAsync() {
   const imageAssets = cacheImages(images);

       await Promise.all([...imageAssets]);
   this.setState({appIsReady: true});
 }
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
    if (!this.state.appIsReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ appIsReady: true })}
          onError={console.warn}
        />
      );
    }
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
