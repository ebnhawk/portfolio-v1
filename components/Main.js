import React, { Component } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from './Home'
import history from '../history'
import Navbar from './Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

class Main extends Component {
  componentDidMount() {
    AOS.init()
  }
  render() {
    return (
      <div id="main">
        <Navbar id="nav" history={history} />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Main
