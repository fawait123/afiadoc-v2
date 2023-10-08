import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Map from "./map";
import Header from "../../header";
import httpRequest from "../../../../API/http";
import { IMAGEPATH } from "../../../../config";
import Utils from "../../../../helpers/utils";

// const data = [
//   {
//     id: 1,
//     doc_name: "Ruby Perrin",
//     speciality: "Digital Marketer",
//     address: "Florida, USA",
//     next_available: "Available on Fri, 22 Mar",
//     amount: "$300 - $1000",
//     lat: -33.847927,
//     lng: 150.6517938,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "17",
//     image: IMG01,
//   },
//   {
//     id: 2,
//     doc_name: "Darren Elder",
//     speciality: "Digital Marketer",
//     address: "Newyork, USA",
//     next_available: "Available on Fri, 23 Mar",
//     amount: "$50 - $300",
//     lat: -37.9722342,
//     lng: 144.7729561,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "35",
//     image: IMG02,
//   },
//   {
//     id: 3,
//     doc_name: "Deborah Angel",
//     speciality: "UNIX, Calculus, Trigonometry",
//     address: "Georgia, USA",
//     next_available: "Available on Fri, 24 Mar",
//     amount: "$100 - $400",
//     lat: -31.9546904,
//     lng: 112.8350292,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "27",
//     image: IMG03,
//   },
//   {
//     id: 4,
//     doc_name: "Sofia Brient",
//     speciality: "Computer Programming",
//     address: "Louisiana, USA",
//     next_available: "Available on Fri, 25 Mar",
//     amount: "$150 - $250",
//     lat: -32.9546904,
//     lng: 115.8350292,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "4",
//     image: IMG04,
//   },
//   {
//     id: 5,
//     doc_name: "Marvin Campbell",
//     speciality: "ASP.NET,Computer Gaming",
//     address: "Michigan, USA",
//     next_available: "Available on Fri, 25 Mar",
//     amount: "$50 - $700",
//     lat: -34.9546904,
//     lng: 125.8650292,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "66",
//     image: IMG05,
//   },
//   {
//     id: 6,
//     doc_name: "Katharine Berthold",
//     speciality: "Digital Marketer",
//     address: "Texas, USA",
//     next_available: "Available on Fri, 25 Mar",
//     amount: "$100 - $500",
//     lat: -35.9546904,
//     lng: 153.8350292,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "52",
//     image: IMG06,
//   },
//   {
//     id: 7,
//     doc_name: "Linda Tobin",
//     speciality: "UNIX, Calculus, Trigonometry",
//     address: "Kansas, USA",
//     next_available: "Available on Fri, 25 Mar",
//     amount: "$100 - $1000",
//     lat: -36.9548904,
//     lng: 105.8350292,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "43",
//     image: IMG07,
//   },
//   {
//     id: 8,
//     doc_name: "Paul Richard",
//     speciality: "Computer Programming",
//     address: "California, USA",
//     next_available: "Available on Fri, 25 Mar",
//     amount: "$100 - $400",
//     lat: -38.9556904,
//     lng: 110.8350292,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "49",
//     image: IMG08,
//   },
//   {
//     id: 9,
//     doc_name: "John Gibbs",
//     speciality: "ASP.NET,Computer Gaming",
//     address: "Oklahoma, USA",
//     next_available: "Available on Fri, 25 Mar",
//     amount: "$500 - $2500",
//     lat: -33.2191198,
//     lng: 120.8350292,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "112",
//     image: IMG09,
//   },
//   {
//     id: 10,
//     doc_name: "Olga Barlow",
//     speciality: "Periodontology and Oral",
//     address: "Montana, USA",
//     next_available: "Available on Fri, 25 Mar",
//     amount: "$75 - $250",
//     lat: -37.1382198,
//     lng: 115.9359404,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "65",
//     image: IMG10,
//   },
//   {
//     id: 11,
//     doc_name: "Julia Washington",
//     speciality: "Endocrinology",
//     address: "Oklahoma, USA",
//     next_available: "Available on Fri, 25 Mar",
//     amount: "$275 - $450",
//     lat: -31.1546904,
//     lng: 145.8350292,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "5",
//     image: IMG11,
//   },
//   {
//     id: 12,
//     doc_name: "Shaun Aponte",
//     speciality: "Diploma in (DLO)",
//     address: "Indiana, USA",
//     next_available: "Available on Fri, 25 Mar",
//     amount: "$150 - $350",
//     lat: -35.1586194,
//     lng: 155.8350292,
//     icons: "default",
//     profile_link: "/patient/doctor-profile",
//     total_review: "5",
//     image: IMG12,
//   },
// ];

