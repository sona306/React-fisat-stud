import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">
      <img src="data:image/png;base64,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" alt="Logo" width="100" height="100" class="d-inline-block align-text-top"/>
      <img src="https://fisat.ac.in/wp-content/themes/fisat2022/assets/testcopy.png" alt="Logo" width="700" height="100" class="d-inline-block align-text-top"/>
    </Link>
  </div>
</nav>

        <nav class="navbar navbar-expand-lg bg-warning">
            <div class="container-fluid">
                 <Link class="navbar-brand" to="#">StudentApp</Link>
                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link class="nav-link active" aria-current="page" to="/">AddStudent</Link>
                                <Link class="nav-link" to="/search">Search</Link>
                                <Link class="nav-link" to="/view">View</Link>
                                <Link class="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </div>
                            </div>
             </div>
        </nav>
    </div>
  )
}

export default Nav