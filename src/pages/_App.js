import React, {Component} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Card from '../components/Card'

class App extends Component {
  render(){
    return (
      <div>

        <Header navLinks={ {total: 1, links: [{name: 'Login', path: '/login'}]} }/>
        <Main />
        <Footer />

      </div>
    )
  }
}

export default App
