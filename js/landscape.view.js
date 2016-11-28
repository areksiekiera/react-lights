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

    console.log('render share button');

    // if (this.props.gifBase64){
      let shareImageBase64 = {
        // message: this.props.gifUri     
        // url: this.props.gifBase64
        url: 'data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=='
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

    // }
    // else
    //   return (<View />);
    
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
          image = (<Image style={{width: screen.width*0.4, height: screen.width*0.4*0.5625}} source={require('./../img/rotate.gif')} />);
          break;

        case 'loading':
          // loading gif
          image = (
            <View>
              <Image 
                style={{width: screen.width*0.4, height: screen.width*0.4*0.412}} 
                source={require('./../img/load3.gif')} />
            </View>
            );
          break;

        case 'gif':
          if (this.props.gifUri)
            // show gid 
            image = (
              <View style={[ styles.centred ]}>

                <Image 
                  style={{ width: screen.width*0.8, height: screen.width*0.8*0.515 }} 
                  source={{ uri: this.props.gifUri }} 
                  defaultSource={ require('./../img/on.png' )} />    

                <ShareButton 
                  // gifBase64={ this.props.gifBase64 } 
                  gifUri={ this.props.gifUri } >
                </ShareButton>

              </View>
            );

          else
            // if no gif show start page 
            image = (<Image style={{width: screen.width*0.4, height: screen.width*0.4*0.5625}} source={require('./../img/rotate.gif')} />);
         
          break;
    }

    return (
      <View style={[ styles.container, styles.centred, styles.black ]}>

        { image }   

      </View>
    );
  }
}
