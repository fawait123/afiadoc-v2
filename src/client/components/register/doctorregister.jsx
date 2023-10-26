import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.svg";
import { useFieldArray, useForm } from "react-hook-form";
import httpRequest from "../../../API/http";
import ButtonCustom from "../../../componentcustom/buttonCustom";
import useGlobalStore from "../../../STORE/GlobalStore";

const DoctorRegister = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "academics", // unique name for your Field Array
    }
  );
  const { loadingBtn, setLoadingBtn } = useGlobalStore((state) => state);
  const onSubmit = async (data) => {
    let formData = new FormData();
    let dataKey = Object.keys(data);
    dataKey.map((item) => {
      if (item == "photos" || item == "ktp" || item == "practice") {
        formData.append(item, data[item][0]);
      } else {
        formData.append(item, data[item]);
      }
    });
    setLoadingBtn(true);
    await httpRequest({
      url: "/auth//doctor",
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
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
                        Doctor Register{" "}
                        <Link to="/register">Are you not a doctor?</Link>
                      </h3>
                    </div>
                    {/* Register Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className={`form-control floating ${
                            errors.str && "is-invalid"
                          }`}
                          {...register("str", {
                            required: "please check the str",
                          })}
                        />
                        <label className="focus-label">STR</label>
                        {errors.str && (
                          <div className="invalid-feedback">
                            {errors.str.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className={`form-control floating ${
                            errors.nik && "is-invalid"
                          }`}
                          {...register("nik", {
                            required: "please check the nik",
                          })}
                        />
                        <label className="focus-label">NIK</label>
                        {errors.nik && (
                          <div className="invalid-feedback">
                            {errors.nik.message}
                          </div>
                        )}
                      </div>
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
                            errors.placebirth && "is-invalid"
                          }`}
                          {...register("placebirth", {
                            required: "please check the placebirth",
                          })}
                        />
                        <label className="focus-label">Placebirth</label>
                        {errors.placebirth && (
                          <div className="invalid-feedback">
                            {errors.placebirth.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className={`form-control floating ${
                            errors.birthdate && "is-invalid"
                          }`}
                          {...register("birthdate", {
                            required: "please check the birthdate",
                          })}
                        />
                        <label className="focus-label">Birthdate</label>
                        {errors.birthdate && (
                          <div className="invalid-feedback">
                            {errors.birthdate.message}
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
                          type="text"
                          className={`form-control floating ${
                            errors.phone && "is-invalid"
                          }`}
                          {...register("phone", {
                            required: "please check the phone",
                          })}
                        />
                        {console.log(errors.phone)}
                        <label className="focus-label">Phone</label>
                        {errors.phone && (
                          <div className="invalid-feedback">
                            {errors.phone.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <select
                          className={`form-control floating ${
                            errors.gender && "is-invalid"
                          }`}
                          {...register("gender", {
                            required: "please check the gender",
                          })}
                        >
                          <option value=""></option>
                          <option value="L">Male</option>
                          <option value="P">Female</option>
                        </select>
                        <label className="focus-label">Gender</label>
                        {errors.gender && (
                          <div className="invalid-feedback">
                            {errors.gender.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <select
                          className={`form-control floating ${
                            errors.religion && "is-invalid"
                          }`}
                          {...register("religion", {
                            required: "please check the religion",
                          })}
                        >
                          <option value=""></option>
                          <option value="islam">Islam</option>
                          <option value="kristen">Kristen</option>
                          <option value="buddha">Buddha</option>
                          <option value="katholik">Katholik</option>
                          <option value="konghucu">Konghucu</option>
                        </select>
                        <label className="focus-label">Religion</label>
                        {errors.religion && (
                          <div className="invalid-feedback">
                            {errors.religion.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <select
                          className={`form-control floating ${
                            errors.provinceID && "is-invalid"
                          }`}
                          {...register("provinceID", {
                            required: "please check the province",
                          })}
                        >
                          <option value=""></option>
                          <option value="L">Male</option>
                          <option value="P">Female</option>
                        </select>
                        <label className="focus-label">Province</label>
                        {errors.provinceID && (
                          <div className="invalid-feedback">
                            {errors.provinceID.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <select
                          className={`form-control floating ${
                            errors.districtID && "is-invalid"
                          }`}
                          {...register("districtID", {
                            required: "please check the district",
                          })}
                        >
                          <option value=""></option>
                          <option value="L">Male</option>
                          <option value="P">Female</option>
                        </select>
                        <label className="focus-label">District</label>
                        {errors.districtID && (
                          <div className="invalid-feedback">
                            {errors.districtID.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <select
                          className={`form-control floating ${
                            errors.subdistrictID && "is-invalid"
                          }`}
                          {...register("subdistrictID", {
                            required: "please check the subdistrict",
                          })}
                        >
                          <option value=""></option>
                          <option value="L">Male</option>
                          <option value="P">Female</option>
                        </select>
                        <label className="focus-label">Subdistrict</label>
                        {errors.subdistrictID && (
                          <div className="invalid-feedback">
                            {errors.subdistrictID.message}
                          </div>
                        )}
                      </div>
                      <div className="form-group form-focus">
                        <select
                          className={`form-control floating ${
                            errors.villageID && "is-invalid"
                          }`}
                          {...register("villageID", {
                            required: "please check the village",
                          })}
                        >
                          <option value=""></option>
                          <option value="L">Male</option>
                          <option value="P">Female</option>
                        </select>
                        <label className="focus-label">Village</label>
                        {errors.villageID && (
                          <div className="invalid-feedback">
                            {errors.villageID.message}
                          </div>
                        )}
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className={`form-control floating ${
                                errors.rt && "is-invalid"
                              }`}
                              {...register("rt", {
                                required: "please check the rt",
                              })}
                            />
                            {console.log(errors.rt)}
                            <label className="focus-label">RT</label>
                            {errors.rt && (
                              <div className="invalid-feedback">
                                {errors.rt.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className={`form-control floating ${
                                errors.rw && "is-invalid"
                              }`}
                              {...register("rw", {
                                required: "please check the rw",
                              })}
                            />
                            {console.log(errors.rw)}
                            <label className="focus-label">RW</label>
                            {errors.rw && (
                              <div className="invalid-feedback">
                                {errors.rw.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className={`form-control floating ${
                                errors.booking && "is-invalid"
                              }`}
                              {...register("booking", {
                                required: "please check the booking",
                              })}
                            />
                            {console.log(errors.booking)}
                            <label className="focus-label">Booking</label>
                            {errors.booking && (
                              <div className="invalid-feedback">
                                {errors.booking.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className={`form-control floating ${
                                errors.chatt && "is-invalid"
                              }`}
                              {...register("chatt", {
                                required: "please check the chatt",
                              })}
                            />
                            {console.log(errors.chatt)}
                            <label className="focus-label">Chatt</label>
                            {errors.chatt && (
                              <div className="invalid-feedback">
                                {errors.chatt.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {console.log(errors)}
                      {/* academic */}
                      <label onClick={append}>add</label>
                      {fields.map((field, index) => (
                        <div key={index}>
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className={`form-control floating ${
                                (errors.academics &&
                                  errors.academics.length > 0 &&
                                  errors.academics[index]?.name) > 0 &&
                                "is-invalid"
                              }`}
                              {...register(`academics.${index}.name`, {
                                required: "please check the name",
                              })}
                            />
                            <label className="focus-label">name</label>
                            {(errors.academics &&
                              errors.academics.length > 0 &&
                              errors.academics[index]?.name) > 0 && (
                              <div className="invalid-feedback">
                                {errors?.academics[index]?.name?.message}
                              </div>
                            )}
                          </div>
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              className={`form-control floating ${
                                errors.academics &&
                                errors.academics.length > 0 &&
                                "is-invalid"
                              }`}
                              {...register(`academics.${index}.degree`, {
                                required: "please check the degree",
                              })}
                            />
                            <label className="focus-label">degree</label>
                            {errors.academics &&
                              errors.academics.length > 0 && (
                                <div className="invalid-feedback">
                                  {errors?.academics[index]?.degree?.message}
                                </div>
                              )}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group form-focus">
                                <input
                                  type="text"
                                  className={`form-control floating ${
                                    errors.academics &&
                                    errors.academics.length > 0 &&
                                    "is-invalid"
                                  }`}
                                  {...register(
                                    `academics.${index}.year_entry`,
                                    {
                                      required: "please check the year_entry",
                                    }
                                  )}
                                />
                                <label className="focus-label">
                                  Year Entry
                                </label>
                                {errors.academics &&
                                  errors.academics.length > 0 && (
                                    <div className="invalid-feedback">
                                      {
                                        errors?.academics[index]?.year_entry
                                          ?.message
                                      }
                                    </div>
                                  )}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group form-focus">
                                <input
                                  type="text"
                                  className={`form-control floating ${
                                    errors.academics &&
                                    errors.academics.length > 0 &&
                                    "is-invalid"
                                  }`}
                                  {...register(`academics.${index}.year_out`, {
                                    required: "please check the year_out",
                                  })}
                                />
                                <label className="focus-label">Year Out</label>
                                {errors.academics &&
                                  errors.academics.length > 0 && (
                                    <div className="invalid-feedback">
                                      {
                                        errors.academics[index]?.year_out
                                          ?.message
                                      }
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* academic */}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group form-focus">
                            <input
                              type="file"
                              className={`form-control floating ${
                                errors.ktp && "is-invalid"
                              }`}
                              {...register("ktp", {
                                required: "please check the ktp",
                              })}
                            />
                            {console.log(errors.ktp)}
                            <label className="focus-label">KTP</label>
                            {errors.ktp && (
                              <div className="invalid-feedback">
                                {errors.ktp.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group form-focus">
                            <input
                              type="file"
                              className={`form-control floating ${
                                errors.practice && "is-invalid"
                              }`}
                              {...register("practice", {
                                required: "please check the practice",
                              })}
                            />
                            {console.log(errors.practice)}
                            <label className="focus-label">Practice</label>
                            {errors.practice && (
                              <div className="invalid-feedback">
                                {errors.practice.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="file"
                          className={`form-control floating ${
                            errors.photos && "is-invalid"
                          }`}
                          {...register("photos", {
                            required: "please check the photos",
                          })}
                        />
                        <label className="focus-label">Photo</label>
                        {errors.photos && (
                          <div className="invalid-feedback">
                            {errors.photos.message}
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

export default DoctorRegister;
