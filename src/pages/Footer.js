import './Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row" id="rowier">
              <div class="col-md-6 item text">
                <h3>Molesey Childminder</h3>
                <p>
                  An Ofsted rated 'outstanding' childminder, providing children
                  with a safe and secure environment to learn and play.
                </p>
              </div>
              <div class="col item social">
                <a href="https://www.facebook.com/WestMoleseyChildminder">
                  <i class="icon ion-social-facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                  </i>
                </a>

                <a href="https://www.instagram.com/moleseychildminder">
                  <i class="icon ion-social-instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
