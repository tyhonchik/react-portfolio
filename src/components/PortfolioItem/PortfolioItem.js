import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './style.scss';

const PortfolioItem = (props, context) => {
    const {
        theme: {colorPrimary, textAlternate},
    } = context;

    const link = '/project/' + props.item.key;

    return (
        <div className="portfolio-item" style={{backgroundColor: colorPrimary, color: textAlternate}}>
            <div className="portfolio-item__title">{props.item.title}</div>
            <div className="portfolio-item__desc"> {props.item.shortDesc} </div>
            <hr />
            <div className="portfolio-item__role">
                <span>ROLE:</span> {props.item.role}
            </div>
            <div className="portfolio-item__icon">
                <i className="fa fa-code" />
            </div>
            <div className="portfolio-item__links">
                <Link className="menu__item" to={link}>
                    {' '}
                    More Info{' '}
                </Link>
            </div>
        </div>
    );
};

PortfolioItem.contextTypes = {
    theme: PropTypes.any,
};

export default PortfolioItem;
