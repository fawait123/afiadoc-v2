import React from "react";
import {
  FiAward,
  FiClock,
  FiDollarSign,
  FiHeart,
  FiInfo,
  FiMapPin,
  FiThumbsUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "react-select2-wrapper/css/select2.css";
import { IMAGEPATH } from "../../../../config";
import Utils from "../../../../helpers/utils";
import httpRequest from "../../../../API/http";
import Pagination from "./pagination";
import { Spin } from "antd";

const Doctors = ({
  // eslint-disable-next-line react/prop-types
  datas = [],
  // eslint-disable-next-line react/prop-types
  currentPage = 1,
  // eslint-disable-next-line react/prop-types
  total = 0,
  // eslint-disable-next-line react/prop-types
  perPage,
  // eslint-disable-next-line react/prop-types
  paginationChange,
  // eslint-disable-next-line react/prop-types
  loadingTable,
}) => {
  const addToFavorite = async (item) => {
    await httpRequest({
      url: "/admin/favorite",
      method: "post",
      data: {
        doctorID: item.id,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {loadingTable ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin />
        </div>
      ) : datas.length > 0 ? (
        datas.map((item) => {
          return (
            <div className="card doctor-card" key={item?.id}>
              <div className="card-body">
                <div className="doctor-widget-one">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <Link to={`doctor/${item?.id}`}>
                        <img
                          src={IMAGEPATH + item?.photos}
                          className="img-fluid"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </Link>
                      <div className="favourite-btn">
                        <a
                          href="#"
                          className="favourite-icon"
                          onClick={() => addToFavorite(item)}
                        >
                          <FiHeart />
                        </a>
                      </div>
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">
                        <Link to={`doctor/${item?.id}`}>Dr. {item?.name}</Link>
                        <i className="fas fa-circle-check" />
                      </h4>
                      <p className="doc-speciality">{item?.specialist?.name}</p>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <FiMapPin />
                          <span>0.9</span>{" "}
                          {Utils.formatAddress(item?.addresses)}
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
                      <Link
                        className="btn btn-primary"
                        to={`booking/${item?.id}`}
                      >
                        Book Appointment
                      </Link>
                      <a
                        className="btn btn-primary-light"
                        href="#"
                        onClick={() => addToFavorite(item)}
                      >
                        Add To Favorite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <h1>Data tidak ditemukan</h1>
        </div>
      )}
      <div className="row">
        <div className="col-sm-12">
          <Pagination
            total={total}
            perPage={perPage}
            current={currentPage}
            paginationChange={paginationChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
