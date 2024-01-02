import React from 'react';
import './FooterComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const FooterComponent = () => {
  return (
    <div className='footerBackgroundColor'>
      <div className="container">
        <div className="row">
          {/* Left side */}
          <div className="m-0 p-2 col-md-7 col-lg-6">
            <h4 className="border-bottom border-light text-light p-2">
              <FontAwesomeIcon icon={faLightbulb} /> Privacy
            </h4>
            <div className="p-4">
              This personal portfolio website was developed to provide information about Marco's professional and technical experience. Please note that this site does not collect and store any visitor's personal data or collect any ad revenue.
            </div>
            <div className="p-4">
              Furthermore, you should not expect anyone claiming to represent this site to contact you directly to request any personal information. If you wish to contact or connect with Marco, please do it through any of the platforms listed above.
            </div>
          </div>
          {/* Right side */}
          <div className="m-0 p-2 col-md-5 col-lg-6">
            <h4 className="border-bottom border-light text-light p-2">
              <FontAwesomeIcon icon={faLightbulb} /> Notice
            </h4>
            <div className="p-4">
              This site is a site refresh from Marco's previous personal website. To view it, please click <a href="https://mgonzalez12000.github.io/marcosWebsite/index.html">here</a>.
            </div>
          </div>
          <div className="m-0 p-2 col-md-5 col-lg-6">
            <div className="p-4">
              Copyright © marcogonzalez.netlify.app 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
