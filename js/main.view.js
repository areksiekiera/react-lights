/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import codePush from "react-native-code-push";

import { styles } from './styles'

import { PortraitView } from './portrait.view'
import { LandscapeView } from './landscape.view'

// global.Buffer = global.Buffer || require('buffer').Buffer

// function toBuffer(ab) {
//     var buf = new Buffer(ab.byteLength);
//     var view = new Uint8Array(ab);
//     for (var i = 0; i < buf.length; ++i) {
//         buf[i] = view[i];
//     }
//     return buf;
// }



// main app class
class MainApp extends Component {
  
  // init
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      gifUri: false,
      // gifBase64: true,
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

    fetch('https://s3-us-west-2.amazonaws.com/com.rma99.lights/1480339246142_ggg.gif', {})
          .then((response) => {

             console.log('gif fetched');

             gg.setState({
              gifUri: 'https://s3-us-west-2.amazonaws.com/com.rma99.lights/1480339246142_ggg.gif',
              gifPageMode: 'gif'
            });

          });  

    // fetch('http://54.146.143.245/make_gif', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ message: this.state.message.msg })
    // })
    // .then((response) => response.json()) 
    // .then((responseJson) => {

    //   // prefetch image
    //   var prefetchTask = Image.prefetch(responseJson.uri);
    //   prefetchTask.then(function(){

    //     console.log('Image prefetched');

    //     // get image 
    //     // fetch(responseJson.uri, {})

    //     //  ISSUE WITH FETCH
    //     fetch('https://upload-assets.vice.com/files/2016/07/06/1467830836GOT_ep_7_The_hound_s_wishful_thinking.gif', {})
    //       .then((response) => {

    //         // // get response buffer
    //         // response.arrayBuffer().then(function(buffer){
              
    //         //   // set image base64 
    //         //   gg.setState({ 
    //         //     gifBase64: "data:image/gif;base64," + new Buffer(buffer).toString('base64')
    //         //   });

    //         //   console.log('Image base64 encoded');
    //         // })          
    //         console.log('gif fetched');

    //       });  
        
    //     // show gif 
    //     gg.setState({
    //       gifUri: responseJson.uri,
    //       gifPageMode: 'gif'
    //     });

    //   });  

    // }) 
    // .catch((error) => { 
    //   console.error(error); 

    // });
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
            // gifBase64={ this.state.gifBase64 } 
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