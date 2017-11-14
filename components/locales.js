import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Header, Body, Title, Icon, Tab, Tabs, TabHeading, Button, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import styles from "../styles";
import Locals from "../locales";

export default class Locales extends Component{
    constructor({props}){
      super(props);
  
      this.state = {
        data: []
      }
    }
  
    componentDidMount(){
      this.setState({data:Locals})
    }
  
    render(){
      return(
        <View style={styles.container}>
          <List dataArray={this.state.data}
              renderRow={(item) =>
                <ListItem onPress={() => this.props.navigate('InteriorLocals',{
                    name: item.name,
                    direction: item.direction,
                    photos: item.photos,
                    description: item.description,
                    phone: item.phone,
                    alcohol: item.alcohol  ? "Si" : "No",
                    services: item.services ? "Si" : "No",
                    horario: item.horario,
                    rank: item.rank
                  })}>
                  <Thumbnail style={styles.avatar} square size={80} source={{ uri: item.avatar }} />
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note><Icon name="pin" style={styles.iconList}/> {item.direction}</Text>
                  </Body>
                </ListItem>
              }>
          </List>
        </View>
      )
    }
  }


  