import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'
import { Context } from '../context/AppContext'

const FoodBox = ({ item, index }) => {
  const { cartItems, setCartItems } = useContext(Context)

  return (
    <TouchableOpacity
      onPress={() => {
        setCartItems([
          ...cartItems,
          { title: item.title, image: item.image, price: item.price },
        ])

        Toast.show({
          type: 'success',
          text1: 'Awesome 🎉',
          text2: 'Item added to cart successfully!',
        })
      }}
      style={{
        marginTop: index === 0 ? 2 : 25,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 19, width: 200 }}>
          {item.title}
        </Text>
        <Text style={{}}>
          {'£' + item.price + ' · ' + item.kcal + ' ' + 'kcal'}
        </Text>
        <Text style={{ width: 220, fontWeight: '400', color: 'gray' }}>
          {item.desc}
        </Text>
      </View>
      <View>
        <Image
          source={require('../assets/images/box1.jpeg')}
          style={{ height: 100, width: 100 }}
        />
      </View>
    </TouchableOpacity>
  )
}

export default FoodBox

const styles = StyleSheet.create({})
