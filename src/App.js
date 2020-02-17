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
import Experience from './components/Experience'
import Katas from './components/Katas'

//Kata components
import BabySitterKata from './components/Katas/components/BabySitter'
import RockPaperScissorsKata from './components/Katas/components/RockPaperScissors'


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

  renderExperience = () => {
    return <Experience />
  }

  renderCodingKatas = () => {
    debugger
    return <Katas renderBabySitterKata={this.renderBabySitterKata}/>
  }

  renderBabySitterKata = () => {
    debugger
    return <BabySitterKata />
  }

  renderRPCKata = () =>{
    return <RockPaperScissorsKata />
  }

  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <div id="container">
            <SideBar babysitterKata={this.renderBabySitterKata}/>
            <Main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" render={this.renderAboutMe} />
                <Route path="/experience" render={this.renderExperience} />
                <Route path="/katas" render={this.renderCodingKatas} />
                <Route path="/babySitterKata" render={this.renderBabySitterKata} />
                <Route path="/rockPaperScissorsKata" render={this.renderRPCKata} />
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
