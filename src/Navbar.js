import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <p class="navbar-brand">Urban Essentials</p>
    <form class="d-flex" role="search">
        <Link to="/Cart">Cart</Link>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar