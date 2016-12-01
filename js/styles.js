/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },

  centred: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  black: {
  	backgroundColor: '#000000'
  },

  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:null,
    height:null,
    backgroundColor: 'rgba(0,0,0,0)',
  },

  // PORTRAIT
  homeContainer: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },

  homeTextContainer: {
    marginTop: 30, 
    borderRadius: 16, 
    borderColor: '#cc1400', 
    borderWidth:0 
  },

  // LANDSCAPE
  shareBtn: {
    position: 'absolute', 
    right: 20, 
    top: 20  
  }
  

});