import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ToursPage from './pages/ToursPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Footer from './components/Footer';
import HistoricalPage from './pages/tours/HistoricalPage';
import ColdWarPage from './pages/tours/ColdWarPage';
import StreetArtPage from './pages/tours/StreetArtPage';
import ParksPage from './pages/tours/ParksPage';
import MysteriesAndLegendsPage from './pages/tours/MysteriesAndLegendsPage';
import PotsdamPage from './pages/tours/PotsdamPage';
import Profile from './pages/Profile';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/tours/historical" element={<HistoricalPage />} />
        <Route path="/tours/coldwar" element={<ColdWarPage />} />
        <Route path="/tours/streetalternative" element={<StreetArtPage />} />
        <Route path="/tours/parks" element={<ParksPage />} />
        <Route path="/tours/myl" element={<MysteriesAndLegendsPage />} />
        <Route path="/tours/potsdam" element={<PotsdamPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
