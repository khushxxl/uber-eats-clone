import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Auth, DataStore } from 'aws-amplify'
import { Users } from '../src/models'

export const Context = React.createContext()

const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const [authUser, setAuthUser] = useState(null)
  const [dbUser, setDbUser] = useState(null)
  const [myLoggedInUser, setMyLoggedInUser] = useState()

  const sub = authUser?.attributes?.sub

  const onLoad = async () => {
    // DataStore.query(Users).then(setDbUser)
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser)
  }, [])

  useEffect(() => {
    // DataStore.query(Users, (user) => user.sub('eq', sub)).then((users) =>
    //   setDbUser(users[0]),
    // )
    DataStore.query(Users).then((users) => {
      setDbUser(users)

      for (let i = 0; i < dbUser.length; i++) {
        if (dbUser[i].sub === sub) {
          setMyLoggedInUser(dbUser[i])
        }
      }
    })
  }, [sub])

  // console.log('this is logged in', myLoggedInUser)

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        authUser,
        setDbUser,
        dbUser,
        sub,
        myLoggedInUser,
        setMyLoggedInUser,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default AppContext

const styles = StyleSheet.create({})
