import React from 'react';
import './App.css';
import Header from "./Header";
import Top from "./Top";
import Body from "./Body";
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Top />
      <Header />
      <div className="app_top">
      </div>
      <div className="app_body">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;