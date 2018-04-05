var Parse = require('parse/react-native');
//Get your favorite AsyncStorage handler with import (ES6) or require
import { AsyncStorage } from 'react-native';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize("64bcfdfcfed7405051ff8b6eef1ac2f04d373923");
Parse.serverURL = 'http://18.188.130.178:80/parse';

export function auth = () => {
  console.log("start authorizing....");

}
