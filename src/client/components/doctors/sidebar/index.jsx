import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalStore from "../../../../STORE/GlobalStore";
import { FiEdit } from "react-icons/fi";
import { toBase64 } from "../../../../globalfunction";
import httpRequest from "../../../../API/http";
import moment from "moment";
import Utils from "../../../../helpers/utils";

const DoctorSidebar = () => {
  let pathnames = window.location.pathname;
  const [editPhoto, setEditPhoto] = useState("");
  const [address, setAddress] = useState("");
  const inputfile = useRef(null);
  const { photo, user, setPhoto } = useGlobalStore((state) => state);
  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(async (current) => {
      // console.log();
      const { latitude, longitude } = current.coords;
      await httpRequest({
        url: "/public/find-location",
        params: {
          latitude,
          longitude,
        },
      }).then((res) => {
        const { administrativeLevels } = res.data.results.data[0];
        // console.log();
        setAddress(
          `${administrativeLevels?.level3short}, ${administrativeLevels?.level1long}`
        );
      });
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link
              to="#0"
              style={{ position: "relative", overflow: "hidden" }}
              className="booking-doc-img"
            >
              <div
                onMouseEnter={() => {
                  setEditPhoto(true);
                }}
                onMouseLeave={() => {
                  setEditPhoto(false);
                }}
                onClick={() => {
                  inputfile.current.click();
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  backgroundColor: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  // borderRadius: "100%",
                  opacity: editPhoto ? 0.8 : 0,
                  color: "white",
                  transitionDuration: "0.5s",
                }}
              >
                <FiEdit />
                <p>Edit Photo</p>
              </div>
              <img src={photo} alt="User" style={{ objectFit: "contain" }} />
            </Link>
            <input
              ref={inputfile}
              type="file"
              hidden={true}
              onChange={(e) => {
                const base64 = e.target.files[0];
                toBase64(base64).then(async (res) => {
                  httpRequest({
                    url: "admin/user/profile/photo",
                    method: "post",
                    data: {
                      photo: res,
                    },
                  }).then((v) => {
                    localStorage.setItem("photo", v.data.results.data.photo);
                    setPhoto(v.data.results.data.photo);
                  });
                });
              }}
            />
            <div className="profile-det-info">
              <h3>{user?.name}</h3>
              <div className="patient-details">
                <h5>
                  <i className="fas fa-birthday-cake"></i>{" "}
                  {moment().format("DD MMMM YYYY")}
                </h5>
                <h5 className="mb-0">
                  <i className="fas fa-map-marker-alt"></i>
                  {address}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>
              <li
                className={
                  pathnames.includes("/doctor/dashboard") ? "active" : ""
                }
              >
                <Link to="/doctor/dashboard">
                  <i className="fas fa-columns" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/doctor/appointment/list") ? "active" : ""
                }
              >
                <Link to="/doctor/appointment/list">
                  <i className="fas fa-calendar-check" />
                  <span>Booking List</span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/doctor/appointments") ? "active" : ""
                }
              >
                <Link to="/doctor/appointments">
                  <i className="fa fa-link" />
                  <span>Appointments</span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/doctor/my-patients") ? "active" : ""
                }
              >
                <Link to="/doctor/my-patients">
                  <i className="fas fa-user-injured" />
                  <span>My Patients</span>ks
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/doctor/schedule-timing") ? "active" : ""
                }
              >
                <Link to="/doctor/schedule-timing">
                  <i className="fas fa-hourglass-start" />
                  <span>Schedule Timings</span>
                </Link>
              </li>
              {/* <li
                className={
                  pathnames.includes("/doctor/available-timing") ? "active" : ""
                }
              >
                <Link to="/doctor/available-timing">
                  <i className="fas fa-clock" />
                  <span>Available Timings</span>
                </Link>
              </li> */}
              {/* <li
                className={pathnames.includes("/pages/invoice") ? "active" : ""}
              >
                <Link to="/pages/invoice">
                  <i className="fas fa-file-invoice" />
                  <span>Invoices</span>
                </Link>
              </li> */}
              {/* <li
                className={
                  pathnames.includes("/doctor/account") ? "active" : ""
                }
              >
                <Link to="/doctor/account">
                  <i className="fas fa-file-invoice-dollar" />
                  <span>Accounts</span>
                </Link>
              </li> */}
              {/* <li
                className={pathnames.includes("/doctor/review") ? "active" : ""}
              >
                <Link to="/doctor/review">
                  <i className="fas fa-star" />
                  <span>Reviews</span>
                </Link>
              </li> */}
              {/* <li
                className={
                  pathnames.includes("/doctor/chat-doctor") ? "active" : ""
                }
              >
                <Link to="/doctor/chat-doctor">
                  <i className="fas fa-comments" />
                  <span>Message</span>
                  <small className="unread-msg">23</small>
                </Link>
              </li> */}
              {/* <li
                className={
                  pathnames.includes("/doctor/profile-setting") ? "active" : ""
                }
              >
                <Link to="/doctor/profile-setting">
                  <i className="fas fa-user-cog" />
                  <span>Profile Settings</span>
                </Link>
              </li> */}
              {/* <li
                className={
                  pathnames.includes("/doctor/social-media") ? "active" : ""
                }
              >
                <Link to="/doctor/social-media">
                  <i className="fas fa-share-alt" />
                  <span>Social Media</span>
                </Link>
              </li> */}
              {/* <li
                className={
                  pathnames.includes("/doctor/doctor-change-password")
                    ? "active"
                    : ""
                }
              >
                <Link to="/doctor/doctor-change-password">
                  <i className="fas fa-lock" />
                  <span>Change Password</span>
                </Link>
              </li> */}
              <li className={pathnames.includes("/home") ? "active" : ""}>
                <a
                  href="#"
                  onClick={() => {
                    Utils.logout();
                  }}
                >
                  <i className="fas fa-sign-out-alt" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* /Profile Sidebar */}
    </>
  );
};

export default DoctorSidebar;
