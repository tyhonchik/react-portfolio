import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';
import ThemeSwitcher from './components/ThemeSwitcher';
import PageShell from './components/PageShell';
import Footer from './components/Footer';
import {projects} from './components/PortfolioItem/projects';

class App extends Component {
    render() {
        return (
            <Router basename="/react-portfolio" className="dev-landing-page">
                <ThemeSwitcher>
                    <Switch>
                        <Route exact path="/" component={PageShell(LandingPage)} />
                        <Route path="/about" component={PageShell(AboutPage)} />
                        <Route path="/projects" component={PageShell(PortfolioPage)} />
                        <Route path="/project/:key" render={(props) => <ProjectPage {...props} projects={[...projects]} />} />
                    </Switch>
                    <Footer />
                </ThemeSwitcher>
            </Router>
        );
    }
}

export default App;
