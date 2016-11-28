/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles'

/// start page
export class PortraitView extends Component {

 
  // render
  render() {
    var screen = Dimensions.get('window');
    
    return (
      <Image 
        source={ require('./../img/bg7.png' )}  
        style={ styles.backgroundImage }>
        

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <View></View>
          <View></View>

          <View style={{ marginTop: 30, borderRadius: 16, borderColor: '#cc1400', borderWidth:0  }}>
              <TextInput 
                editable={true} 
                maxLength={20} 
                ref='_textInput'
                style={{ fontSize: 20, height: 50, width: screen.width*0.7, backgroundColor: 'rgba(0,0,0,0)', padding: 15, color: '#cc1400'}} 
                onChangeText={(msg) => this.props.onMessageInput({msg})} 
                />
          </View>

          <View></View>
          <View></View>

        </View>
        
      
      </Image>

    );
    
  }
}
