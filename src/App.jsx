import React from 'react'
import './App.scss'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Packages from './components/Packages'
import Pcr from './components/Pcr'
import Services from './components/Services'
import Steps from './components/Steps'
import WhereTravel from './components/WhereTravel'
import WhyUs from './components/WhyUs'


const App = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <WhereTravel />
      <Packages />
      <Steps />
      <Services />
      <WhyUs />
      <Pcr />
      <Contact />
      <Footer />
      <h5 style={{textAlign: 'center', margin: '20px', fontSize: '17px', opacity: 0.6}}>Product Design and Development by: 24 Design Company</h5>
    </div>
  )
}

export default App
