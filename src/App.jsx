import './App.css'
import 'flowbite'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from 'flowbite-react'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
