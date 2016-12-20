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

import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles'

// share button
export class ShareButton extends Component {

  // render
  render() {

      return (
        <TouchableOpacity 
          style={ styles.shareBtn }
          onPress={()=>{
            Share.open({ url: this.props.gifBase64 })
          }}>

            <Image style={{ width: 50, height: 50 }} source={ require('./../img/share2.png') } />

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
          image = (<Image style={{width: screen.width*0.2, height: screen.width*0.2*0.98}} source={require('./../img/rotate.gif')} />);
          break;

        case 'loading':
          // loading gif
          image = (
            <View>
              <Image 
                style={{width: screen.width*0.3, height: screen.width*0.3*0.412}} 
                source={require('./../img/load2.gif')} />
            </View>
            );
          break;

        case 'gif':
          if (this.props.gifBase64)
            // final gif
            image = (
              <View style={[ styles.centred ]}>

                <Image 
                  style={{ width: screen.width*0.8, height: screen.width*0.8*0.515 }} 
                  source={{ uri: this.props.gifBase64 }} 
                  defaultSource={ require('./../img/on.png' )} >    

                  <ShareButton 
                    gifBase64={ this.props.gifBase64 } >
                  </ShareButton>
                 
                </Image>

              </View>
            );

          else
            // start gif
            image = (
              <View style={[ styles.centred ]}>

                <Image 
                  style={{ width: screen.width*0.8, height: screen.width*0.8*0.515 }} 
                  source={ require('./../img/on.png') } />

              </View>
            );
         
          break;
    }

    return (
      <View style={[ styles.container, styles.centred, styles.black ]}>

        { image }   

      </View>
    );
  }
}
