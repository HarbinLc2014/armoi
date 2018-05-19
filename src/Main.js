import React, { Component } from 'react';
import { ActivityIndicator, View, Text, Platform, Image, LayoutAnimation, TouchableOpacity, Dimensions, ScrollView, Keyboard, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
import FastImage from 'react-native-fast-image';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { Header, Item, Icon, Input} from 'native-base';
import { AppLoading, Asset, Font, Expo } from 'expo';
import MyBanner from './component/MyBanner';
import Brands from '../assets/brand.json';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;
const images = [
      require('../assets/Logo/abiandjoseph.png'),
      require('../assets/Logo/bassike.png'),
      require('../assets/Logo/ellery.png'),
       require('../assets/Logo/oscarandwild.png'),
       require('../assets/Logo/aje.png'),
       require('../assets/Logo/bnkr.png'),
       require('../assets/Logo/camillaandmarc.jpg'),
       require('../assets/Logo/christopheresber.jpg'),
       require('../assets/Logo/cmeocollective.png'),
       require('../assets/Logo/dionlee.jpg'),
       require('../assets/Logo/finderskeepersthelabel.png'),
       require('../assets/Logo/firstbase.png'),
       require('../assets/Logo/images_logo.png'),
       require('../assets/Logo/kitx.jpg'),
       require('../assets/Logo/loverthelabel.png'),
       require('../assets/Logo/shemademe.png'),
       require('../assets/Logo/oscarandwild.png'),
       require('../assets/Logo/shopbop.png'),
       require('../assets/Logo/oscarandwild.png'),
       require('../assets/Logo/yogipeaceclub.png'),
       require('../assets/Logo/sirthelabel.jpg'),
       require('../assets/Logo/pe-nation.png')
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

class Main extends Component {
       state = { appIsReady: false, list: Brands, list2: [{id:1, desc:'身体保养', src: require('../assets/Logos/health.jpg')},{id:2, desc: '内脏调理', src: require('../assets/Logos/heart.jpg')},{id:3, desc: '免疫增强', src: require('../assets/Logos/免疫力.jpg')},{id:4, desc: '微量元素', src: require('../assets/Logos/center.jpeg')},
       {id:5, desc: '女性专栏', src: require('../assets/Logos/women.png')},{id:6, desc: '澳洲食品', src: require('../assets/Logos/snack.jpg')}], isEnd: false, onSearch: false, isCross: true, isCancel: false, searchContent:'', refreshing: false, loading: true, loadText: ''};

       async _loadAssetsAsync() {
         const imageAssets = cacheImages(images);

             await Promise.all([...imageAssets]);
         this.setState({appIsReady: true});
       }
  static navigationOptions = (props) => {

   const { navigation } = props;
   const { params } = navigation.state;
   const { navigate } = navigation;
  const cross = params? <Entypo name="cross" size={20} color='#fff' style={{ marginTop: 2, marginRight: 5 }} /> : <Text />;
  const cancel =  <TouchableOpacity style={{ marginTop: 17, marginRight: 10, marginLeft: 10 }}><Text style={{ fontSize: 15, color: '#007aff' }}>Cancel</Text></TouchableOpacity>;
   return {
     title: 'My Home',
     tabBarIcon: ({ tintColor }) => {
         return <Foundation name="social-myspace" size={30} color={tintColor} />;
       },
       headerTitle: "澳洲代购小店",
     headerStyle: {
       marginTop: Platform.OS === 'android' ? 24 : 0,
       height: 45
     },

    headerLeft:
      <TouchableOpacity onPress={()=>navigation.state.params.onMenu()}>
      <Image source={require('../assets/armoilogo2.png')} resizeMode='stretch' style={{ width: 35, height: 35, marginTop: 2, marginBottom: 5, marginLeft: 5, marginRight: 9 }}/>
      </TouchableOpacity>

   };
 }
 componentWillMount() {
   this._loadAssetsAsync();
   this.props.navigation.setParams({
        onFocus: this.onSearch.bind(this),
        onBlur: this.offSearch.bind(this),
        changeText: this.changeText.bind(this),
        onGo: this.search.bind(this),
        onClear: this.clear.bind(this),
        onMenu: this.onMenu.bind(this)
    });
 }
 onMenu() {
   this.props.navigation.navigate("DrawerOpen");
 }
 clear() {
      this.props.navigation.setParams({ searchParam: '', Enter: false });
 }
 search() {
   console.log(this.state.searchContent);
 }
 renderCancel() {
   return <TouchableOpacity style={{ marginTop: 17, marginRight: 10, marginLeft: 10 }} onPress={()=>Keyboard.dismiss()} ><Text style={{ fontSize: 15, color: '#007aff' }}>Cancel</Text></TouchableOpacity>
 }
 changeText =(text)=> {
   this.props.navigation.setParams({ searchParam: text });
   if(text===''){
     this.props.navigation.setParams({ Enter: false });
   }
   else {
     this.props.navigation.setParams({ Enter: true });
   }
   this.setState({searchContent: text});
 }
 onSearch() {
   this.props.navigation.setParams({focusParam: 'Cancel'});
   this.setState({ onSearch: true, isCancel: true });
 }
 offSearch() {
   this.props.navigation.setParams({focusParam: ''});
   this.setState({ onSearch: false });
 }
 async refresh() {
   this.isEnd=false;
   this.setState({refreshing: true});
   try {
  await this.refs.banner.refresh();
 } finally {
   this.setState({refreshing: false});
 }
 }
 nextPage() {

 }
 renderSearchHeader() {
      LayoutAnimation.easeInEaseOut();
   if(this.state.searchContent!='' && this.state.onSearch) {
   return <View style={{ top: 0, width: SCREEN_WIDTH-10, height: 300, zIndex: 1, position: 'absolute', backgroundColor: '#fff',elevation: 20, justifyContent: 'center', alignItems: 'center',
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5 }}>

        <Text style={{ fontSize: 35, color: '#d1d1d1', fontWeight: 'bold',  shadowOffset: {width: 0, height: 0},
          shadowColor: 'black',
          shadowOpacity: 1,
          shadowRadius: 2 }}>No Search Result</Text>

        </View>;
 }
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
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', zIndex: 0, position: 'absolute', width:SCREEN_WIDTH }}>
      {this.renderSearchHeader()}
      <FlatList ref="flatlist"
      style={{ backgroundColor: '#fff' }}
       refreshing={this.state.refreshing}
       numColumns={2}
       onRefresh={()=>this.refresh()}
       onEndReached={()=>this.nextPage()}
       ListHeaderComponent={
         <View>
         <MyBanner ref="banner" />
         <View style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: '#fff', paddingLeft: 10 }}>
         </View>
         </View>
       }
       renderItem={({ item, index })=>
            <TouchableOpacity onPress={()=>
              this.props.navigation.navigate('Details', {
                            item: item,
                          })
            }>
            <View style={{ marginTop: index>1?20:0, marginLeft:  index%2===1 ? 10:0 , marginRight:  index % 2 === 0 ? 10:0, justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH/2-10, borderRadius: 10, height: SCREEN_WIDTH/2-10, backgroundColor: 'rgba(0,0,0,0)' }}>
            <FastImage source={item.src} resizeMode='contain' style={{ width: SCREEN_WIDTH/2-40, height: SCREEN_WIDTH/2-40 }}/>
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold' }}>{item.code}</Text>
            </View>
            </TouchableOpacity>
        }
       ListFooterComponent={<View style={{ backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}><Text style={{ fontSize: 20, textAlign: 'center', color: '#fff', width: SCREEN_WIDTH }}>{this.state.loadText}</Text></View>}
       onScroll={(e)=>this._onScroll(e.nativeEvent)}
       scrollEventThrottle={1}
       keyExtractor={(brand)=>brand.id}
       data={this.state.list}
      />
      <View style={{marginTop: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: '#fff', paddingLeft: 10, width: SCREEN_WIDTH }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>其它分类</Text>
      </View>
      <FlatList ref="flatlist2"
        style={{ backgroundColor: '#fff' }}
        refreshing={this.state.refreshing}
        onRefresh={()=>this.refresh()}
        onEndReached={()=>this.nextPage()}
        horizontal
        renderItem={({ item, index })=>
             <TouchableOpacity>
             <View style={{ marginTop: 10, marginBottom: 20, marginLeft: index===0 ? 20:0, marginRight: 20, justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH/4+80, borderRadius: 10, height: SCREEN_WIDTH/4, backgroundColor: 'rgba(0,0,0,0)' }}>
              <FastImage source={item.src} resizeMode='contain' style={{ width: SCREEN_WIDTH/4+80, height: SCREEN_WIDTH/4 }}/>
              <Text style={{ fontSize: 13, textAlign: 'center', fontWeight: 'bold', marginTop: 12, marginBottom: 15 }}>{item.desc}</Text>
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

export default Main;
