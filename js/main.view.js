/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View

} from 'react-native';
import codePush from "react-native-code-push";

import { styles } from './styles'

import { PortraitView } from './portrait.view'
import { LandscapeView } from './landscape.view'


// main app class
class MainApp extends Component {
  
  // init
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      gifUri: false,
      gifPageMode: 'start',
    };

    this.handleMessageInput = this.handleMessageInput.bind(this);
  }

  // switch between start & giff page 
  // on orientation update 
  _onLayout(event){

    // remember initial orient
    let init_orient = this.state.orientation

    // get window size from event
    let width = event.nativeEvent.layout.width
    let height = event.nativeEvent.layout.height

    // net orient
    let orient = (width > height) ? 'landscape' : 'portrait';

    if (init_orient != orient){

        // update orient
      this.setState({ orientation: orient });

      console.log('layout updated: ', orient);

      if (orient == 'landscape' && this.state.message != ''){
        this.setState({gifPageMode: 'loading'});
        this.getGif();
      }
    }
  } 

  // call backend to load GIF
  getGif() {
    
    console.log('call server for new gif: ', this.state.message);
      
    var gg = this;
    window.setTimeout(function(){
      gg.setState({
        gifPageMode: 'gif',
        // TODO: fetch from server
        gifUri: 'https://img.c52.io/asda202012dea.gif'
      })}, 2000);
  }

  // update message state
  handleMessageInput(message) {

    this.setState({
      message: message
    });
  }
  
  // render
  render() {
    console.log('render container');

    let page = false;
    switch (this.state.orientation){
      
      case 'portrait':
        page = (
          <PortraitView 
            style={ styles.container } 
            message={ this.state.message }
            onMessageInput={ this.handleMessageInput } />
        );
        break;
      
      case 'landscape':
        page = (
          <LandscapeView 
            style={ styles.container } 
            message={ this.state.message }
            mode={ this.state.gifPageMode }
            gifUri={ this.state.gifUri } />
        );
        break;

    }

    return (
      <View style={ styles.container }  onLayout={(event) => this._onLayout(event)}>

        { page }

      </View>
      );
   
  }
}
MainApp = codePush(MainApp);

export {MainApp}