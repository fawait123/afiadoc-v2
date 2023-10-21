import React, { useEffect } from "react";
import loginBanner from "../../assets/images/login-banner.png";
import { Link } from "react-router-dom";
import useGlobalStore from "../../../STORE/GlobalStore";
import { Formik } from "formik";
import validationLogin from "../../../validation/login";
import ButtonCustom from "../../../componentcustom/buttonCustom";
import httprequest from "../../../API/http";
import { useHistory } from "react-router-dom";

const LoginContainer = () => {
  const { setLoadingBtn, loadingBtn } = useGlobalStore((state) => state);
  const navigate = useHistory();

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  return (
    <>
      {/* Page Content */}
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Doccure</span>
                      </h3>
                    </div>
                    <Formik
                      initialValues={{ username: "", password: "" }}
                      validationSchema={validationLogin}
                      onSubmit={async (value) => {
                        // console.log(value);
                        setLoadingBtn(true);
                        await httprequest({
                          url: "/auth/login",
                          method: "post",
                          data: value,
                        })
                          .then((res) => {
                            const token = res.data.results.data.token;
                            const role = res.data.results.data.user.role.name;
                            const photo = res.data.results.data.user.photo;
                            const userData = res.data.results.data.user;

                            delete userData.photo;
                            const user = btoa(JSON.stringify(userData));

                            setLoadingBtn(false);
                            localStorage.setItem("user", user);
                            localStorage.setItem("photo", photo);
                            localStorage.setItem("token", token);
                            if (role === "pengguna") {
                              navigate.push("/patient/dashboard");
                            } else if (role === "dokter") {
                              navigate.push("/doctor/doctor-dashboard");
                            } else {
                              // navigate.push("/admin");
                              window.location.href = "/admin";
                            }
                          })
                          .catch(() => {
                            setLoadingBtn(false);
                          });
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,

                        handleSubmit,
                      }) => (
                        // <form onSubmit={handleSubmit}>
                        <>
                          <div className="form-group form-focus">
                            <input
                              name="username"
                              onChange={handleChange}
                              type="text"
                              className="form-control floating"
                              value={values.username}
                            />

                            <label className="focus-label">Username</label>
                            <span className="text-danger text-sm">
                              {errors.username &&
                                touched.username &&
                                errors.username}
                            </span>
                          </div>
                          <div className="form-group form-focus">
                            <input
                              type="password"
                              name="password"
                              onChange={handleChange}
                              value={values.password}
                              className="form-control floating"
                            />
                            <label className="focus-label">Password</label>
                            <span className="text-danger text-sm">
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </span>
                          </div>
                          <div className="text-end">
                            <Link
                              className="forgot-link"
                              to="/pages/forgot-password"
                            >
                              Forgot Password ?
                            </Link>
                          </div>

                          <ButtonCustom
                            onClick={handleSubmit}
                            title={"Login"}
                            loading={loadingBtn}
                          />

                          <div className="text-center dont-have">
                            Don’t have an account?{" "}
                            <Link to="/register">Register</Link>
                          </div>
                        </>
                        // </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default LoginContainer;
