import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Preview from '../components/Preview'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import Place from '../components/Place'

const routes = (
  <div>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/place/:place" component={Place} />
      <Route path="/preview" component={Preview} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
