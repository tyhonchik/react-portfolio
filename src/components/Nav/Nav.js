import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.scss';

class Nav extends Component {
    render() {
        const {
            theme: {colorPrimary, navAlpha},
        } = this.context;

        const stickyClass = 'sticky';
        const stickyStyles = {backgroundColor: navAlpha, color: colorPrimary};
        return (
            <nav
                className={stickyClass}
                ref={(elem) => {
                    this.nav = elem;
                }}
                style={stickyStyles}
            >
                <div className="menu">
                    <Link className="menu__item active" to="/">
                        Home
                    </Link>
                    <Link className="menu__item" to="/about">
                        About
                    </Link>
                    <Link className="menu__item" to="/projects">
                        Portfolio
                    </Link>
                </div>
            </nav>
        );
    }
}

Nav.contextTypes = {
    theme: PropTypes.any,
};

export default Nav;
