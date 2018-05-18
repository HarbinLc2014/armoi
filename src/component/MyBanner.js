import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class MyBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [{id:1, src: require('../../assets/Logo/abiandjoseph.png')},{id:2, src: require('../../assets/Logo/bassike.png')},{id:3, src: require('../../assets/Logo/ellery.png')},{id:4, src: require('../../assets/Logo/oscarandwild.png')}],
      quicks: [{id:'KiTx', src: require('../../assets/Logo/kitx.jpg')},{id:'yogipeaceclub', src: require('../../assets/Logo/yogipeaceclub.png')},{id:'SIR.', src: require('../../assets/Logo/sirthelabel.jpg')},{id:'dionlee', src: require('../../assets/Logo/dionlee.jpg')}],
      status: false,
    }
  }
  componentDidMount() {

  }
  async refresh() {
    this.setState({
      list: [],
      quick: []
    })
  }
  render() {
    return(
      <View>
      {this.state.banners.length===1 && <TouchableOpacity
      onPress={()=> this.onPressRow(this.state.banners[0])}>
      <View style={{ width: SCREEN_WIDTH-150, height: 200, justifyContent: 'center', alignItems: 'center' }}>
      <FastImage style={{
        width: SCREEN_WIDTH-150, height: 200
      }} source={require('../../assets/armoilogo.png')} resizeMode="contain" resizeMethod="scale"
      />
      </View>
      </TouchableOpacity>
      }
      {this.state.banners.length>1 && <View
        style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
        <Swiper autoplay={true} >
          {this.state.banners.map((item, index) => <View key={index} style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
            <FastImage resizeMode="cover" resizeMethod="scale"
              source={item.src}
              style={{ width: SCREEN_WIDTH-50, height: 100 }}
            />
          </View>)
          }
        </Swiper>
        </View>}
        {this.state.quicks.length > 0 &&
          <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginLeft: 12, marginRight: 12, marginTop: -15, marginBottom: 15, borderRadius: 10, borderWidth: 0.5, borderColor: '#d1d1d1', height: 100, width: SCREEN_WIDTH-24 }} >
            {this.state.quicks.map((item, index) => <TouchableOpacity key={index} style={{ flexDirection: 'column', width: (SCREEN_WIDTH-24)/4, height: 100, justifyContent: 'center', alignItems: 'center', padding: 15 }}>
            <FastImage resizeMode="contain" resizeMethod="scale"
              source={item.src}
              style={{ width: (SCREEN_WIDTH-24)/4-30, height: (SCREEN_WIDTH-24)/4-30 }}
            />
          </TouchableOpacity>)
        }
          </View>
        }
      </View>
      );
    }
}

export default MyBanner;
