import React from "react";
import {
  FiAward,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiGrid,
  FiHeart,
  FiInfo,
  FiList,
  FiMapPin,
  FiThumbsUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import { IMAGEPATH } from "../../../../config";
import Utils from "../../../../helpers/utils";

const Doctors = ({ datas = [] }) => {
  console.log(datas);
  return (
    <div>
      <div className="doctor-filter-info">
        <div className="doctor-filter-inner">
          <div>
            <div className="doctors-found">
              <p>
                <span>100 Doctors found for:</span> Dentist in San francisco,
                California
              </p>
            </div>
            <div className="doctor-filter-availability">
              <p>Availability</p>
              <div className="status-toggle status-tog">
                <input type="checkbox" id="status_6" className="check" />
                <label htmlFor="status_6" className="checktoggle">
                  checkbox
                </label>
              </div>
            </div>
          </div>
          <div className="doctor-filter-option">
            <div className="doctor-filter-sort">
              <p>Sort</p>
              <div className="doctor-filter-select">
                {/* <select className="select">
              <option>A to Z</option>
              <option>B to Z</option>
              <option>C to Z</option>
              <option>D to Z</option>
              <option>E to Z</option>
            </select> */}
                <Select2
                  className="select w-100"
                  defaultValue={1}
                  data={[
                    { text: "A to Z", id: 1 },
                    { text: "B to Z", id: 2 },
                    { text: "C to Z", id: 3 },
                    { text: "D to Z", id: 4 },
                    { text: "E to Z", id: 5 },
                  ]}
                  options={{
                    placeholder: "A to Z",
                  }}
                />
              </div>
            </div>
            <div className="doctor-filter-sort">
              <p className="filter-today d-flex align-items-center">
                <FiCalendar /> Today 10 Aug to 20 Aug
              </p>
            </div>
            <div className="doctor-filter-sort">
              <ul className="nav">
                <li>
                  <Link to="/patient/doctor-list" id="map-list">
                    <FiMapPin />
                  </Link>
                </li>
                <li>
                  <Link to="/patient/doctor-grid">
                    <FiGrid />
                  </Link>
                </li>
                <li>
                  <Link to="/patient/doctor-list" className="active">
                    <FiList />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {datas.map((item) => {
        return (
          <div className="card doctor-card" key={item?.id}>
            <div className="card-body">
              <div className="doctor-widget-one">
                <div className="doc-info-left">
                  <div className="doctor-img">
                    <Link to="/patient/doctor-list">
                      <img
                        src={IMAGEPATH + item?.photos}
                        className="img-fluid"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </Link>
                    <div className="favourite-btn">
                      <Link to="/patient/map-list" className="favourite-icon">
                        <FiHeart />
                      </Link>
                    </div>
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name">
                      <Link to="/patient/doctor-profile">Dr.{item?.name}</Link>
                      <i className="fas fa-circle-check" />
                    </h4>
                    <p className="doc-speciality">{item?.specialist?.name}</p>
                    <div className="clinic-details">
                      <p className="doc-location">
                        <FiMapPin />
                        <span>0.9</span> {Utils.formatAddress(item?.addresses)}
                        <Link to="#">Get Direction</Link>
                      </p>
                      <p className="doc-location">
                        <FiAward /> <span>20</span> Years of Experience
                      </p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.5
                        </span>{" "}
                        (35 Reviews)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="doc-info-right">
                  <div className="clini-infos">
                    <ul>
                      <li>
                        <FiClock /> &nbsp;
                        <span className="available-date available-today">
                          Available Today
                        </span>
                      </li>
                      <li>
                        <FiThumbsUp /> 98%{" "}
                        <span className="votes">(252 Votes)</span>
                      </li>
                      <li>
                        <FiDollarSign />
                        1500 <FiInfo />
                      </li>
                    </ul>
                  </div>
                  <div className="clinic-booking book-appoint">
                    <Link className="btn btn-primary" to="/patient/booking1">
                      Book Appointment
                    </Link>
                    <Link
                      className="btn btn-primary-light"
                      to="/patient/booking2"
                    >
                      Book Online Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="row">
        <div className="col-sm-12">
          <div className="blog-pagination rev-page">
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <Link className="page-link page-prev" to="#" tabIndex={-1}>
                    <i className="feather-chevrons-left me-1" /> PREV
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    ...
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    10
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link page-next" to="#">
                    NEXT <i className="feather-chevrons-right ms-1" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
