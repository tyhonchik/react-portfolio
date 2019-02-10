import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '../../components/SocialIcons';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Andrew Ilin!</div>
          <div className="tagline">
            Full-Stack Dev
          </div>
          <SocialIcons />
        </div>
      </main>
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
