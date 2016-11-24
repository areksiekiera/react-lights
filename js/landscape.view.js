/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Share, {ShareSheet, Button} from 'react-native-share';

import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';

import { styles } from './styles'

// share button
export class ShareButton extends Component {

  // render
  render() {

    let shareImageBase64 = {
      message: this.props.gifUri,
     
    };
    

    return (
      <TouchableOpacity onPress={()=>{
          Share.open(shareImageBase64);
        }}>
        <Image 
          source={{uri: 'https://blueadmedia.com/img/projects/share.png'}} 
          style={{width: 50, height: 50}}>
        </Image>
      </TouchableOpacity>
    );
    
  }
}

// gif  page
export class LandscapeView extends Component {

  // render
  render() {
    var screen = Dimensions.get('window');

    let image = '';
    switch (this.props.mode){

        case 'start':
          // start image in landscape mode
          image = (<Image style={{width: 180, height: 180}} source={require('./../img/rotate.gif')} />);
          break;

        case 'loading':
          // loading gif
          image = (<Image style={{width: 160, height: 80}} source={require('./../img/load2.gif')} />);
          break;

        case 'gif':
          if (this.props.gifUri)
            // show gid 
            image = (
              <View style={[ styles.centred ]}>
                <Image style={{ width: screen.width*0.8, height: screen.width*0.8*0.515 }} source={{ uri: 'https://img.c52.io/asda202012dea.gif' }} />                
                <ShareButton gifUri={this.props.gifUri} ></ShareButton>
              </View>
            );

          else
            // if no gif show start page 
            image = (<Image style={{width: 180, height: 180}} source={require('./../img/rotate.gif')} />);
         
          break;
    }

    return (
      <View style={[ styles.container, styles.centred, styles.black ]}>

        { image }   

      </View>
    );
  }
}
