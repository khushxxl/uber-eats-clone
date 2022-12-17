import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import HeaderToggle from '../components/HeaderToggle'
import { Ionicons } from '@expo/vector-icons'
import { categories, restoFood1 } from '../utils/data'
import Categories from '../components/Categories'
import FoodCard from '../components/FoodCard'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <HeaderToggle />
      <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 15 }}>
        Now · West Park Road & West Park Villas
      </Text>

      <View
        style={{
          backgroundColor: '#f0f8ff',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 15,
          margin: 10,
          justifyContent: 'space-between',
          borderRadius: 25,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Ionicons name="search" color={'black'} size={28} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <TextInput
              placeholder="Food, groceries, drinks, etc."
              style={{ flex: 1 }}
              placeholderTextColor={'gray'}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="filter" color={'black'} size={28} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories}
        horizontal
        renderItem={({ item, index }) => (
          <Categories item={item} index={index} />
        )}
      />
      {/* <View style={{ marginTop: 30 }} /> */}
      <ScrollView>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={restoFood1}
          renderItem={({ item, index }) => (
            <FoodCard item={item} index={index} />
          )}
        />

        <View
          style={{
            backgroundColor: 'green',
            margin: 10,
            padding: 13,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '20' }}>
            £0 Delivery fee + {'\n'}5% off with Uber {'\n'}One
          </Text>
          <View
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              alignSelf: 'stretch',
              width: 180,
              padding: 2,
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: '14',
                marginLeft: 10,
              }}
            >
              Try free for 1 month <Ionicons name="arrow-forward" size={14} />
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
