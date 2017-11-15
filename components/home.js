import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Header, Body, Title, Icon, Tab, Tabs, TabHeading, Button, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import styles from "../styles";


// components

import Independientes from "./independientes";
import Locales from "./locales";

export default class Home extends Component {
    
      static navigationOptions = ({navigation,screenProps}) => ({
        headerTitle: 'Satisfy',
        headerRight: <Grid style={{marginTop:10}}>
          <Col>
            <Button onPress={() => navigation.navigate('Config')} transparent><Icon name="options" style={styles.colorTabsFont} /></Button>
          </Col>
        </Grid>,
        headerTintColor: "#f0f0f0",
        headerStyle: {
          backgroundColor:"#34495e",
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
          <Tabs initialPage={0} tabBarPosition="bottom">
            <Tab heading={ <TabHeading active style={styles.tabsColor}><Icon name="rose" /><Text style={styles.colorTabsFont}> Scorts</Text></TabHeading>}>
              <Independientes navigate={navigate}/>
            </Tab>
            <Tab heading={ <TabHeading style={styles.tabsColor}><Icon name="flame" /><Text style={styles.colorTabsFont}> Cafés</Text></TabHeading>}>
              <Locales navigate={navigate}/>
            </Tab>
          </Tabs>
        )
      }
    }
