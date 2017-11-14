import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Header, Body, Title, Icon, Tab, Tabs, TabHeading, Button, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import ImageSlider from 'react-native-image-slider';
import styles from "../styles";

export default class Interior extends Component{
    
      static navigationOptions = ({navigation,screenProps}) => ({
        headerTitle: navigation.state.params.name,
        headerTintColor: "#f0f0f0",
        headerStyle: {
          backgroundColor:"#34495e",
          height: 80,
          paddingTop: 20
        }
      })
    
      constructor(props){
        super(props);
        this.state = {
          name: this.props.navigation.state.params.name,
          price: this.props.navigation.state.params.price,
          descripcion: this.props.navigation.state.params.description,
          photos: this.props.navigation.state.params.photos,
          avatar: this.props.navigation.state.params.avatar
        }
      }
    
      render(){
        const { navigate } = this.props.navigation;
        return(
          <ScrollView>
            <View style={styles.containerT}>
              <ImageSlider images={this.state.photos} height={400}/>
              <Body style={styles.bodyInterior}>
                <Text style={styles.named}>{this.state.name}</Text>
                <Text note><Text style={styles.precio}>Precio: </Text>${this.state.price}</Text>
                <Text note>{this.state.descripcion}</Text>
                {this.state.photos.map((i,index) => <Thumbnail style={styles.avatar} square size={80} source={{ uri: i.img }} key={index}/>)}
              </Body>
            </View>
          </ScrollView>
        )
      }
    }