import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import httpRequest from "../../../../../API/http";
import moment from "moment";
import { toBase64 } from "../../../../../globalfunction";
import { FiEdit } from "react-icons/fi";
import useGlobalStore from "../../../../../STORE/GlobalStore";
import Utils from "../../../../../helpers/utils";

export const DashboardSidebar = () => {
  const pathname = window.location.pathname;
  const [address, setAddress] = useState("");
  const inputfile = useRef(null);
  const [dataUser, setDataUser] = useState(null);
  const [editPhoto, setEditPhoto] = useState("");
  const { photo, user, setPhoto } = useGlobalStore((state) => state);

  useEffect(() => {
    getCurrentLocation();
    getUser();
  }, []);

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

  const getUser = () => {
    httpRequest({
      url: "/admin/user/profile",
      method: "get",
    }).then((profile) => {
      setDataUser(profile.data.results);
    });
  };

  return (
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
            <li className={pathname.includes("/dashboard") ? "active" : ""}>
              <Link to="/patient/dashboard">
                <i className="fas fa-columns"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={pathname.includes("/dependent") ? "active" : ""}>
              <Link to="/patient/dependent">
                <i className="fas fa-users"></i>
                <span>Pasien</span>
              </Link>
            </li>
            <li className={pathname.includes("/favourites") ? "active" : ""}>
              <Link to="/patient/favourites">
                <i className="fas fa-bookmark"></i>
                <span>Favourites</span>
              </Link>
            </li>
            <li className={pathname.includes("/orders") ? "active" : ""}>
              <Link to="/patient/orders">
                <i className="fas fa-list-alt"></i>
                <span>Booking</span>
                <small className="unread-msg">7</small>
              </Link>
            </li>
            {/* <li className={pathname.includes("/chat-doctor") ? "active" : ""}>
              <Link to="/patient/patient-chat">
                <i className="fas fa-comments"></i>
                <span>Message</span>
                <small className="unread-msg">23</small>
              </Link>
            </li>
            <li className={pathname.includes("/accounts") ? "active" : ""}>
              <Link to="/patient/accounts">
                <i className="fas fa-file-invoice-dollar"></i>
                <span>Accounts</span>
              </Link>
            </li>
            <li
              className={pathname.includes("/medicalrecords") ? "active" : ""}
            >
              <Link to="/patient/medicalrecords">
                <i className="fas fa-clipboard"></i>
                <span>Add Medical Records</span>
              </Link>
            </li>
            <li
              className={pathname.includes("/medicaldetails") ? "active" : ""}
            >
              <Link to="/patient/medicaldetails">
                <i className="fas fa-file-medical-alt"></i>
                <span>Medical Details</span>
              </Link>
            </li>
            <li className={pathname.includes("/profile") ? "active" : ""}>
              <Link to="/patient/profile">
                <i className="fas fa-user-cog"></i>
                <span>Profile Settings</span>
              </Link>
            </li>
            <li
              className={pathname.includes("/change-password") ? "active" : ""}
            >
              <Link to="/patient/change-password">
                <i className="fas fa-lock"></i>
                <span>Change Password</span>
              </Link>
            </li> */}
            <li>
              <a
                to="#"
                onClick={() => {
                  Utils.logout();
                }}
              >
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default DashboardSidebar;
