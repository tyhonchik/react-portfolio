import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
          <blockquote>
          It’s not a bug. It’s an undocumented feature!
            </blockquote>
            <p>
            For the most part, all my work is to <span className="highlight">realize ideas</span> - do not write the back-end code for some front-end,
            do not create a front-end for some back-end, and so on..
            </p>
            <p>
            They say: <i><u>"We urgently need to realize this idea ..."</u></i>,
            and the search and analysis of tons of information begins: 
            what is better to use; 
            what works faster; 
            whether it will be possible to expand; 
            what will be the speed of development, if I apply these technologies.
            </p>
            <p>
            Probably, that's why I did not become a "one technology expert" - <span className="highlight">So many cool stuff!</span><br/>
            But still for this moment my favorite: .NET Core + ReactJS.
              
            </p>
            <br/>
              <h3>Stack:</h3>
            <p>
              <b style={{color: "purple"}}>Front:</b> HTML, CSS, Sass, ReactJS, AngularLight, jQuery, etc. <br/>
              <b style={{color: "purple"}}>Back:</b> C#, .NET Core, ASP.NET MVC, NodeJS, Typescript, T-SQL, RabbitMQ, IronRuby <br/>
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
