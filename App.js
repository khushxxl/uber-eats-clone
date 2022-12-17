import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import TabController from './screens/TabController'
import LoginScreen from './screens/LoginScreen'
import Toast from 'react-native-toast-message'
import AppContext, { Context } from './context/AppContext'
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'
import { useContext } from 'react'
import Profile from './screens/Profile'

Amplify.configure({ ...config, Analytics: { disabled: true } })

function App() {
  const Stack = createNativeStackNavigator()

  return (
    <AppContext>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={TabController}
            options={{ headerShown: false }}
          />
          {/* {dbUser ? (
            <Stack.Screen
              name="Tabs"
              component={TabController}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Tabs"
              component={Profile}
              options={{ headerShown: false }}
            />
          )} */}
        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </AppContext>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default withAuthenticator(App)
