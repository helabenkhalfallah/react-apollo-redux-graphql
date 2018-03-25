import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import UserModule from '../users/index'
import AppCoreModule from '../core/index'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/users" component={UserModule.UserListPage} />
      <Route path="/*" component={AppCoreModule.NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default Routes
