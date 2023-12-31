import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faM } from '@fortawesome/free-solid-svg-icons'
import { faG } from '@fortawesome/free-solid-svg-icons'

const Navbar = props => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-dark" eventKey="2">
        <a class="navbar-brand" href="#">
            <FontAwesomeIcon icon={faM}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faG}></FontAwesomeIcon>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">About Me <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Experience</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar