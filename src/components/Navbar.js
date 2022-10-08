/* eslint-disable */
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Books from './ShowBooks';
import Categories from './Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
  <Router>
    <nav className="nav">
      <Link className="logo" to="/">BookStore CMS</Link>
      <div className="navItems">
        <Link className="linkItem" to="/">Books</Link>
        <Link className="linkItem cats" to="/categories">Categories</Link>
      </div>
      <div className="user-icon"><FontAwesomeIcon className="usericon" icon={ faUser } /></div>
    </nav>

    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default Navbar;
