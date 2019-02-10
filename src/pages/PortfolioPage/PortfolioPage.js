import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../../components/PortfolioItem';

import './style.scss';

const PortfolioPage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  const projects = [
    {key: "mttr", title: "MetaTender", shortDesc: "Tender search service", role: "Full-Stack Developer"},
    {key: "jzine", title: "J-zine", shortDesc: "Tzniut fashion magazine", role: "Co-founder, Developer"},
    {key: "crm", title: "CRM", shortDesc: "CRM for developers", role: "Developer"},
    {key: "parser", title: "Parser (v2.0)", shortDesc: "Gathering tenders", role: "Developer"}, 
  ];

  return (
    <div className="portfolio-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .portfolio-item a {
                color: ${textAlternate};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {/* <PortfolioItem /> */}
          {projects.map((item, i) => (
            <PortfolioItem key={item.key} item={{...item}} />
          ))}
        </div>
      </div>
      {/* <ScrollToPrevious pageSelector=".about-page" /> */}
    </div>
  );
};

PortfolioPage.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioPage;
