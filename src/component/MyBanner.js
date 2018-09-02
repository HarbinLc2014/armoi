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
      banners: [{id:1, src: require('../../assets/Logos/SwisseLogo.jpg')},{id:2, src: require('../../assets/Logos/BlackMoresLogo.jpg')},{id:3, src: require('../../assets/Logos/NatureswayLogo.jpg')},{id:4, src: require('../../assets/Logos/BioislandLogo.jpg')}],
      quicks: [{id:'KiTx', src: require('../../assets/Logos/1.png')},{id:'yogipeaceclub', src: require('../../assets/Logos/2.png')},{id:'SIR.', src: require('../../assets/Logos/3.png')},{id:'dionlee', src: require('../../assets/Logos/4.png')}],
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
      <Image style={{
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
            <Image resizeMode="cover" resizeMethod="scale"
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
            <Image resizeMode="contain" resizeMethod="scale"
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
