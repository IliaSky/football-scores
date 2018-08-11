import React from 'react';
import './Home.css';

const Home = ({routes}) => (
  <div className="Home">
    <header className="Home-header">
      <img src='/logo.svg' className="Home-logo" alt="logo" />
      <h1 className="Home-title">Welcome to Football Scores</h1>
    </header>
    <main>
      <p>
        Please enjoy your stay!
      </p>
    </main>
  </div>
);

export default Home;