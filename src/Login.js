import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, LayoutAnimation, TextInput, Alert} from 'react-native';
import { FormInput, Button, FormValidationMessage } from 'react-native-elements';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
var Parse = require('parse/react-native');
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
//Get your favorite AsyncStorage handler with import (ES6) or require
import { AsyncStorage } from 'react-native';
//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize("64bcfdfcfed7405051ff8b6eef1ac2f04d373923");
Parse.serverURL = 'http://18.188.130.178:80/parse';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class Login extends Component {
  state = { signup: true, email: '', password: '', code: '', loading: false, message: '' };
  componentWillUpdate() {
    LayoutAnimation.spring();
    LayoutAnimation.easeInEaseOut();
  }
  validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}
authorize() {
    this.setState({message: ''});
   const a = {props: this.props, state: this.state, setState: this.setState({loading: false}) };
   this.setState({loading: true});
   console.log('asdasdloading!');
   if(this.state.signup){
   var user = new Parse.User();
user.set("username", this.state.email);
user.set("password", this.state.password);
user.set("email", this.state.email);

// other fields can be set just like with Parse.Object
user.set("phone", "415-392-0202");
console.log(this.state.email);
console.log(this.state.password);
console.log(user);
 if(this.state.signup){
user.signUp(a, {
 success: function(user) {
   // Hooray! Let them use the app now.
   Parse.User.logIn(a.state.email, a.state.password, {
  success: function(user) {
  },
  error: function(user, error) {
    //Alert.alert(error.message);
  }
});
 },
 error: function(user, error) {
  // Alert.alert(error.message);
 }
}
).then(()=>{

  this.setState({loading: false});
  this.setState({message: ''});
  this.props.navigation.navigate('main');
}).catch((error)=>{

  this.setState({loading: false});
  this.setState({ message: error.message });
});
this.setState({email:'', password: ''});

}
}
else{
  const p = this.props;
  Parse.User.logIn(this.state.email, this.state.password, {
 success: function(user) {
   console.log('');
 },
 error: function(user, error) {
  // Alert.alert(error.message);
 }
}).then(()=>{
  this.setState({loading: false});
  this.setState({ message: '' });
  this.props.navigation.navigate('main');
  Parse.User.currentAsync().then(()=> {

  });

}
).catch((error)=>{
  this.setState({loading: false});
    this.setState({ message: error.message });
});
this.setState({email: '', password: ''});


}

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
  renderLoading() {
    if(this.state.loading){
      return <View style={{position: 'absolute', width: SCREEN_WIDTH, height: SCREEN_HEIGHT, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}><Bubbles size={15} color="#000" /></View>;
    }

  }
  renderAuthorization() {
    if (this.state.signup) {
      return(
        <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 10 }}>
        <Icon
                      name='envelope-o'
                      color='rgba(0, 0, 0, 0.38)'
                      size={25}
                      style={{backgroundColor: 'transparent', marginTop: 6, marginLeft: 10}}
                    />

        <FormInput
               autoCorrect={false}
               containerStyle={{ width: 200, borderColor: '#000' }}
               inputStyle={{ borderColor: '#000', color: '#000' }}
               placeholder={'Email'}
                 value={this.state.email}
                 onChangeText={email => this.setState({ email })}
               />
        </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
               <SimpleIcon
                        name='lock'
                        color='rgba(0, 0, 0, 0.38)'
                        size={25}
                        style={{backgroundColor: 'transparent', marginTop: 6, marginLeft: 10}}
                      />

        <FormInput
               autoCorrect={false}
               containerStyle={{ width: 200, borderColor: '#000' }}
               inputStyle={{ borderColor: '#000', color: '#000' }}
               placeholder={'Password'}
               secureTextEntry
                 value={this.state.password}
                 onChangeText={password => this.setState({ password })}
               />
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 6 }}>
               <FormInput
                      autoCorrect={false}
                      containerStyle={{ width: 80, borderColor: '#000', marginLeft: 55 }}
                      inputStyle={{ borderColor: '#000', color: '#000' }}
                      placeholder={'SMS Code'}
                      secureTextEntry
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                      />
              <Button title="Send Email" buttonStyle={{ width: 80, height: 30, borderRadius: 10, marginTop: 5, marginLeft: 10 }} textStyle={{ fontSize: 10 }}/>
              </View>
        </View>
      );
    }
    return (
      <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 10 }}>
      <Icon
                    name='envelope-o'
                    color='rgba(0, 0, 0, 0.38)'
                    size={25}
                    style={{backgroundColor: 'transparent', marginTop: 6, marginLeft: 10}}
                  />
      <FormInput
             autoCorrect={false}
             containerStyle={{ width: 200, borderColor: '#000' }}
             inputStyle={{ borderColor: '#000', color: '#000' }}
             placeholder={'Email'}
               value={this.state.email}
               onChangeText={email => this.setState({ email })}
             />
             </View>
             <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', marginBottom: 10 }}>
                          <SimpleIcon
                                   name='lock'
                                   color='rgba(0, 0, 0, 0.38)'
                                   size={25}
                                   style={{backgroundColor: 'transparent', marginTop: 6, marginLeft: 10}}
                                 />
      <FormInput
             autoCorrect={false}
             containerStyle={{ width: 200, borderColor: '#000' }}
             inputStyle={{ borderColor: '#000', color: '#000' }}
             placeholder={'Password'}
             secureTextEntry
               value={this.state.password}
               onChangeText={password => this.setState({ password })}
             />
            </View>
      </View>
    );
  }
  render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
        source={require('../assets/armoilogo.png')}
        style={{ width:SCREEN_WIDTH, marginTop: -130 }}
        resizeMode='contain'
        />
        <View style={{ width: SCREEN_WIDTH-60, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginTop: -60 }}>
        {this.renderAuthorization()}
        </View>
        <Button title={this.state.signup? "Sign Up" : "Log In"} onPress={()=>{
                                    this.setState({loading: true});
                                     this.authorize();

                                  }
                                  } buttonStyle={{ borderRadius: 15, marginTop: 45, width: 150 }}/>
          <FormValidationMessage labelStyle={{ fontSize: 13 }} containerStyle={{ marginTop: 5 }}>{this.state.message}</FormValidationMessage>
        {this.renderReset()}
        {this.renderLoading()}
        <View style={{ width: SCREEN_WIDTH, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: SCREEN_HEIGHT-40 }}>
        <TouchableOpacity style={this.state.signup? Styles.style2 : Styles.style1} onPress={()=> {if(!this.state.signup){this.setState({message: ''});}   this.setState({signup: true});}}>
        <Text style={{ color: 'white' }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={this.state.signup? Styles.style1 : Styles.style2} onPress={()=> {if(this.state.signup){this.setState({message: ''});} this.setState({signup: false});}}>
        <Text style={{ color: 'white' }}>Log In</Text>
        </TouchableOpacity>
        </View>
        </View>
      );
  }
}

const Styles= {
  style1: {
     backgroundColor: 'rgba(0,0,0,0.5)',
     borderWidth: 0.5,
     borderColor: '#000',
     height: 40,
     width: SCREEN_WIDTH/2,
     justifyContent: 'center',
     alignItems: 'center'
  },
 style2: {
   backgroundColor: 'rgba(0,0,0,0.8)',
   borderWidth: 0.5,
   borderColor: '#000',
   height: 40,
   width: SCREEN_WIDTH/2,
   justifyContent: 'center',
   alignItems: 'center'
 }
}

export default Login;
