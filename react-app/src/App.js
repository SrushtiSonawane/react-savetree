import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
  );
}
