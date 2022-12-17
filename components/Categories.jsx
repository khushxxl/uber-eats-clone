import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Categories = ({ item, index }) => {
  return (
    <TouchableOpacity
      style={{ marginLeft: index === 0 ? 20 : 45, marginBottom: 80 }}
    >
      <View
        style={{
          backgroundColor: '#f0f8ff',
          height: 80,
          padding: 14,
          borderRadius: 10,
        }}
      >
        <View>
          <Image source={item.image} style={{ height: 50, width: 50 }} />
        </View>
      </View>
      <Text style={{ textAlign: 'center' }}>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default Categories

const styles = StyleSheet.create({})
