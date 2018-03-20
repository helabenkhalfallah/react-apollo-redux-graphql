import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import UserModule from '../users/index'
import AppCommonModule from '../commons/index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/users" component={UserModule.UserListPage} />
      <Route path="/*" component={AppCommonModule.NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default Routes
