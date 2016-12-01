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
        source={ require('./../img/bg.png' )}  
        style={ styles.backgroundImage }>
        

        <View style={ styles.homeContainer }>
          
          <View></View>
          <View></View>

          <View style={ styles.homeTextContainer }>
              <TextInput 
                editable={true} 
                maxLength={20} 
                ref='_textInput'
                style={{ fontSize: 20, height: 50, width: screen.width*0.7, backgroundColor: 'rgba(0,0,0,0)', padding: 15, color: '#cc1400' }}
                onChangeText={(msg) => this.props.onMessageInput({msg})} />
          </View>

          <View></View>
          <View>
            <Text
              style={{ color: '#e72008', justifyContent: 'flex-end' }}
              >
              v1.2.7
            </Text>
          </View>

        </View>
        
      
      </Image>

    );
    
  }
}
