import React from 'react';
import logo from './logo.svg';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div style={{ 
      borderBottom: "solid 1px",
      paddingBottom: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "auto"
    }}>
      <h1>Welcome to the React-Router!</h1>
      <h2 style={{marginTop: "10vh"}}>These links will send you to different pages!</h2>
      <nav style={{marginTop: "10vh"}}>
          <Link to="/page1"> Page 1 </Link> |  {" "}
          <Link to="/page2"> Page 2 </Link> |  {" "}
          <Link to="/page3"> Page 3 </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
