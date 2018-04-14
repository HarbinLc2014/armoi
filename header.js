title: params? params.otherParam : 'Screen',
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
<Image source={require('../assets/armoilogo2.png')} resizeMode='stretch' style={{ width: 35, height: 35, marginTop: 2, marginBottom: 5, marginLeft: 5, marginRight: 9 }} onPress={()=>navigation.state.params.onMenu()}/>
