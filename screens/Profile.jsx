import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { Auth } from 'aws-amplify'
import { Context } from '../context/AppContext'
import { DataStore } from 'aws-amplify'
import { Users } from '../src/models'

const Profile = () => {
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()

  const { sub, setDbUser, myLoggedInUser, setMyLoggedInUser } = useContext(
    Context,
  )

  const onSave = async () => {
    if (myLoggedInUser) {
      await updateUser()
    } else {
      await createUser()
    }
  }

  const updateUser = async () => {
    const user = await DataStore.save(
      Users.copyOf(myLoggedInUser, (updated) => {
        updated.name = name
        updated.email = email
        updated.phone = phone
      }),
    )
    setMyLoggedInUser(user)
  }
  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new Users({ sub: sub, name: name, email: email, phone: phone }),
      )

      console.log(user)
      setDbUser(user)
    } catch (error) {
      Alert.alert('Error', e.message)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <TextInput
        placeholder="Enter Full Name"
        style={styles.input}
        onChangeText={setName}
        defaultValue={myLoggedInUser && myLoggedInUser.name}
      />

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        onChangeText={setEmail}
        defaultValue={myLoggedInUser && myLoggedInUser.email}
      />
      <TextInput
        placeholder="Enter Phone Number"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setPhone}
        defaultValue={myLoggedInUser && myLoggedInUser.phone}
      />

      <TouchableOpacity
        onPress={onSave}
        style={{ alignContent: 'center', justifyContent: 'center' }}
      >
        <Text style={{ textAlign: 'center', color: 'blue' }}>Save Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Auth.signOut()}
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        <Text style={{ textAlign: 'center', color: 'red' }}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'lightgray',
    color: 'black',
    padding: 14,
    margin: 10,
    borderRadius: 10,
  },
})
