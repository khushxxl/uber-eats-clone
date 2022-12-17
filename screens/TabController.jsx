import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen.jsx'
import { Ionicons } from '@expo/vector-icons'
import Browse from './Browse.jsx'
import Basket from './Basket.jsx'
import Profile from './Profile.jsx'

const TabController = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'ios-home-outline'
          } else if (route.name === 'Browse') {
            iconName = focused ? 'ios-search' : 'ios-search-outline'
          } else if (route.name === 'Basket') {
            iconName = focused ? 'ios-cart' : 'ios-cart-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={28} color={color} />
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}

export default TabController

const styles = StyleSheet.create({})
