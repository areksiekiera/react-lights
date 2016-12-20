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
        source={ require('./../img/bg2.png' )}  
        style={ styles.backgroundImage }>
        

        <View style={ styles.homeContainer }>
          
          <View></View>
          <View></View>

          <View style={ styles.homeTextContainer }>
              <TextInput 
                editable={true} 
                ref='_textInput'
                maxLength={50}
                style={{ fontSize: 20, height: 70, width: screen.width*0.7, backgroundColor: 'rgba(0,0,0,0)', paddingLeft: 15, paddingRight: 15, paddingTop: 5, color: '#cc1400' }}
                onChangeText={(msg) => this.props.onMessageInput({msg})} />
          </View>

          <View></View>
          <View>
            <Text
              style={{ color: '#e72008', justifyContent: 'flex-end' }}
              >
              v1.1.5
            </Text>
          </View>

        </View>
        
      
      </Image>

    );
    
  }
}
