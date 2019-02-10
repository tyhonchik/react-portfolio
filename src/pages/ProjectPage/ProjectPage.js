import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Nav from '../../components/Nav';
import './ProjectPage.scss';

const projectPage = (props, context) => {
    const { theme: { bgPrimary, colorPrimary } } = context;

    let project = null;
    if (props.match.params.key) {
        props.projects
            .filter(el => el.key === props.match.params.key)
            .map((el) => (project = el)
            )
    }

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

    const renderedImages = [];
    const text = [];

    project.images.map((img) => (images
        .filter(el => el.indexOf(img) > -1)
        .map((el) => (
            renderedImages.push(
                <div key={img}><img src={el} alt={project.title} className="project-image__next" /></div>
            )
        ))
    ));

    project.fullDesc.map((el, index) => text.push(
        <p key={"p_" + index} style={el.style}>
            {el.text}
        </p>
    ))


    return (
        <div style={{ backgroundColor: bgPrimary }} className="project-page">
            <Nav />
            <main style={{ color: colorPrimary }}>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName='loadProject'
                >
                    <div className="project-wrapper">
                        <div className="project-header">

                            <span className="goBackButton"
                                onClick={e => {
                                    e.preventDefault();
                                    props.history.goBack();
                                }}
                            >
                                <i className="fas fa-long-arrow-alt-left fa-2x" />
                            </span>
                            <h1>{project.title}</h1>
                        </div>
                        <div className="project-body">
                            <div className="project-description">
                                {text}
                            </div>
                            <div className="project-images">
                                {renderedImages}
                            </div>
                        </div>

                    </div>
                </ReactCSSTransitionGroup>
            </main>
        </div>
    );
};

projectPage.contextTypes = {
    theme: PropTypes.any
};

export default projectPage;