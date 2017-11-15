import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Content,Item,Input, Body, Title, Icon, Tab, Tabs, TabHeading, Button, List, ListItem, Thumbnail, Grid, Col, Container, Left, Right, Switch } from 'native-base';
import styles from "../styles";
import Slider from "react-native-slider";

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
        this.state = {
          value: 2
        }
      }
      render(){
        const { navigate } = this.props.navigation;
        return(
          <ScrollView>
            <View style={{flex:1,backgroundColor:"#ffffff"}}>
              <List>
                  <ListItem itemDivider>
                    <Text>Que buscar</Text>
                  </ListItem>

                <ListItem icon>
                  <Left>
                    <Icon name="female" style={{color:"#e74c3c"}}/>
                  </Left>
                  <Body>
                    <Text>Scort Mujeres</Text>
                  </Body>
                  <Right>
                    <Switch value={true} />
                  </Right>
                </ListItem>

                <ListItem icon>
                  <Left>
                    <Icon name="transgender" style={{color:"#9b59b6"}}/>
                  </Left>
                  <Body>
                    <Text>Scort Travestis</Text>
                  </Body>
                  <Right>
                    <Switch value={true} />
                  </Right>
                </ListItem>
                
                <ListItem icon>
                  <Left>
                    <Icon name="male"  style={{color:"#2980b9"}} />
                  </Left>
                  <Body>
                    <Text>Scort Hombres</Text>
                  </Body>
                  <Right>
                    <Switch value={true} />
                  </Right>
                </ListItem>

                <ListItem icon>
                  <Left>
                    <Icon name="transgender"  style={{color:"#c0392b"}} />
                  </Left>
                  <Body>
                    <Text>Scort Gay's</Text>
                  </Body>
                  <Right>
                    <Switch value={true} />
                  </Right>
                </ListItem>

                <ListItem icon>
                  <Left>
                    <Icon name="hand"  style={{color:"#27ae60"}} />
                  </Left>
                  <Body>
                    <Text>Masajistas</Text>
                  </Body>
                  <Right>
                    <Switch value={true} />
                  </Right>
                </ListItem>

                <ListItem itemDivider>
                    <Text>Radio de busqueda</Text>
                </ListItem>
                <View style={{padding:20}}>
                  <Slider 
                    value={this.state.value} 
                    minimumValue={1}
                    maximumValue={20}
                    step={1}
                    onValueChange={(value) => this.setState({value})} 
                  />
                </View>
                <ListItem >
                  <Text>Radio de busqueda: {this.state.value} Kms</Text>
                </ListItem>
                <ListItem itemDivider>
                  <Text>Guardar cambios</Text>
                </ListItem>
              </List>
            </View>

            <Button full dark style={{padding:20,height:60}}>
              <Text style={{color:"#ffffff"}}>Guardar</Text>
            </Button>
          </ScrollView>
        )
      }
    } 