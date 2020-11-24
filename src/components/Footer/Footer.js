import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Footer = (props, context) => {
    const {
        theme: {textPrimary},
    } = context;
    return (
        <footer>
            <div className="content-grid">
                <div style={{color: textPrimary}}>
                    Made by Andrew Ilin | for inspiration thanks to Dinesh{' '}
                    <span role="img" aria-label="heart">
                        🤘
                    </span>
                </div>
            </div>
        </footer>
    );
};

Footer.contextTypes = {
    theme: PropTypes.any,
};

export default Footer;
