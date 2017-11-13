import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop: 25,
      padding: 0,
      flex: 1,
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
    }
  });


  export default styles;