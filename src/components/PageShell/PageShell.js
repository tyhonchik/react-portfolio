import React, { useEffect } from 'react';
import Nav from '../Nav';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './PageShell.scss';

const PageShell = (Page) => (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page">
            <Nav />
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName="loadComponent"
            >
                <Page {...props} />
            </ReactCSSTransitionGroup>
        </div>
    );
};

export default PageShell;
