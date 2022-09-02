import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "./components/header"

function App() {
  
  return (
    <div>
  
      <ResponsiveAppBar />
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> 
        <Link to="/invoices">Invoices</Link> 
        <Link to="/about">About</Link>
      </nav> */}
      <Outlet />
    </div>
  );
}

export default App;
