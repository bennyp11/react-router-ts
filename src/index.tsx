import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";
import Page3 from "./routes/page3";
import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="*" element={<main style={{padding: "1rem"}}>
        <p>The page you've searched for doesn't exist!</p>
        </main>
      }/>
    </Routes>
  </BrowserRouter>, 
  rootElement
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
