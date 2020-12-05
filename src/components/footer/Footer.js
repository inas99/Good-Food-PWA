import React from 'react';
import { Link } from 'react-router-dom';

import Camera from 'react-feather/dist/icons/camera';
import Clock from 'react-feather/dist/icons/clock';

import './footer.css';
const Footer = () => (
  <footer class="page-footer">

  <div className="footer">
    <Link className="footer__link" to="/" >
      <Camera />
      Scan
    </Link>
    <Link className="footer__link" to="/history">
      <Clock />
      History
    </Link>
    <div class="footer_copyright"> Copyright © GoodFood | TVZ  | 2020 | All Rights Reserved
    </div>
    </div>
 </footer>
  


);

export default Footer;
