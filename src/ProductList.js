import React, { Component } from 'react';
import { View, Text, FlatList, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { AppLoading, Asset, Font, Expo } from 'expo';
import FastImage from 'react-native-fast-image';
import products from './Info.js';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;
const images = [
  require('../assets/Product/swissewomentablets.png'),
  require('../assets/Product/swissewomenpowertablets.png')
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
class ProductList extends Component {
  state = {list:[], appIsReady: false};
  async _loadAssetsAsync() {
    const imageAssets = cacheImages(images);

        await Promise.all([...imageAssets]);
    this.setState({appIsReady: true});
  }
  componentWillMount() {
    this._loadAssetsAsync();
    this.setState({list:products.products});
  }
  render() {
    if (!this.state.appIsReady) {
      return (
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color='rgba(0,0,0,0.6)' />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList ref="flatlist"
      style={{ backgroundColor: '#fff' }}
       numColumns={2}
       ListHeaderComponent={
         <View style={{ height: 30 }}>
         </View>
       }
       renderItem={({ item, index })=>
            <TouchableOpacity style={{ marginTop: 35, marginBottom: 35 }}>
            <View style={{ marginTop: index>1?20:0, marginLeft:  index%2===1 ? 10:0 , marginRight:  index % 2 === 0 ? 10:0, justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH/2-10, borderRadius: 10, height: SCREEN_WIDTH/2+40, backgroundColor: 'rgba(0,0,0,0)' }}>
            <FastImage source={item.src} resizeMode='contain' style={{ width: SCREEN_WIDTH/2-40, height: SCREEN_WIDTH/2+40, marginTop: 40 }}/>
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        }
       data={this.state.list}
      />
      </View>
    );
  }
}

export default ProductList;
