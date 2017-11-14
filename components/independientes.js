import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Header, Body, Title, Icon, Tab, Tabs, TabHeading, Button, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import styles from "../styles";
import Independs from "../indepens";

export default class Independientes extends Component{
    constructor(props){
      super(props);
      this.state = {
        data: []
      }
    }
  
    componentDidMount(){
      this.setState({
        data: Independs
      })
    }
  
    render(){
      return(
        <View style={styles.container}>
          <List dataArray={this.state.data}
              renderRow={(item) =>
                <ListItem onPress={() => this.props.navigate('Interior',{name:item.name,price:item.price,photos:item.photos,description:item.description,avatar:item.avatar})}>
                  <Thumbnail style={styles.avatar} square size={80} source={{ uri: item.avatar }} />
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>${item.price}</Text>
                  </Body>
                </ListItem>
              }>
          </List>
        </View>
      )
    }
  }