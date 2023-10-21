/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

// admin
import SideMenu from "./components/admin/menu/menu";
import Dropzone from "./components/doctors/profilesetting/dropimage";
import patientRoute from "../router/patient.js";

const ClientAppUniversal = function (props) {
  return (
    <BrowserRouter>
      <div>
        <Route path="/join" exact component={Dropzone} />
        <Route path="/sider-menu" exact component={SideMenu} />
        <Route render={(props) => <Header {...props} />} />
        <Switch>
          {patientRoute.map((route, index) => {
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
        <Route render={(props) => <Footer {...props} />} />
      </div>
    </BrowserRouter>
  );
};

export default ClientAppUniversal;
