import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native';
const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class ClothDetail extends Component {
  state = { refreshing: false, inEnd: true, list2: [{id:1, src: require('../../assets/Logo/images_logo.png')},{id:2, src: require('../../assets/Logo/cmeocollective.png')},{id:3, src: require('../../assets/Logo/finderskeepersthelabel.png')},{id:4, src: require('../../assets/Logo/christopheresber.jpg')},
  {id:5, src: require('../../assets/Logo/camillaandmarc.jpg')},{id:6, src: require('../../assets/Logo/shemademe.png')},{id:7, src: require('../../assets/Logo/shopbop.png')},{id:8, src: require('../../assets/Logo/kitx.jpg')}] };
  onRefresh() {

  }
  nextPage() {

  }
  render() {
    const { params } = this.props.navigation.state;
    const item = params ? params.item : null;
    return (
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH, height: 170, backgroundColor: '#fff' }}>
      <Image source={item.src} resizeMode='contain' resizeMethod='scale' style={{ height: 160, width: SCREEN_WIDTH }} />
      </View>
      <View style={{backgroundColor: '#fff', paddingTop: 30, paddingBottom: 10, paddingLeft: 10, width: SCREEN_WIDTH }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>New Product</Text>
      </View>
      <FlatList ref="flatlist2"
        style={{ backgroundColor: '#fff', borderBottomWidth: 1 }}
        refreshing={this.state.refreshing}
        onRefresh={()=>this.refresh()}
        onEndReached={()=>this.nextPage()}
        horizontal
        renderItem={({ item, index })=>
             <TouchableOpacity>
             <View style={{ marginTop: 10, marginBottom: 20, marginLeft: index===0 ? 20:0, marginRight: 20, justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH/4+80, borderRadius: 10, height: SCREEN_WIDTH/4, backgroundColor: 'rgba(0,0,0,0)' }}>
              <Image source={item.src} resizeMethod='scale' resizeMode='contain' style={{ width: SCREEN_WIDTH/3, height: SCREEN_WIDTH/3 }}/>
             </View>
             </TouchableOpacity>
         }
      keyExtractor={(brand)=>brand.id}
      data={this.state.list2}
      />
      <View style={{backgroundColor: '#fff', paddingTop: 30, paddingBottom: 10, paddingLeft: 10, width: SCREEN_WIDTH, borderBottomWidth: 0.2 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Hot Sale</Text>
      </View>
      <FlatList ref="flatlist2"
        style={{ backgroundColor: '#fff', borderBottomWidth: 1 }}
        refreshing={this.state.refreshing}
        onRefresh={()=>this.refresh()}
        onEndReached={()=>this.nextPage()}
        horizontal
        renderItem={({ item, index })=>
             <TouchableOpacity>
             <View style={{ marginTop: 10, marginBottom: 20, marginLeft: index===0 ? 20:0, marginRight: 20, justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH/4+80, borderRadius: 10, height: SCREEN_WIDTH/4, backgroundColor: 'rgba(0,0,0,0)' }}>
              <Image source={item.src} resizeMethod='scale' resizeMode='contain' style={{ width: SCREEN_WIDTH/3, height: SCREEN_WIDTH/3 }}/>
             </View>
             </TouchableOpacity>
         }
      keyExtractor={(brand)=>brand.id}
      data={this.state.list2}
      />
      </ScrollView>
    );
  }
}

export default ClothDetail;
