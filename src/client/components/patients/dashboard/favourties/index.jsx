import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import { IMG01 } from "./img";

import Footer from "../../../footer";
import Header from "../../../header.jsx";
import httpRequest from "../../../../../API/http.js";
import Utils from "../../../../../helpers/utils.js";

const Favourites = (props) => {
  const [rows, setRows] = useState([]);
  const getData = async () => {
    httpRequest({
      url: "/admin/favorite",
      method: "get",
    })
      .then((response) => {
        const results = response?.data?.results?.data;
        setRows(results);
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center  inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Favourites</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Favourites
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row row-grid">
                {rows.map((item, index) => {
                  return (
                    <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to="/patient/doctor-profile">
                            <img className="img-fluid" alt="User" src={IMG01} />
                          </Link>
                          <Link to="#0" className="fav-btn">
                            <i className="far fa-bookmark"></i>
                          </Link>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <Link to="/patient/doctor-profile">
                              Dr. {item?.doctor?.name}
                            </Link>
                            <i className="fas fa-check-circle verified"></i>
                          </h3>
                          <p className="speciality">
                            {item?.doctor?.specialist?.name}
                          </p>
                          <div className="rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <span className="d-inline-block average-rating ms-1">
                              (17)
                            </span>
                          </div>
                          <ul className="available-info">
                            <li>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {Utils.formatAddress(item?.doctor?.addresses)}
                            </li>
                            <li>
                              <i className="far fa-clock"></i> Available on Fri,
                              22 Mar
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt"></i> RP{" "}
                              {Utils.doctorPrice(
                                item?.doctor?.prices
                              )?.toLocaleString("id", "ID")}
                              <i
                                className="fas fa-info-circle"
                                data-bs-toggle="tooltip"
                                title="Lorem Ipsum"
                              ></i>
                            </li>
                          </ul>
                          <div className="row row-sm">
                            <div className="col-6">
                              <Link
                                to="/patient/doctor-profile"
                                className="btn view-btn"
                              >
                                Remove
                              </Link>
                            </div>
                            <div className="col-6">
                              <Link
                                to="/patient/booking1"
                                className="btn book-btn"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Favourites;
