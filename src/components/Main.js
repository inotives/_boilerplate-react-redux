import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'

export default () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
)
