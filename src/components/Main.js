import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import LoginSuccess from '../pages/LoginSuccess'
import Home from '../pages/Home'

export default () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/login_success' component={LoginSuccess}/>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </main>
)
