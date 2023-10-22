/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "./sidebar/sidebar.jsx";
// import { Tab, Tabs } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
  IMG10,
} from "./img";
import Dashboard1 from "../../../assets/images/specialities/pt-dashboard-01.png";
import Dashboard2 from "../../../assets/images/specialities/pt-dashboard-02.png";
import Dashboard3 from "../../../assets/images/specialities/pt-dashboard-03.png";
import Dashboard4 from "../../../assets/images/specialities/pt-dashboard-04.png";
import Graph1 from "../../../assets/images/shapes/graph-01.png";
import Graph2 from "../../../assets/images/shapes/graph-02.png";
import Graph3 from "../../../assets/images/shapes/graph-03.png";
import Graph4 from "../../../assets/images/shapes/graph-04.png";

import Footer from "../../footer";
import Header from "../../header.jsx";
import useGLobalStore from "../../../../STORE/GlobalStore/index.js";
import Tablerecords from "../orders/tablerecords.jsx";

const Dashboard = (props) => {
  const [count, setCount] = useState(1, 2, 3, 4);
  const user = useGLobalStore((state) => state);

  return (
    <>
      <Header {...props} />
      {/* <!-- Breadcrumb --> */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Dashboard</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Breadcrumb -->     */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar user={user?.user} />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img src={Dashboard1} width={55} />
                        </div>
                        <h5>Heart Rate</h5>
                        <h6>
                          12 <sub>bpm</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img src={Dashboard2} width={55} />
                        </div>
                        <h5>Body Temperature</h5>
                        <h6>
                          18 <sub>C</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img src={Dashboard3} width={55} />
                        </div>
                        <h5>Glucose Level</h5>
                        <h6>70 - 90</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <img src={Dashboard4} width={55} />
                        </div>
                        <h5>Blood Pressure</h5>
                        <h6>
                          202/90 <sub>mg/dl</sub>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row patient-graph-col">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Graph Status</h4>
                      </div>
                      <div className="card-body pt-2 pb-2 mt-1 mb-1">
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <Link
                              to="#"
                              className="graph-box"
                              data-bs-target="#graph1"
                            >
                              <div>
                                <h4>BMI Status</h4>
                              </div>
                              <div className="graph-img">
                                <img src={Graph1} />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 6d
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <Link
                              to="#"
                              className="graph-box pink-graph"
                              data-bs-target="#graph2"
                            >
                              <div>
                                <h4>Heart Rate Status</h4>
                              </div>
                              <div className="graph-img">
                                <img src={Graph2} />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 2d
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <Link
                              to="#"
                              className="graph-box sky-blue-graph"
                              data-bs-target="#graph3"
                            >
                              <div>
                                <h4>FBC Status</h4>
                              </div>
                              <div className="graph-img">
                                <img src={Graph3} />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 5d
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                            <Link
                              to="#"
                              className="graph-box orange-graph"
                              data-bs-target="#graph4"
                            >
                              <div>
                                <h4>Weight Status</h4>
                              </div>
                              <div className="graph-img">
                                <img src={Graph4} />
                              </div>
                              <div className="graph-status-result mt-3">
                                <span className="graph-update-date">
                                  Last Update 3d
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-md-12">
                      <Tablerecords />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default Dashboard;
