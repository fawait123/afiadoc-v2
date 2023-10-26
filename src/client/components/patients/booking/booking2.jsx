import React, { useEffect, useState } from "react";
import Header from "../../header";
import { Link } from "react-router-dom";
import { appimg, devicemessage, googleimg, smartphone } from "../../imagepath";
import Footer from "../../footer";
import "bootstrap-daterangepicker/daterangepicker.css";
import { FaSearchengin } from "react-icons/fa6";
import { CardQueue } from "./CardQueue";
import moment from "moment";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import httpRequest from "../../../../API/http";
import useGlobalStore from "../../../../STORE/GlobalStore";
import { Spin } from "antd";

const Booking2 = (props) => {
  const { doctorID } = useParams();
  const [data, setData] = useState({});
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [queue, setQueue] = useState([]);
  const { loadingTable, setLoadingTable, user } = useGlobalStore(
    (state) => state
  );

  const getData = async () => {
    await httpRequest({
      url: "/public/doctor",
      method: "get",
      params: {
        doctorID: doctorID,
      },
    })
      .then((response) => {
        const result = response?.data?.results?.data?.rows;
        setData(result[0] || {});
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getQueue = async () => {
    setLoadingTable(true);
    await httpRequest({
      url: "/public/registration",
      method: "get",
      params: {
        doctorID: doctorID,
        date: date,
      },
    })
      .then((response) => {
        const results = response?.data?.results?.data;
        setQueue(results);
        setLoadingTable(false);
      })
      .catch((e) => {
        console.log(e);
        setLoadingTable(false);
      });
  };

  useEffect(() => {
    getData();
    getQueue();
  }, []);
  return (
    <div className="main-wrapper">
      <Header {...props} />

      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Booking</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Booking
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="content content-space">
        <div className="container">
          {/* Booking */}
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="booking-header">
                <h4 className="booking-title">Select Available Slots</h4>
              </div>
              <div className="row align-items-center mb-4">
                <div className="col-md-10">
                  <input
                    type="date"
                    className="form-control"
                    defaultValue={date}
                    onChange={(event) => setDate(event.target.value)}
                    min={moment().format("YYYY-MM-DD")}
                    max={moment().add(15, "days").format("YYYY-MM-DD")}
                  />
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      getQueue();
                    }}
                  >
                    <FaSearchengin />
                  </button>
                </div>
              </div>
              <div
                style={{
                  height: 400,
                  padding: 15,
                  marginBottom: 10,
                  overflow: "scroll",
                }}
              >
                {loadingTable ? (
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Spin />
                  </div>
                ) : queue.length > 0 ? (
                  queue.map((item, index) => {
                    return (
                      <CardQueue
                        data={item}
                        key={index}
                        background={
                          user && user?.id == item?.userID
                            ? "#051d3d"
                            : "#c0c7d0"
                        }
                        color={
                          user && user?.id == item?.userID
                            ? "#c0c7d0"
                            : "#051d3d"
                        }
                        index={++index}
                      />
                    );
                  })
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h1 className="text-black-50">Tidak ada antrian</h1>
                  </div>
                )}
              </div>
              <div className="booking-btn">
                <Link
                  to="/patientdetails"
                  className="btn btn-primary prime-btn justify-content-center align-items-center"
                >
                  Next <i className="feather-arrow-right-circle" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="booking-header">
                <h4 className="booking-title">Booking Summary</h4>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body">
                  <div className="booking-doctor-details">
                    <div className="booking-doctor-left">
                      <div className="booking-doctor-img">
                        <Link to="/patient/doctor-profile">
                          <img src={data?.photos} alt="doctor" />
                        </Link>
                      </div>
                      <div className="booking-doctor-info">
                        <h4>
                          <Link to="/patient/doctor-profile">
                            Dr. {data?.name}
                          </Link>
                        </h4>
                        <p>{data?.specialist?.name}</p>
                      </div>
                    </div>
                    <div className="booking-doctor-right">
                      <p>
                        <i className="fas fa-check-circle" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card booking-card">
                <div className="card-body booking-card-body">
                  <div className="booking-doctor-details">
                    <div className="booking-device">
                      <div className="booking-device-img">
                        <img src={devicemessage} alt="devicemsg" />
                      </div>
                      <div className="booking-doctor-info">
                        <h3>We can help you</h3>
                        <p className="device-text">
                          Call us +1 888-888-8888 (or) chat with our customer
                          support team.
                        </p>
                        <Link to="/patient/patient-chat" className="btn">
                          Chat With Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card booking-card mb-0">
                <div className="card-body booking-card-body">
                  <div className="booking-doctor-details">
                    <div className="booking-device">
                      <div className="booking-device-img">
                        <img src={smartphone} alt="smartphone" />
                      </div>
                      <div className="booking-doctor-info">
                        <h3>Get the App</h3>
                        <p className="device-text">
                          Download our app for better experience and for more
                          feature
                        </p>
                        <div className="app-images">
                          <Link to="#">
                            <img src={googleimg} alt="googleimg" />
                          </Link>
                          <Link to="#">
                            <img src={appimg} alt="appimg" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Booking */}
        </div>
      </div>
      {/* /Page Content */}
      <Footer {...props} />
    </div>
  );
};

export default Booking2;
