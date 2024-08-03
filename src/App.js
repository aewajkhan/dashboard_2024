import React from 'react';
import Sidebar from './components/Sidebar'
import './App.css';
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return (
    <div id="app-container">
      <Sidebar />
      <div id="main-container">
        <Header />
        <div id="content-container">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
