import React from "react";
import config from "config";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./assets/js/bootstrap.bundle.min.js";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css";
import Header from "./components/header/index";
import parmachyRoute from "../router/parmachy.js";

const PharmacyadminApp = function () {
  return (
    <BrowserRouter basename={`${config.publicPath}`}>
      <div className="main-wrapper">
        <Route render={(props) => <Header {...props} />} />
        <Switch>
          {parmachyRoute.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact
                component={route.component}
              />
            );
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default PharmacyadminApp;
