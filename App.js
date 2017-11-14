import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Header, Body, Title, Icon, Tab, Tabs, TabHeading, Button, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import { StackNavigator } from 'react-navigation';
import styles from "./styles";

// components

import Config from "./components/config";
import Interior from "./components/interior";
import Home from "./components/home";
import InteriorLocals from "./components/interiorLocals";


const App = StackNavigator({
  Home: { screen: Home, headerMode: 'screen'},
  Config: { screen: Config, headerMode: 'screen' },
  Interior: { screen: Interior, headerMode: 'screen' },
  InteriorLocals: { screen: InteriorLocals, headerMode: 'screen' }
});

export default App