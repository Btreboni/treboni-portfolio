//react
import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//styled
import './App.css'
import Main from './styled/Main'
import Footer from './styled/Footer'

//components
import SideBar from './components/SideBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'


class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  renderHome = () => {
    return <Home />
  }

  renderAboutMe = () => {
    return <About />
  }

  renderSkills = () => {
    return <Skills />
  }

  renderExperience = () => {
    return <Experience />
  }

  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <div>
            <SideBar />
            <Main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" render={this.renderAboutMe} />
                <Route path="/skills" render={this.renderSkills} />
                <Route path="/experience" render={this.renderExperience} />
              </Switch>
            </Main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
