import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Services from "./main/Services";
import Team from "./main/Team";
import Contact from "./main/Contact";
import Download from "./main/Download";
import Terms from "./sub/Terms";
import Careers from "./sub/Career";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/services" element={<Services />} />
    <Route path="/team" element={<Team />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/download" element={<Download />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/terms" element={<Terms />} />
  </Routes>
</BrowserRouter>,
root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
