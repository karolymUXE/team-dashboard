// import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Layout from "@components/Layout";
// import HomePage from "./HomePage";
// import AboutPage from "./AboutPage";

const App = () => {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}
    >
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <h1>Hello World</h1>
              <Link to='about'>About Us</Link>
            </div>
          }
        />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;