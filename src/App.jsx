import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner'
import Projects from "./components/Projects"
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Projects></Projects>
    </>
  )
}

export default App
