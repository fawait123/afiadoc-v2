import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.svg";
import { useForm } from "react-hook-form";
import httpRequest from "../../../API/http";
import ButtonCustom from "../../../componentcustom/buttonCustom";
import useGlobalStore from "../../../STORE/GlobalStore";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loadingBtn, setLoadingBtn } = useGlobalStore((state) => state);
  const onSubmit = async (data) => {
    setLoadingBtn(true);
    await httpRequest({
      url: "/auth/register",
      method: "post",
      data,
    })
      .then((response) => {
        console.log(response);
        setLoadingBtn(false);
        window.location.href = "/login";
      })
      .catch((e) => {
        setLoadingBtn(false);
        console.log(e);
      });
  };
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
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Doccure Register"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        User Register{" "}
                        <Link to="/doctor-register">Are you a Doctor?</Link>
                      </h3>
                    </div>
                    {/* Register Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className={`form-control floating ${
                            errors.name && "is-invalid"
                          }`}
                          {...register("name", {
                            required: "please check the name",
                          })}
                        />
                        <label className="focus-label">Name</label>
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className={`form-control floating ${
                            errors.username && "is-invalid"
                          }`}
                          {...register("username", {
                            required: "please check the username",
                          })}
                        />
                        <label className="focus-label">Username</label>
                        {errors.username && (
                          <div className="invalid-feedback">
                            {errors.username.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className={`form-control floating ${
                            errors.email && "is-invalid"
                          }`}
                          {...register("email", {
                            required: "please check the email",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {console.log(errors.email)}
                        <label className="focus-label">Email</label>
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className={`form-control floating ${
                            errors.password && "is-invalid"
                          }`}
                          {...register("password", {
                            required: "please check the password",
                            minLength: {
                              value: 10,
                              message: "Password minimum 10 characters",
                            },
                          })}
                        />
                        <label className="focus-label">Password</label>
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/login">
                          Already have an account?
                        </Link>
                      </div>
                      <ButtonCustom
                        onClick={handleSubmit}
                        title={"Signup"}
                        loading={loadingBtn}
                      />
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default Register;
