import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Header, Body, Title, Icon, Container, Button, List, ListItem, Content, Left, Right, Card, CardItem, Grid, Col  } from 'native-base';
import ImageSlider from 'react-native-image-slider';
import call from 'react-native-phone-call';
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
          direction: this.props.navigation.state.params.direction,
          descripcion: this.props.navigation.state.params.description,
          photos: this.props.navigation.state.params.photos,
          avatar: this.props.navigation.state.params.avatar,
          horario: this.props.navigation.state.params.horario,
          alcohol: this.props.navigation.state.params.alcohol,
          services: this.props.navigation.state.params.services,
          rank: this.props.navigation.state.params.rank,
          phone: this.props.navigation.state.params.phone,
          data: []
        }
      }

      componentDidMount(){
          this.setState({data:[
            {
                iconName: "bookmark",
                colorIcon: "#8e44ad",
                name: this.state.name,
                type: "Cafe",
                iconRank:false
            },
            {
                iconName: "pin",
                colorIcon: "#1abc9c",
                name: this.state.direction,
                type: "Dirección",
                iconRank:false
            },
            {
                iconName: "clock",
                colorIcon: "#2980b9",
                name: this.state.horario,
                type: "Horario de Atención",
                iconRank:false
            },
            {
                iconName: "beer",
                colorIcon: "#f1c40f",
                name: this.state.alcohol,
                type: "Venta de Alcohol",
                iconRank:false
            },
            {
                iconName: "flame",
                colorIcon: "#e74c3c",
                name: this.state.services,
                type: "Servicios Adicionales",
                iconRank:false
            },
            {
                iconName: "ribbon",
                colorIcon: "#e67e22",
                name: this.state.rank,
                type: "Calificación",
                iconRank:true,
            }
        ]})
      }
    
      render(){
        const { navigate } = this.props.navigation;
        return(
          <ScrollView style={{backgroundColor:"#ffffff"}}>
            
            <View>
                <ImageSlider images={this.state.photos} height={400}/>
                <List dataArray={this.state.data}
                renderRow={(item,index) =>
                        <ListItem icon key={index}>
                            <Left>
                                <Icon name={item.iconName} style={{color:item.colorIcon}} />
                            </Left>
                            <Body>
                                <Text>{item.type}</Text>
                            </Body>
                            <Right>
                                <Text>{item.name}</Text>
                                {item.iconRank ? <Icon name="star" style={{color:"#e67e22"}} />:null}
                            </Right>
                        </ListItem>
                    }>
                </List>

                <List>
                    <ListItem itemDivider>
                    <Text>Descripción</Text>
                    </ListItem>
                </List>

                <Text style={{padding:20}}>
                    {this.state.descripcion}
                </Text>

            </View>
            <View>

                <Grid style={{marginTop:10}}>
                    <Col>
                        <Button iconLeft full style={{padding:20,height:60,backgroundColor:"#16a085"}} onPress={() => call({number:this.state.phone,prompt:true})}>
                            <Icon name='call' style={{color:"#ffffff"}}/>   
                        </Button>
                    </Col>
                    <Col>
                        <Button iconLeft full info style={{padding:20,height:60}}>
                            <Icon name='mail' style={{color:"#ffffff"}}/>   
                        </Button>
                    </Col>
                </Grid>
                
            </View>

          </ScrollView>
        )
      }
    }