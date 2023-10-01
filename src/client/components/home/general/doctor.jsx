import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Doctor1, Doctor2, Doctor3, Doctor4, Doctor5 } from "../image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Spin } from "antd";
import { IMAGEPATH } from "../../../../config";

function Doctor({ datas, loading }) {
  //Aos
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  const doctersettings = {
    items: 3,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-2",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],

    autoplay: false,
    infinite: "true",

    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 5,
      },
    },
  };
  return (
    <>
      <section className="doctors-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Best Doctors</h2>
              </div>
            </div>
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="owl-nav slide-nav-2 text-end nav-control" />
            </div>
          </div>
          <div className="doctor-slider-one owl-theme aos" data-aos="fade-up">
            {/* Doctor Item */}
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spin size="large" />
              </div>
            ) : datas?.length > 0 ? (
              <OwlCarousel {...doctersettings}>
                {datas.map((item) => {
                  return (
                    <div className="item" key={item?.id}>
                      <div className="doctor-profile-widget">
                        <div className="doc-pro-img">
                          <Link to="/patient/doctor-profile">
                            <div className="doctor-profile-img">
                              <img
                                src={IMAGEPATH + item?.photos}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </Link>
                          <div className="doctor-amount">
                            <span>
                              IDR{" "}
                              {item?.prices
                                ?.find((el) => el.type == "booking")
                                ?.price?.toLocaleString("id", "ID")}
                            </span>
                          </div>
                        </div>
                        <div className="doc-content">
                          <div className="doc-pro-info">
                            <div className="doc-pro-name">
                              <Link to="/patient/doctor-profile">
                                Dr. {item?.name}
                              </Link>
                              <p>{item?.specialist?.name}</p>
                            </div>
                            <div className="reviews-ratings">
                              <p>
                                <span>
                                  <i className="fas fa-star" /> 4.5
                                </span>{" "}
                                (35)
                              </p>
                            </div>
                          </div>
                          <div className="doc-pro-location">
                            <p>
                              <i>
                                <FeatherIcon icon="map-pin" />
                              </i>{" "}
                              {item?.addresses.length > 0
                                ? item?.addresses[0]?.subdistrict?.name +
                                  "," +
                                  item?.addresses[0]?.province?.name
                                : "lokasi tidak ditentukan"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            ) : (
              <p>Tidak ada data dokter terdaftar</p>
            )}
            {/* /Doctor Item */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctor;
