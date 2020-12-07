import React from 'react'
import Head from 'next/head'
import { IPosition } from '../interfaces/positions'
import { Container, Content } from '../styles/pages/Home'

const Home: React.FC = () => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }

  function showPosition(position: IPosition) {
    console.log(position)
  }

  return (
    <Container>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Content>
        <div onClick={getLocation}></div>
      </Content>
    </Container>
  )
}

export default Home
