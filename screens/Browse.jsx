import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native'

const Browse = () => {
  const [cardDetails, setCardDetails] = useState()
  const [email, setEmail] = useState()
  const { confirmPayment, loading } = useConfirmPayment()

  const API_URL = 'http://localhost:3000'

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const { clientSecret, error } = await response.json()
    return { clientSecret, error }
  }

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert('Please enter Complete card details and Email')
      return
    }
    const billingDetails = {
      email: email,
    }
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret()
      //2. confirm the payment
      if (error) {
        console.log('Unable to process payment')
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: 'Card',
          billingDetails: billingDetails,
        })
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`)
        } else if (paymentIntent) {
          alert('Payment Successful')
          console.log('Payment successful ', paymentIntent)
        }
      }
    } catch (e) {
      console.log(e)
    }
    //3.Confirm the payment with the card details
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholders={{ number: '4242 4242 4242 4242' }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails)
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </SafeAreaView>
  )
}

export default Browse

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  card: {
    backgroundColor: '#fff',
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
  input: {
    backgroundColor: '#efefefef',

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
})
