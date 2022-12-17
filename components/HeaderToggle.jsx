import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HeaderToggle = () => {
  const [toggleBg, setToggleBg] = useState(false)
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => setToggleBg(false)}
        style={{
          padding: 7,
          backgroundColor: toggleBg ? 'white' : 'black',
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: toggleBg ? 'black' : 'white',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          Delivery
        </Text>
      </TouchableOpacity>
      <View style={{ width: 15 }} />
      <TouchableOpacity
        onPress={() => setToggleBg(true)}
        style={{
          padding: 7,
          backgroundColor: toggleBg ? 'black' : 'white',
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: toggleBg ? 'white' : 'black',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          Pickup
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderToggle

const styles = StyleSheet.create({})
