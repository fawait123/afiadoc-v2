import React, { useEffect } from "react";
import {
  specialities_01,
  specialities_02,
  specialities_03,
  specialities_04,
  specialities_05,
  specialities_06,
} from "../../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import { IMAGEPATH } from "../../../../config";

function Speacialities({ datas, loading }) {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  const specialitysettings = {
    items: 3,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-1",
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
      <section className="specialities-section-one">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Specialities</h2>
              </div>
            </div>
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="owl-nav slide-nav-1 text-end nav-control" />
            </div>
          </div>
          <div
            className="specialities-slider-one owl-theme aos"
            data-aos="fade-up"
          >
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spin />
              </div>
            ) : datas?.length > 0 ? (
              <OwlCarousel {...specialitysettings}>
                {datas?.map((item) => {
                  return (
                    <Link
                      to={`/patient/search-doctor-specialist/${item.id}`}
                      className="btn"
                    >
                      <div className="item" key={item?.id}>
                        <div className="specialities-item">
                          <div className="specialities-img">
                            <span>
                              <img src={IMAGEPATH + item?.picture} alt="" />
                            </span>
                          </div>
                          <p>{item?.name}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </OwlCarousel>
            ) : (
              <p>Data spesialis tidak ada</p>
            )}
          </div>
          <div className="specialities-btn aos" data-aos="fade-up">
            <Link to="/patient/search-doctor1" className="btn">
              See All Specialities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Speacialities;
