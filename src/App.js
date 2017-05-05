import React, {Component} from 'react'
import Footer from './components/Footer'
import Card from './components/Card'

class App extends Component {
  render(){
    return (
      <div>

        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">React-BASE</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col l12 m12 s12">
              <h2>React Base Splash page</h2>
              <hr />
            </div>
            <div className="col l12 m12 s12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <hr />
            </div>

            <div className="col l12 m12 s12">
              <div className="row">
                <div className="col l4 m6 s12">
                  <Card/>
                </div>

                <div className="col l4 m6 s12">
                  <Card/>
                </div>

                <div className="col l4 m6 s12">
                  <Card/>
                </div>
              </div>
            </div>


          </div>
        </div>

        <Footer />

      </div>
    )
  }
}

export default App
