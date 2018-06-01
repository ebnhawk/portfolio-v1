import React from 'react'
import Intro from './Intro'
import Projects from './Projects'
import Contact from './Contact'

const Home = props => {
  return (
    <div id="home-container">
      <Intro history={props.history} />
      <Projects history={props.history} />
      <Contact history={props.history} />
    </div>
  )
}

export default Home
