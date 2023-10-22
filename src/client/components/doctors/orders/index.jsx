import React from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import Header from "../../header.jsx";
import Footer from "../../footer.jsx";
import Tablerecords from "./tablerecords.jsx";

const Orders = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Medical Records</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/patient/dashboard">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Medical Records
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
                <DashboardSidebar />{" "}
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <Tablerecords />
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />
    </div>
  );
};

export default Orders;
