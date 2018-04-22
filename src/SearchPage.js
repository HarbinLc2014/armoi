import React, { Component } from 'react';
import { View, Text, Platform, Image, LayoutAnimation, TouchableOpacity, Dimensions, ScrollView, Keyboard, ListView, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { Header, Item, Icon, Input} from 'native-base';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class Search extends Component {
       state = { onSearch: false, isCross: true, isCancel: false, searchContent:'' };
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
       headerTitle:
<Header
style={{ width: SCREEN_WIDTH-80, height: 64, marginBottom: 18, backgroundColor:'rgba(0,0,0,0)', alignItems: 'center', justifyContent: 'center' }}
searchBar
rounded>
        <Item>
            <Icon name="ios-search" onPress={()=> console.log('asdasd')} />
            <Input
            autoCorrect={false}
              placeholder="Search"
              onFocus={()=>    { LayoutAnimation.easeInEaseOut(); navigation.state.params.onFocus(); }}
              onBlur={()=> {LayoutAnimation.easeInEaseOut(); navigation.state.params.onBlur();}}
              value={params? params.searchParam : ''}
              onChangeText={searchParam=>navigation.state.params.changeText(searchParam)}
            />
            {params? params.Enter? <Entypo name="cross" size={20} color='#000' style={{ marginTop: 2, marginRight: 5 }} onPress={()=> {LayoutAnimation.easeInEaseOut(); navigation.state.params.onClear();}}/> : null : null}
          </Item>
          {params? <TouchableOpacity onPress={()=> { Keyboard.dismiss(); LayoutAnimation.easeInEaseOut(); navigation.state.params.onBlur();}}><Text style={{ fontSize: 15, color: '#007aff', marginTop: 3, marginRight: -8, marginLeft: 8 }}>{params.focusParam}</Text></TouchableOpacity> : null}
          </Header>,
          headerRight:
            <TouchableOpacity style={{ marginRight: 10, marginLeft: -5 }} onPress={()=> navigation.state.params.onGo() }><Text style={{ fontSize: 17, color: '#007aff' }}>Go</Text></TouchableOpacity>,
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
 renderBrandRecommendation() {
   return (
     <View />
   );
 }
  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', zIndex: 0, position: 'absolute', width:SCREEN_WIDTH }}>
      {this.renderSearchHeader()}
      <Text>{this.state.onSearch? 'Searching' : 'not Searching'}</Text>
      {this.renderBrandRecommendation()}
      </ScrollView>
    );
  }
}

export default Search;
