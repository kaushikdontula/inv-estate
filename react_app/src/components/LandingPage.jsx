// LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <div className="App" style={{
       backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${process.env.PUBLIC_URL}/lux_home.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h1> Re-elevate</h1>
      <h2> A Simpler Way To Do Research, Taking Your Property Ventures To New Heights.</h2>

        <NavBar />
    </div>
  );
};

export default LandingPage;
