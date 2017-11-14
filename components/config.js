import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Header, Body, Title, Icon, Tab, Tabs, TabHeading, Button, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import styles from "../styles";

export default class Config extends Component {
    
      static navigationOptions = ({navigation,screenProps}) => ({
        headerTitle: 'Configuraciones',
        headerTintColor: "#f0f0f0",
        headerStyle: {
          backgroundColor:"#e74c3c",
          height: 80,
          paddingTop: 20
        }
      })
    
      constructor(props){
        super(props);
      }
      render(){
        const { navigate } = this.props.navigation;
        return(
          <View style={styles.container}>
            <Text>Configuraciones de la aplicación</Text>
          </View>
        )
      }
    } 