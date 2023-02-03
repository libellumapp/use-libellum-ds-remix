import { Text, Certificate } from '@libellum-ds/react'
import React from 'react'

const Home = () => {
  return (
    <Text type="display" as="div">
      <Certificate/>
      Use Libellum DS - Home
      <Certificate />
    </Text>
  )
}

export default Home