import express from 'express'
import Stripe from 'stripe'

const app = express()
const port = 3000

const PublishableKey =
  'pk_test_51M0CrfBPXhkktb9DdV5lvUytTD2zHPjkR2oBf8cPf4sUCh8TTw9ccmHAAm3u1M1zh9qIKVpfOefX10EIT9GJ1FlK00mCaLVe0V'

const SecretKey =
  'sk_test_51M0CrfBPXhkktb9D6dtQ04Ie7Xq9OkU0mOtnmoHp72jngzM2NFvJOC0ZBFsVk0MpsKyBLggIiJLncF4T2GiiaiTP007VmCgka8'

app.listen(port, () => {
  console.log('App Listening at localhost 3000')
})

const stripe = Stripe(SecretKey, { apiVersion: '2022-11-15' })

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: 'usd',
      payment_method_types: ['card'], //by default
    })

    const clientSecret = paymentIntent.client_secret

    res.json({
      clientSecret: clientSecret,
    })
  } catch (e) {
    console.log(e.message)
    res.json({ error: e.message })
  }
})
