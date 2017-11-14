import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      padding: 10,
      flex: 1,
    },
    containerT: {
      marginTop: 0,
      padding: 0,
      flex: 1,
    },
    bodyInterior:{
      marginTop: 10,
      padding: 10,
    },
    header: {
      fontSize: 20,
    },
    nav: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    navItem: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#ccc',
    },
    subNavItem: {
      padding: 5,
    },
    topic: {
      textAlign: 'center',
      fontSize: 15,
    },
    colorTabsFont:{
      color: '#f0f0f0'
    },
    tabsColor:{
      backgroundColor: '#34495e'
    },
    profileBtn:{
      backgroundColor: '#34495e'
    },
    avatar:{
      marginRight: 10
    },
    precio:{
      fontSize: 15
    },
    named:{
      fontSize: 15
    },
    iconList:{
      fontSize: 15,
      color: '#8e44ad'
    },
    alignRight:{
      textAlign: 'left'
    },
    noPaddingMargin:{
      margin: 0,
      padding: 0
    }
  });


  export default styles;