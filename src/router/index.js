import React from "react"
import { renderRoutes } from "react-router-config"
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom"

import routes from "./routes"

export default (
  <Router>
    <Switch>
      {renderRoutes(routes)}
      <Redirect to="/notfound" />
    </Switch>
  </Router>
)