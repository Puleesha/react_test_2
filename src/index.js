import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './Components/LoginPage/LoginPage.js';
import UserProfile from './Components/UserProfile/UserProfile.js';
import AboutUs from './Components/AboutUsPage/AboutUsPage.js'
import HomePage from './Components/HomePage/HomePage.js';
import LocationPage from './Components/LocationPage/LocationPage.js';
import { RegistrationPage } from './Components/RegistrationPage/RegistrationPage.js';
import ErrorPage from './Components/ErrorPage/ErrorPage.js';
import Colombo from './Components/LocationDescriptionPages/Colombo.js';
import Galle from './Components/LocationDescriptionPages/Galle.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);