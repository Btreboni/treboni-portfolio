//react
import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//styled
import './App.css'

//components
import Main from './styled/Main'
import SideBar from './components/SideBar'
import Home from './components/Home'
import About from './components/About'


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
                {/* <Route path="" render={} />
            <Route path="" render={} /> */}
              </Switch>
            </Main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
