import React from 'react';
import './App.css';
import logoSvg from './logo.svg';
import UserDetail from './UserDetail';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoSvg} className="App-logo" alt="logo" />
        <p>To Do APP: How to use types and typescript in development</p>
        <UserDetail />
      </header>
    </div>
  );
};

export default App;
