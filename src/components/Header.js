import React, {Component} from 'react'
import {Navbar, NavItem} from 'react-materialize'
import {NavLink} from 'react-router-dom'

class Header extends Component {

  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props)
    console.log(this.state)

    return (
      <Navbar brand="Logo" right>
        
        <li id="li-page2-link"><NavLink to="/login">Login</NavLink></li>
      </Navbar>
    )
  }
}

export default Header
