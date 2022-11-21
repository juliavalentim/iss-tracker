import "react-native-gesture-handler"
import React from 'react';
import Home from './screen/home';
import IssLocation from './screen/issLocation';
import Meteoros from './screen/meteoros';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()
 export default class App extends React.Component{ 
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name=  "Home" component = {Home}/>
          <Stack.Screen name = "IssLocation" component = {IssLocation}/>
          <Stack.Screen name = "Meteoros" component = {Meteoros}/> 
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
 }