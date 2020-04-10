import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="wrapper">
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
