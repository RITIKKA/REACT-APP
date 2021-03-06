import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
// import brand from '../assets/logo.jpg'
function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      {/* <img src={brand} alt="logo"></img> */}
    <a class="navbar-brand" to="/home">SVIET SPECTRUM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/super">Super60 Info</Link></li>
            <li><Link class="dropdown-item" to="/event">Events</Link></li>
            {/* <li><hr class="dropdown-divider"/></li> */}
            <li><Link class="dropdown-item" to="/more">More</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/create-your-post">Create-Your-Post</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
export default Header