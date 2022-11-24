import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Group from "./FragmentHome/Group"
import ListProfile from "./FragmentHome/ListProfile"
import Profile from "./FragmentHome/Profile"


const Tab = createMaterialBottomTabNavigator();


export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="listProfile" component={ListProfile} />
      <Tab.Screen name="group" component={Group} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
