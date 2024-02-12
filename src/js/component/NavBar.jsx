import React from "react";


function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light ms-md-5" href="#"><strong>Start bootstrap</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end me-md-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  
  );
}
export default NavBar;