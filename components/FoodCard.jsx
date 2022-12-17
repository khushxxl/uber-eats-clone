import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import GestureRecognizer from 'react-native-swipe-gestures'
import { foodBoxData } from '../utils/data'
import FoodBox from './FoodBox'
import Toast from 'react-native-toast-message'
import { FoodDishes } from '../src/models'
import { DataStore } from 'aws-amplify'

const FoodCard = ({ item, index }) => {
  const [modal, setModal] = useState(false)

  const [foodDishes, setFoodDishes] = useState([])

  useEffect(() => {
    DataStore.query(FoodDishes).then(setFoodDishes)
  }, [])
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModal(true)
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                setModal(true)
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 380,
                  height: 160,
                  marginTop: index === 0 ? 0 : 20,
                  position: 'relative',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: index === 0 ? 5 : 30,
                right: 7,
              }}
            >
              <Ionicons name="heart-outline" size={30} color="white" />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  textAlign: 'left',
                  alignItems: 'flex-start',
                  fontWeight: '500',
                  fontSize: 15,
                  marginTop: 2,
                }}
              >
                {item.name}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: '600' }}>4.2</Text>
            </View>
            <View>
              <Text>￡2.50 Delivery Fee · 40-60 min</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <GestureRecognizer
        onSwipeDown={() => setModal(false)}
        style={{ flex: 1 }}
      >
        <Modal animationType="slide" transparent={true} visible={modal}>
          <Toast />

          <View
            style={{
              height: '87%',
              marginTop: 'auto',
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={item.image}
                style={{
                  height: 190,
                  position: 'relative',
                }}
              />
            </View>
            <View
              style={{
                width: '90%',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                top: 10,
                alignSelf: 'center',
              }}
            >
              <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => {
                  setModal(false)
                }}
              >
                <Ionicons name="close" size={28} />
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.iconStyle}>
                  <Ionicons name="search" size={28} />
                </TouchableOpacity>
                <View style={{ width: 10 }} />
                <TouchableOpacity style={styles.iconStyle}>
                  <Ionicons name="options" size={28} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text
                style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'left' }}
              >
                {item.name}
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: '500', textAlign: 'left' }}
              >
                ⭐️ 3.4 (36 ratings) · Pizza
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'left',
                  color: 'gray',
                  marginTop: 2,
                }}
              >
                Open until 2:30am {'\n'}Tap for hours, info and more
              </Text>
            </View>
            <ScrollView>
              <View>
                <Text
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    fontWeight: 'bold',
                    fontSize: 25,
                  }}
                >
                  Picked for you
                </Text>
              </View>
              <View style={{ marginTop: 10 }}>
                {foodDishes.map((item, i) => {
                  return <FoodBox item={item} index={i} key={i} />
                })}
              </View>
            </ScrollView>
          </View>
        </Modal>
      </GestureRecognizer>
    </View>
  )
}

export default FoodCard

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',

    padding: 8,
  },
})
