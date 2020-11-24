import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
    const {
        theme: {colorPrimary},
    } = context;

    return (
        <div className="social-icons animate-icons">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/tyhonchik" style={{color: colorPrimary}}>
                <i className="fab fa-github"></i>
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/андрей-ильин-177306102"
                style={{color: colorPrimary}}
            >
                <i className="fab fa-linkedin"></i>
            </a>
        </div>
    );
};

SocialIcons.contextTypes = {
    theme: PropTypes.any,
};

export default SocialIcons;
