/* eslint-disable */
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';

const Navbar = () => (
  <Router>
    <nav className="nav">
      <Link className="logo" to="/">BookStore CMS</Link>
      <div className="navItems">
        <Link className="linkItem" to="/">Books</Link>
        <Link className="linkItem" to="/categories">Categories</Link>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default Navbar;
