import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Header, Body, Title, Icon, Fab } from 'native-base';
import { StackNavigator } from 'react-navigation';

import styles from "./styles";



class ButtonNavigation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render(){
    return(
      <Fab
      active={this.state.active}
      direction="up"
      containerStyle={{ }}
      style={{ backgroundColor: '#5067FF' }}
      position="bottomRight"
      onPress={() => this.setState({ active: !this.state.active })}>
        <Icon name="share" />
        <Button style={{ backgroundColor: '#34A34F' }} title="Go to details" onPress={() => this.props.navigation.navigate('Locales')}>
          <Icon name="logo-whatsapp" />
        </Button>
        <Button title="Go to details" style={{ backgroundColor: '#3B5998' }} onPress={() => this.props.navigation.navigate('Independientes')}>
          <Icon name="logo-facebook" />
        </Button>
        <Button title="Go to details" disabled style={{ backgroundColor: '#DD5144' }} onPress={() => this.props.navigation.navigate('Home')}>
          <Icon name="mail" />
        </Button>
    </Fab>
    )
  }
}

class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <ButtonNavigation />
      </View>
    )
  }
}

const Locales = () => (
  <Text>
    Locales
  </Text>
)

const Independientes = () => (
  <Text>
    Independientes
  </Text>
)

const App = StackNavigator({
  Home: {
    screen: Home,
    headerMode: 'screen',
    navigationOptions: {
      headerTitle: 'Satisfy',
      headerTintColor: "#ccc",
      headerStyle: {
        backgroundColor:"blue",
        height: 80,
        paddingTop: 20
      }
    },
  },
  Locales: {
    screen: Locales,
    headerMode: 'screen',
    navigationOptions: {
      headerTitle: 'Locales',
      headerTintColor: "#ccc",
      headerStyle: {
        backgroundColor:"blue",
        height: 80,
        paddingTop: 20
      }
    },
  },
  Independientes: {
    screen: Independientes,
    headerMode: 'screen',
    navigationOptions: {
      headerTitle: 'Independientes',
      headerTintColor: "#ccc",
      headerStyle: {
        backgroundColor:"blue",
        height: 80,
        paddingTop: 20
      }
    },
  },
});

export default App