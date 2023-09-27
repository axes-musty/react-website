import React from 'react'
import Navbar from './componenets/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './componenets/pages/Home'
import './App.css'

const App = () => {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        < Route path='/react-website' exact element={<Home />}></Route>
      </Routes>
     </Router>

    </>

  )
}

export default App
