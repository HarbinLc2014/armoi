import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, LayoutAnimation, TextInput } from 'react-native';
import { FormInput, Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class Login extends Component {
  state = { signup: true, email: '', password: '', code: '' };
  componentWillUpdate() {
    LayoutAnimation.spring();
    LayoutAnimation.easeInEaseOut();
  }
  validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}
  renderReset() {
    if(!this.state.signup){
      return (
        <TouchableOpacity>
        <Text style={{ marginTop: 10, color: '#007aff' }}>Forgot password?</Text>
        </TouchableOpacity>
      );
    }
  }
  renderAuthorization() {
    if (this.state.signup) {
      return(
        <View>
        <FormInput
        icon={
  <Icon
    name='envelope-o'
    color='rgba(0, 0, 0, 0.38)'
    size={25}
    style={{backgroundColor: 'transparent'}}
  />
}
               autoCorrect={false}
               containerStyle={{ width: 250, borderColor: '#000' }}
               inputStyle={{ borderColor: '#000', color: '#000' }}
               placeholder={'Email'}
                 value={this.state.email}
                 onChangeText={email => this.setState({ email })}
               />
        <FormInput
               autoCorrect={false}
               containerStyle={{ width: 250, borderColor: '#000' }}
               inputStyle={{ borderColor: '#000', color: '#000' }}
               placeholder={'Password'}
               secureTextEntry
                 value={this.state.password}
                 onChangeText={password => this.setState({ password })}
               />
               <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
               <FormInput
                      autoCorrect={false}
                      containerStyle={{ width: 140, borderColor: '#000' }}
                      inputStyle={{ borderColor: '#000', color: '#000' }}
                      placeholder={'SMS Code'}
                      secureTextEntry
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                      />
              <Button title="Send Email" buttonStyle={{ width: 80, height: 30, borderRadius: 10, marginTop: 2 }} textStyle={{ fontSize: 10 }}/>
              </View>
        </View>
      );
    }
    return (
      <View>
      <FormInput
      icon={
<Icon
  name='envelope-o'
  color='rgba(0, 0, 0, 0.38)'
  size={25}
  style={{backgroundColor: 'transparent'}}
/>
}
             autoCorrect={false}
             containerStyle={{ width: 250, borderColor: '#000' }}
             inputStyle={{ borderColor: '#000', color: '#000' }}
             placeholder={'Email'}
               value={this.state.email}
               onChangeText={email => this.setState({ email })}
             />
      <FormInput
             autoCorrect={false}
             containerStyle={{ width: 250, borderColor: '#000' }}
             inputStyle={{ borderColor: '#000', color: '#000' }}
             placeholder={'Password'}
             secureTextEntry
               value={this.state.password}
               onChangeText={password => this.setState({ password })}
             />
      </View>
    );
  }
  render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
        source={require('../assets/armoilogo.png')}
        style={{ width:SCREEN_WIDTH }}
        resizeMode='contain'
        />
        <View style={{ width: SCREEN_WIDTH-60, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
        {this.renderAuthorization()}
        </View>
        <Button title={this.state.signup? "Sign Up" : "Log In"} onPress={()=>this.props.navigation.navigate('main')} buttonStyle={{ borderRadius: 15, marginTop: 15, width: 150 }}/>
        {this.renderReset()}
        <View style={{ width: SCREEN_WIDTH, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: SCREEN_HEIGHT-40 }}>
        <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderWidth: 0.5, borderColor: '#000', height: 40, width: SCREEN_WIDTH/2, justifyContent: 'center', alignItems: 'center' }} onPress={()=> this.setState({signup: true})}>
        <Text style={{ color: 'white' }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderWidth: 0.5, borderColor: '#000', height: 40, width: SCREEN_WIDTH/2, justifyContent: 'center', alignItems: 'center' }} onPress={()=> this.setState({signup: false})}>
        <Text style={{ color: 'white' }}>Log In</Text>
        </TouchableOpacity>
        </View>
        </View>
      );
  }
}

export default Login;