const DoctorGrid = (props) => {
  const [doctors, setDoctors] = useState([]);

  const getData = async () => {
    httpRequest({
      url: "public/doctor",
      method: "get",
      params: {
        page: 1,
        limit: 10,
        isActive: 1,
      },
    }).then((response) => {
      setDoctors(response?.data?.results?.data?.rows);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    document.body.classList.add("map-page");

    return () => document.body.classList.remove("map-page");
  }, []);

  const options = [
    { value: "Select", label: "Select" },
    { value: "Rating", label: "Rating" },
    { value: "Popular", label: "Popular" },
    { value: "Lastest", label: "Lastest" },
    { value: "Free", label: "Free" },
  ];
  return (
    <>
      <Header {...props} />
      <div className="content top-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 order-md-last order-sm-last order-last map-left">
              <div className="row align-items-center mb-4">
                <div className="col-md-6 col">
                  <h4>2245 Doctors found</h4>
                </div>

                <div className="col-md-6 col-auto">
                  <div className="view-icons ">
                    <Link
                      to="/patient/doctor-grid"
                      className="grid-view active"
                    >
                      <i className="fas fa-th-large"></i>
                    </Link>
                    <Link to="/patient/doctor-list" className="list-view">
                      <i className="fas fa-bars"></i>
                    </Link>
                  </div>
                  <div className="sort-by d-sm-block d-none">
                    <span className="sortby-fliter">
                      <Select options={options} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                {doctors?.map((item) => {
                  return (
                    <div className="col-sm-6 col-md-4 col-xl-6" key={item?.id}>
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to="/patient/doctor-profile">
                            <img
                              className="img-fluid"
                              alt="User "
                              src={IMAGEPATH + item?.photos}
                            />
                          </Link>
                          <Link to="#0" className="fav-btn">
                            <i className="far fa-bookmark"></i>
                          </Link>
                        </div>
                        <div className="pro-content">
                          <h3 className="title">
                            <Link to="/patient/doctor-profile">
                              Dr. {item?.name}
                            </Link>
                            <i className="fas fa-check-circle verified"></i>
                          </h3>
                          <p className="speciality">{item?.specialist?.name}</p>
                          <div className="rating">
                            <i className="fas fa-star filled"></i>&nbsp;
                            <i className="fas fa-star filled"></i>&nbsp;
                            <i className="fas fa-star filled"></i>&nbsp;
                            <i className="fas fa-star filled"></i>&nbsp;
                            <i className="fas fa-star filled"></i>&nbsp;
                            <span className="d-inline-block average-rating ms-1">
                              (17)
                            </span>
                          </div>
                          <ul className="available-info">
                            <li>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {Utils.formatAddress(item?.addresses)}
                            </li>
                            <li>
                              <i className="far fa-clock"></i> Available on Fri,
                              22 Mar
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt"></i>{" "}
                              {"RP " +
                                Utils.doctorPrice(item?.prices)?.toLocaleString(
                                  "id",
                                  "ID"
                                )}
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
                                View Profile
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

              <div className="load-more text-center">
                <Link className="btn btn-primary btn-sm" to="#0;">
                  Load More
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12 map-right grid-list-map">
              <div id="map" className="map-listing">
                <div style={{ height: "100vh", width: "100%" }}>
                  <Map
                    places={doctors}
                    center={{ lat: -0.789275, lng: 113.921327 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorGrid;
