import React from 'react'
import './Connect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Connect = () => {
    return (
    <div class = "container">
      <div class="row">
        <div class="col">
          <span class="fa-stack fa-3x">
            <a href="mailto: mgonzalez12000@gmail.com" class="nav-link">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a>
          </span>
        </div>
        <div class="col">
          <span class="fa-stack fa-3x">
            <a href="https://www.linkedin.com/in/marcog12000" class="nav-link">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </span>
        </div>
        <div class="col">
          <span class="fa-stack fa-3x">
            <a href="https://github.com/mgonzalez12000" class="nav-link">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Connect