import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Map from "../doctorgrid/map";
import Header from "../../header";
import MyComponent from "../../pages/searchdoctor/searchList/mycomponent";
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
//     image: IMG05,
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
//     image: IMG03,
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
//     image: IMG02,
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
//     image: IMG01,
//   },
// ];

const DoctorList = (props) => {
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 col-lg-12 order-md-last order-sm-last order-last map-left">
              <div className="row align-items-center mb-4">
                <div className="col-md-6 col">
                  <h4>2245 Doctors found</h4>
                </div>
                <div className="col-md-6 col-auto">
                  <div className="view-icons">
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
              {doctors?.map((item) => {
                return (
                  <div className="card" key={item?.id}>
                    <div className="card-body">
                      <div className="doctor-widget">
                        <div className="doc-info-left">
                          <div className="doctor-img">
                            <Link to="/patient/doctor-profile">
                              <img
                                src={IMAGEPATH + item?.photos}
                                className="img-fluid"
                                alt="User"
                              />
                            </Link>
                          </div>
                          <div className="doc-info-cont">
                            <h4 className="doc-name">
                              <Link to="/patient/doctor-profile">
                                Dr. {item?.name}
                              </Link>
                            </h4>
                            <p className="doc-speciality">{item?.STR}</p>
                            <h5 className="doc-department">
                              <img
                                src={IMAGEPATH + item?.specialist?.picture}
                                className="img-fluid"
                                alt="Speciality"
                              />
                              {item?.specialist?.name}
                            </h5>
                            <div className="rating">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                              <span className="d-inline-block average-rating ms-1">
                                (17)
                              </span>
                            </div>
                            <div className="clinic-details">
                              <p className="doc-location">
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                {Utils.formatAddress(item?.addresses)}
                              </p>
                              <div></div>
                              <SimpleReactLightbox>
                                <MyComponent />
                              </SimpleReactLightbox>
                            </div>
                            <div className="clinic-services">
                              <span>Dental Fillings</span>
                              <span> Whitneing</span>
                            </div>
                          </div>
                        </div>
                        <div className="doc-info-right">
                          <div className="clini-infos">
                            <ul>
                              <li>
                                <i className="far fa-thumbs-up"></i> 98%
                              </li>
                              <li>
                                <i className="far fa-comment"></i> 17 Feedback
                              </li>
                              <li>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                Florida, USA
                              </li>
                              <li>
                                <i className="far fa-money-bill-alt"></i> $300 -
                                $1000{" "}
                                <i
                                  className="fas fa-info-circle"
                                  data-bs-toggle="tooltip"
                                  title="Lorem Ipsum"
                                ></i>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="clinic-booking">
                            <Link
                              className="view-pro-btn"
                              to="/patient/doctor-profile"
                            >
                              View Profile
                            </Link>
                            <Link className="apt-btn" to="/patient/booking1">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="load-more text-center">
                <Link to="#0" className="btn btn-primary btn-sm">
                  Load More
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 map-right grid-list-map">
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

export default DoctorList;
