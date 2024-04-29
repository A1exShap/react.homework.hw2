import React from 'react';
import {
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <Link to={'/login'}>Вход</Link>
          </li>
          <li>
            <Link to={'/register'}>Регистрация</Link>
          </li>
          <li>
            <Link to={'/home'}>Главная</Link>
          </li>
          <li>
            <Link to={'/some'}>NoPage</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={
          <React.Suspense fallback={<span>............................</span>}>
            <Register />
          </React.Suspense>} />

        <Route path="home/:id?" element={<Home />} />
        
        <Route path="*" element={<span>404</span>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
