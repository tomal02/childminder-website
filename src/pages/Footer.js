import './Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row" id="rowier">
              <div class="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div class="col item social">
                <a href="#">
                  <i class="icon ion-social-facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </i>
                </a>
                <a href="#">
                  <i class="icon ion-social-twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </i>
                </a>
                <a href="#">
                  <i class="icon ion-social-instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Footer;
