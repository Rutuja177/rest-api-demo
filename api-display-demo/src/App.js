import './App.css';
import {BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from './components/home';
import Signup from './components/signup';
import React from 'react';
import Login from './components/login';
import NavBar from './navBar';
import Display from './components/displayData';
import useUser from './hook/useUser';

const App = () =>{
  return (
    <BrowserRouter>
      <NavBar/>
    <div id="page-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/signup" element={<Signup/>} />
        <Route path = "/login" element={<Login/>} />
        <Route path = "/display" element={<Display/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );}


export default App;
