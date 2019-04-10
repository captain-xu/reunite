import React from "react"
import { renderRoutes } from "react-router-config"
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom"
import {Header} from '~/components'

import routes from "./routes"

export default (
  <Router>
    <>
      <Header />
      <div className="content">
        <Switch>
          {renderRoutes(routes)}
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </>
  </Router>
)