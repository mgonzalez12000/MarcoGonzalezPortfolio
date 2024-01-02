import React from 'react'
import './FooterComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const FooterComponent = () => {
  return (
    <div className='footerBackgroundColor'>
        <div class="container">
            <div class="row">
                {/* left side */}
                <div class="m-0 p-2 col-md-7 col-lg-6">
                    <h4 id="leftHeader" class="border-bottom border-light text-light p-2">
                        <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon> Privacy
                    </h4>
                    <div class="p-4">
                        This personal portfolio website was developed to provide information about Marco's professional and technical experience. Please note that
                        this site does not collect and store any visitor's personal data or collect any ad revenue.
                    </div>
                    <div class="p-4">
                        Furthermore, you should not expect at any point for someone to contact you direct in order to request any personal information. If
                        you wish to contact or connect with Marco, please do it through any of the platforms listed above.
                    </div>
                    <div class="p-4">
                        Copyright © marcogonzalez.netlify.app 2024
                    </div>
                </div>
                {/* right side */}
                <div class="m-0 p-2 col-md-5 col-lg-6 ">
                    <h4 id="leftHeader" class="border-bottom border-light text-light p-2">
                        <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon> Notice
                    </h4>
                    <div class="p-4">
                        This site is a site refresh from Marco's previous personal website. To view it, please click <a href="https://mgonzalez12000.github.io/marcosWebsite/index.html">here</a>.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default FooterComponent