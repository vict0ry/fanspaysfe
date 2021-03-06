import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import SetupForm from './SetupForm'
import axios from 'axios'


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe('pk_test_51LHjpdEZZiK54waaeUaImzdbsS76vQYdgAYSawEFUgTwSusiPcyvfyPCF7OlMdx7bZjCWyyIs43PDAbHkqHD77IF00cJkkGacR')

export default function Payment() {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios.post("/api/stripe/create", {
     items: [{ id: "xl-tshirt" }]
    })
      .then((res) => {
        return setClientSecret(res.data.client_secret)
      });
    axios.get('/api/stripe/cards', res => {
      console.log(res);
    });
  }, [])

  const appearance = {
    theme: 'stripe'
  }
  const options = {
    clientSecret,
    appearance
  }
  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <SetupForm />
        </Elements>
      )}
    </div>
  )
}
