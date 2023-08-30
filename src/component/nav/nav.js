import React from 'react';
import { Link } from 'react-router-dom';

export function Navs(){
    return(
<>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <Link class="navbar-brand" to="/">My Task</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link text-white" to='/'>Stopwatch</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to='/login'>Login Page</Link>
      </li>
      {/* <li class="nav-item">
        <Link class="nav-link" to='/Dashboard'>Welcome PAGE</Link>
      </li> */}
    
    </ul>
    {/* <span class="navbar-text">
      Navbar text with an inline element
    </span> */}
  </div>
</nav>
</>
    )
}