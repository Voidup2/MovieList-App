import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Layout from './components/Layout/Layout'
import Hero from './components/hero/Hero'
import Herotwo from './components/hero/Herotwo'

function App() {

  return (
    <Layout>
      <Header />
      <Hero />
      <Herotwo />
    </Layout>
  )
}

export default App
