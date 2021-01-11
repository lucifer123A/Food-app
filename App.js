import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native'
import SearchScreen from './src/screens/SearchScreen'

const Stack=createStackNavigator()
const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen 
        name="Screen" 
        component={SearchScreen}
        options={{title:"Business Search"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App