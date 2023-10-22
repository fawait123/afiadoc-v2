/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/AfiaAssets/logoAfia.png";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import FeatherIcon from "feather-icons-react";
import { afia_logo } from "./imagepath";

import Chart from "./patients/dashboard/chart";
import Notification from "./patients/dashboard/notification";
import useGlobalStore from "../../STORE/GlobalStore";

const Header = () => {
  const { user, photo, token } = useGlobalStore((state) => state);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const config = "/react/template";

  //mobile menu
  const [change, setChange] = useState(false);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuone, setSideMenuone] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const [isSideSearch, setSideSearch] = useState("");
  const [isSidebooking, setSideBooking] = useState("");
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [isSideMenuthree, setSideMenuthree] = useState("");
  const [isSideMenufour, setSideMenufour] = useState("");
  const [sideMenufive, setSideMenufive] = useState("");
  const [menu, setMenu] = useState(false);

  const toggleSidebarthree = (value) => {
    setSideMenuthree(value);
  };
  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebarfour = (value) => {
    setSideMenufour(value);
  };
  const toggleSidebarfive = (value) => {
    setSideMenufive(value);
  };
  const toggleSidebarone = (value) => {
    setSideMenuone(value);
  };
  const toggleSidebartwo = (value) => {
    setSideMenutwo(value);
  };
  const toggleSidebarsearch = (value) => {
    setSideSearch(value);
  };
  const toggleSidebarbooking = (value) => {
    setSideBooking(value);
  };

  // Rest of your code that uses pathnames

  let pathnames = window.location.pathname;
  const url = pathnames.split("/").slice(0, -1).join("/");
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  //nav transparent

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {!pathnames.includes("home1") && (
        <header
          className={`header ${
            pathnames.includes("/cosmeticshome")
              ? "header-fixed header-fourteen header-sixteen"
              : "" || pathnames.includes("/index10")
              ? "header-fixed header-fourteen header-fifteen"
              : "" || pathnames.includes("/home9")
              ? "header-fixed header-fourteen"
              : "" || pathnames.includes("/paediatrichome")
              ? "header-fixed header-fourteen header-twelve header-thirteen"
              : "" || pathnames.includes("/home7")
              ? "header-fixed header-fourteen header-twelve"
              : "" || pathnames.includes("/home6")
              ? "header-trans header-eleven"
              : "" || pathnames.includes("/home4")
              ? "header-trans custom"
              : "" || pathnames.includes("/cardiohome")
              ? "header header-fixed header-ten"
              : "" || pathnames.includes("home")
              ? "header-trans header-two"
              : "header-fixed header-one"
          } `}
          style={
            pathnames.includes("/home6") && navbar
              ? { background: "rgb(30, 93, 146)" }
              : { background: "" } && pathnames.includes("/index10") && navbar
              ? { background: "rgb(255, 255, 255)" }
              : { background: "" } &&
                pathnames.includes("/cosmeticshome") &&
                navbar
              ? { background: "rgb(255, 255, 255)" }
              : { background: "" } && pathnames.includes("/home4") && navbar
              ? { background: "rgb(43, 108, 203)" }
              : { background: "" } && pathnames.includes("/home9") && navbar
              ? { background: "rgb(43, 108, 203)" }
              : { background: "" } && pathnames.includes("/home") && navbar
              ? { background: "rgb(255, 255, 255)" }
              : { background: "" }
          }
        >
          <div className="container">
            <nav
              className={`navbar navbar-expand-lg header-nav ${
                pathnames.includes("home1") ? "nav-transparent" : ""
              }`}
            >
              <div className="navbar-header">
                <Link
                  to="#0"
                  id="mobile_btn"
                  onClick={() => onHandleMobileMenu()}
                >
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </Link>
                <Link to="/" className="navbar-brand logo">
                  {pathnames.includes("/cardiohome") ? (
                    <img
                      src={afia_logo}
                      alt="Logo"
                      style={{
                        width: 60,
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <img
                      src={afia_logo}
                      alt="Logo"
                      style={{
                        width: 60,
                        objectFit: "contain",
                      }}
                    />
                  )}
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to="/home" className="menu-logo">
                    <img
                      src={logo}
                      className="img-fluid"
                      alt="Logo"
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                  <Link
                    to="#0"
                    id="menu_close"
                    className="menu-close"
                    onClick={() => onhandleCloseMenu()}
                  >
                    <i className="fas fa-times"></i>
                  </Link>
                </div>

                <ul
                  className={`main-nav ${
                    pathnames.includes("home4") ? "white-font" : ""
                  }`}
                >
                  <li
                    className={`has-submenu ${
                      url.includes("/doctor") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="#"
                      className={isSideMenu == "doctors" ? "subdrop " : ""}
                      onClick={() =>
                        toggleSidebar(
                          isSideMenu == "doctors" ? "submenu" : "doctors"
                        )
                      }
                    >
                      Doctors <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "doctors" ? (
                      <ul
                        className={`${
                          isSideMenu == "doctors"
                            ? "submenu d-block"
                            : "submenu"
                        }`}
                      >
                        <li
                          className={
                            pathnames.includes("doctor-dashboard")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/doctor-dashboard"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Doctor Dashboard
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("schedule-timing")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/schedule-timing"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Schedule Timing
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("my-patients") ? "active" : ""
                          }
                        >
                          <Link
                            to="/doctor/my-patients"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Patients List
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("patient-profile")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/patient-profile"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Patients Profile
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("chat-doctor") ? "active" : ""
                          }
                        >
                          <Link
                            to="/doctor/chat-doctor"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Chat
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("invoice") ? "active" : ""
                          }
                        >
                          <Link
                            to="/doctor/invoice"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Invoices
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("profile-setting")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/profile-setting"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Profile Settings
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("doctor-register")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/doctor-register"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Doctor Register
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  <li
                    className={`has-submenu ${
                      url.includes("/patient") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="#"
                      className={isSideMenu == "patients" ? "subdrop" : ""}
                      onMouseEnter={() =>
                        toggleSidebar(
                          isSideMenu == "patients" ? "submenu" : "patients"
                        )
                      }
                    >
                      Patients <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "patients" ? (
                      <ul
                        className={`${
                          isSideMenu == "patients"
                            ? "submenu d-block"
                            : "submenu"
                        }`}
                      >
                        <li
                          className={`has-submenu ${
                            pathnames.includes("doctor") &&
                            !pathnames.includes("doctor-profile") &&
                            !pathnames.includes("search-doctor")
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSideMenutwo == "doctor" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebartwo(
                                isSideMenutwo == "doctor" ? "" : "doctor"
                              )
                            }
                          >
                            Doctors{" "}
                          </Link>
                          {isSideMenutwo == "doctor" ? (
                            <ul
                              className={
                                isSideMenutwo == "doctor"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("doctor-grid")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/doctor-grid"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Map Grid
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("doctor-list")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/doctor-list"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Map List
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li
                          className={`has-submenu ${
                            pathnames.includes("search-doctor") &&
                            !pathnames.includes("doctor-profile") &&
                            !pathnames.includes("search-doctor")
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSideSearch == "search-doctor" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarsearch(
                                isSideSearch == "search-doctor"
                                  ? ""
                                  : "search-doctor"
                              )
                            }
                          >
                            Search Doctor{" "}
                          </Link>
                          {isSideSearch == "search-doctor" ? (
                            <ul
                              className={
                                isSideSearch == "search-doctor"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("search-doctor1")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/search-doctor1"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Search Doctor 1
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("search-doctor2")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/search-doctor2"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Search Doctor 2
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li
                          className={
                            pathnames.includes("doctor-profile") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/doctor-profile"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Doctor Profile
                          </Link>
                        </li>
                        <li
                          className={`has-submenu ${
                            pathnames.includes("booking") &&
                            !pathnames.includes("booking-success")
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSidebooking == "booking" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarbooking(
                                isSidebooking == "booking" ? "" : "booking"
                              )
                            }
                          >
                            Booking
                          </Link>
                          {isSidebooking == "booking" ? (
                            <ul
                              className={
                                isSidebooking == "booking"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("booking1") ? "active" : ""
                                }
                              >
                                <Link
                                  to="/patient/booking1"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Booking 1
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("booking2") ? "active" : ""
                                }
                              >
                                <Link
                                  to="/patient/booking2"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Booking 2
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li
                          className={
                            pathnames.includes("checkout") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/checkout"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Checkout
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("booking-success")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/patient/booking-success"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Booking Success
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("dashboard") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/dashboard"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Patient Dashboard
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("favourites") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/favourites"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Favourites
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("patient-chat") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/patient-chat"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Chat
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("profile") &&
                            !pathnames.includes("doctor-profile")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/patient/profile"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Profile Settings
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("change-password")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/patient/change-password"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Change Password
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="has-submenu">
                    <Link
                      to="#"
                      // target="_blank"
                      className={isSideMenu == "admin" ? "subdrop" : ""}
                      onMouseEnter={() =>
                        toggleSidebar(
                          isSideMenu == "admin" ? "submenu" : "admin"
                        )
                      }
                    >
                      Admin
                      <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "admin" ? (
                      <ul
                        className={`${
                          isSideMenu == "admin" ? "submenu d-block" : "submenu"
                        }`}
                      >
                        <li>
                          <Link to="/admin" target="_blank">
                            Admin
                          </Link>
                        </li>

                        <li>
                          <Link to="/pharmacyadmin" target="_blank">
                            Pharmacy Admin
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
              {token ? (
                <ul className="nav header-navbar-rht">
                  <Chart />
                  <Notification />
                  <li className="nav-item dropdown has-arrow logged-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="user-img">
                        <img
                          className="rounded-circle"
                          src={photo}
                          width="31"
                          alt="Darren Elder"
                        />
                      </span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <img
                            src={photo}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>{user?.email}</h6>
                          <p className="text-muted mb-0">{user?.name}</p>
                        </div>
                      </div>
                      <Link className="dropdown-item" to="/patient/dashboard">
                        Dashboard
                      </Link>
                      <Link className="dropdown-item" to="/patient/profile">
                        Profile Settings
                      </Link>
                      <Link className="dropdown-item" to="/login">
                        Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              ) : (
                <ul className="nav header-navbar-rht">
                  <li className="login-in-sixteen">
                    <Link to="/login" className="btn reg-btn">
                      <i className="me-2">
                        <FeatherIcon icon="lock" />
                      </i>
                      Login<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
