import React, { useEffect, useState } from "react";
import Header from "../../header";
import StickyBox from "react-sticky-box";
import Doctors from "./doctors";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import httpRequest from "../../../../API/http";
import useGlobalStore from "../../../../STORE/GlobalStore";

const SearchDoctor2 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [minValue, setMinValue] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const [maxValue, setMaxValue] = useState(5000);
  const [doctors, setDoctors] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const { loadingTable, setLoadingTable } = useGlobalStore((state) => state);
  const [params, setParams] = useState({
    gender: [],
    specialist: [],
    rating: [],
  });

  const getData = async (current = null) => {
    setLoadingTable(true);
    httpRequest({
      url: "public/doctor",
      method: "get",
      params: {
        page: current ? current : page,
        limit: 5,
        isActive: 1,
      },
    })
      .then((response) => {
        console.log(response, "res");
        setDoctors(response?.data?.results?.data?.rows);
        setCount(response?.data?.results?.data?.count);
        setPage(response?.data?.results?.data?.page);
        setLoadingTable(false);
      })
      .catch((e) => {
        console.log(e);
        setLoadingTable(false);
      });
  };

  const onChange = (page) => {
    getData(page);
  };

  useEffect(() => {
    if (document.getElementById("price-range")) {
      setMinValue(10);
      setMaxValue(10000);

      const slider = document.getElementById("price-range");
      slider.addEventListener("input", handleSliderChange);

      return () => {
        slider.removeEventListener("input", handleSliderChange);
      };
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const handleSliderChange = (event) => {
    const min = parseInt(event.target.value.split(",")[0]);
    const max = parseInt(event.target.value.split(",")[1]);

    setMinValue(min);
    setMaxValue(max);
  };
  return (
    <div className="main-wrapper">
      <Header {...props} />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Search Doctors</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Search Doctors
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      <div className="doctor-content content">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 map-view">
              <div className="row">
                <div className="col-lg-3  theiaStickySidebar">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    <div>
                      <div className="filter-contents">
                        <div className="filter-header">
                          <h4 className="filter-title">Filter</h4>
                        </div>
                        <div className="filter-details">
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link to="#collapseone" data-bs-toggle="collapse">
                                Gender
                              </Link>
                            </h4>
                            <div id="collapseone" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="gender"
                                        value={"L"}
                                        onChange={(event) => {
                                          if (event.target.checked) {
                                            setParams({
                                              gender: [
                                                ...params.gender,
                                                event.target.value,
                                              ],
                                            });
                                          } else {
                                            const index = params.gender.indexOf(
                                              event.target.value
                                            );
                                            if (index > -1) {
                                              // only splice params.gender when item is found
                                              params.gender.splice(index, 1); // 2nd parameter means remove one item only
                                            }
                                          }
                                        }}
                                      />
                                      <span className="checkmark" />
                                      Male Gender
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="gender"
                                        value={"P"}
                                        onChange={(event) => {
                                          if (event.target.checked) {
                                            setParams({
                                              gender: [
                                                ...params.gender,
                                                event.target.value,
                                              ],
                                            });
                                          } else {
                                            const index = params.gender.indexOf(
                                              event.target.value
                                            );
                                            if (index > -1) {
                                              // only splice params.gender when item is found
                                              params.gender.splice(index, 1); // 2nd parameter means remove one item only
                                            }
                                          }
                                        }}
                                      />
                                      {console.log(params)}
                                      <span className="checkmark" />
                                      Female Gender
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapsefour"
                                data-bs-toggle="collapse"
                              >
                                Speciality
                              </Link>
                            </h4>
                            <div id="collapsefour" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="speciality"
                                      />
                                      <span className="checkmark" />
                                      Urology
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="speciality"
                                      />
                                      <span className="checkmark" />
                                      Ophthalmology
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="speciality"
                                      />
                                      <span className="checkmark" />
                                      Cardiology
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Grid */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapseseven"
                                data-bs-toggle="collapse"
                              >
                                By Rating
                              </Link>
                            </h4>
                            <div id="collapseseven" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <span className="rating-count">
                                          (40)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                        <span className="rating-count">
                                          (35)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="rating-count">
                                          (20)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="rating-count">
                                          (10)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check rating_custom_check d-inline-flex">
                                      <input type="checkbox" name="online" />
                                      <span className="checkmark" />
                                      <div className="rating">
                                        <i className="fas fa-star filled" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span className="rating-count">
                                          (05)
                                        </span>
                                      </div>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Grid */}
                          {/* Filter Btn */}
                          <div className="filter-btn apply-btn">
                            <div className="row">
                              <div className="col-6">
                                <Link to="#" className="btn btn-primary">
                                  Apply
                                </Link>
                              </div>
                              <div className="col-6">
                                <Link
                                  to="#"
                                  className="btn btn-outline-primary"
                                >
                                  Reset
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* /Filter Btn */}
                        </div>
                      </div>
                    </div>
                  </StickyBox>
                </div>

                <div className="col-lg-9">
                  <Doctors
                    datas={doctors}
                    currentPage={page}
                    total={count}
                    perPage={5}
                    paginationChange={onChange}
                    loadingTable={loadingTable}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />
    </div>
  );
};

export default SearchDoctor2;
