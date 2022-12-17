import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/AppContext'
import { Ionicons } from '@expo/vector-icons'

const Basket = () => {
  const { cartItems, setCartItems } = useContext(Context)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: 'lightgray',
          width: 100,
          padding: 8,
          alignItems: 'center',
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignSelf: 'flex-end',
          marginRight: 20,
        }}
      >
        <Ionicons name="ios-document-outline" size={20} />
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Orders</Text>
      </View>

      <View>
        <Text style={{ fontSize: 35, fontWeight: 'bold', marginLeft: 10 }}>
          Baskets
        </Text>
      </View>

      <View
        style={{ justifyContent: 'flex-start', marginTop: 20, marginLeft: 10 }}
      >
        {cartItems.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: i === 0 ? 0 : 20,
              }}
            >
              <View>
                <Image
                  source={item.image}
                  style={{ height: 100, width: 100, borderRadius: 50 }}
                />
              </View>
              <View style={{ marginLeft: 14 }}>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
                <Text style={{ width: 250 }}>
                  Deliver to West Park Roads & West Park Villas
                </Text>
              </View>
            </View>
          )
        })}
      </View>

      <TouchableOpacity
        disabled={cartItems.length === 0 ? true : false}
        style={{
          backgroundColor: cartItems.length === 0 ? 'gray' : 'black',
          alignItems: 'center',
          width: '90%',
          justifyContent: 'center',
          alignSelf: 'center',
          padding: 7,
          position: 'absolute',
          bottom: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
          Checkout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Basket

const styles = StyleSheet.create({})
