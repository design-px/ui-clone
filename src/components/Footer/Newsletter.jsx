import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.scss';

const Newsletter = () => (
  <div className="newsletter">

    <div className="newsletter__heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>

    <div className="newsletter__input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>

  </div>
);

export default Newsletter;
