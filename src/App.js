import React from 'react';
import Navbar from './componenets/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componenets/pages/Home';
import Products from './componenets/pages/Products';
import Services from './componenets/pages/Services';
import SignUp from './componenets/pages/SignUp';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/react-website' exact element={<Home />}></Route>
          <Route
            path='/react-website/products'
            exact
            element={<Products />}
          ></Route>
          <Route
            path='/react-website/services'
            exact
            element={<Services />}
          ></Route>
          <Route
            path='/react-website/sign-up'
            exact
            element={<SignUp />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
