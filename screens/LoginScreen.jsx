import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View>
        <Image
          source={require('../assets/images/burger2.jpeg')}
          style={{ height: 700 }}
        />
      </View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 18,
          fontSize: 25,
          fontWeight: 'bold',
        }}
      >
        Get started with Uber Eats
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Tabs')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'green',
          margin: 20,
          padding: 7,
          alignContent: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Continue
        </Text>
        <View style={{ width: 10 }} />
        <View>
          <Ionicons name="arrow-forward" color={'white'} size={30} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
