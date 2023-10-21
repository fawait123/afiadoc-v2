/* eslint-disable react/prop-types */
import React, { useState, useContext, useMemo } from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/header/index";

import { Appcontext } from "../approuter";
import useGlobalStore from "../STORE/GlobalStore";
import adminRoute from "../router/admin";

const AppUniversal = function (props) {
  const [menu, setMenu] = useState(false);
  const { token } = useGlobalStore((state) => state);
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const { isAuth, setIsAuth } = useContext(Appcontext);

  const location = props?.location;

  useMemo(() => {
    if (
      location?.pathname == "/admin/login" ||
      location?.pathname == "/admin/register" ||
      location?.pathname == "/admin/forgotPassword" ||
      location?.pathname == "/admin/lockscreen" ||
      location?.pathname == "/admin/conform-email" ||
      location?.pathname == "/admin/404" ||
      location?.pathname == "/admin/500"
    ) {
      setIsAuth("admin");
    } else {
      setIsAuth("user");
    }
  }, [location]);
  return (
    <BrowserRouter>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        {isAuth !== "admin" && (
          <Route
            render={(props) => (
              <Header {...props} onMenuClick={() => toggleMobileMenu()} />
            )}
          />
        )}
        {token ? (
          <Switch>
            {adminRoute.map((route, index) => {
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
        ) : (
          (window.location.href = "/login")
        )}
      </div>
    </BrowserRouter>
  );
};

export default AppUniversal;
