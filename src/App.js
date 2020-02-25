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
import RiskyBusiness from './components/RiskyBusiness'
import RockPaperScissorsKata from './components/Katas/components/RockPaperScissors'
import StockAvgCalc from './components/Katas/components/StockAvgCalc'


class App extends PureComponent {

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
    return <Katas/>
  }

  renderBabySitterKata = () => {
    return <BabySitterKata />
  }

  renderRPCKata = () =>{
    return <RockPaperScissorsKata />
  }

  renderStockCalc = () =>{
    return <StockAvgCalc />
  }

  renderRisky = () => {
    return <RiskyBusiness />
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
                <Route path="/stockPriceAvg" render={this.renderStockCalc} />
                <Route path="/risky" render={this.renderRisky} />
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
