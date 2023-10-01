/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Priceingplan from "./priceingplan";
import Homebanner from "./homebanner";
import Speacialities from "./speacialities";
import Worksection from "./worksection";
import Artical from "./artical";
import Testimonial from "./testimonial";
import Parentssection from "./parentssection";
import Appsection from "./appsection";
import Doctor from "./doctor";
import Faq from "./faq";
import Header from "../../header";
import Footer from "../../footer";
import ProgressCircle from "../paediatric/scrolltotop";
import httpRequest from "../../../../API/http";
import useGlobalStore from "../../../../STORE/GlobalStore";

function Generalhome(props) {
  let pathname = props.location.pathname;
  const [doctors, setDoctors] = useState([]);
  const [specialists, setSpecialists] = useState([]);
  const { loadingTable, setLoadingTable, loadingBtn, setLoadingBtn } =
    useGlobalStore((state) => state);
  const getDataDoctors = async () => {
    setLoadingTable(true);
    await httpRequest({
      url: "/public/doctor",
      params: {
        page: 1,
        limit: 10,
        isActive: 1,
      },
    })
      .then((response) => {
        setDoctors(response?.data?.results?.data?.rows);
        setLoadingTable(false);
      })
      .catch((e) => {
        console.log(e);
        setLoadingTable(false);
      });
  };
  const getDataSpecialists = async () => {
    setLoadingBtn(true);
    await httpRequest({
      url: "/public/specialist",
      params: {
        page: 1,
        limit: 10,
        isActive: 1,
      },
    })
      .then((response) => {
        setSpecialists(response?.data?.results?.data?.rows);
        setLoadingBtn(false);
      })
      .catch((e) => {
        console.log(e);
        setLoadingBtn(false);
      });
  };

  if (props.location.pathname === "/index") {
    require("../../../assets/css/feather.css");
  }
  useEffect(() => {
    getDataSpecialists();
    getDataDoctors();
  }, []);
  return (
    <>
      <>
        <div className="main-wrapper">
          <Header {...props} />
          {/* Home Banner */}
          <Homebanner />
          {/* /Home Banner */}
          {/* Specialities Section */}
          <Speacialities datas={specialists} loading={loadingBtn} />
          {/* /Specialities Section */}
          {/* Doctors Section */}
          <Doctor datas={doctors} loading={loadingTable} />
          {/* /Doctors Section */}
          {/* Pricing */}
          {/* <Priceingplan /> */}
          {/* /Pricing */}
          {/* Work Section */}
          {/* <Worksection /> */}
          {/* /Work Section */}
          {/* Articles Section */}
          {/* <Artical /> */}
          {/* /Articles Section */}
          {/* App Section */}
          <Appsection />
          {/* /App Section */}
          {/* FAQ Section */}
          <Faq />
          {/* /FAQ Section */}
          {/* Testimonial Section */}
          <Testimonial />
          {/* /Testimonial Section */}
          {/* Partners Section */}
          {/* <Parentssection /> */}
          {/* /Partners Section */}
          <Footer {...props} />
          {/* Cursor */}
          <div className="mouse-cursor cursor-outer" />
          <div className="mouse-cursor cursor-inner" />
          {/* /Cursor */}
          <ProgressCircle />
        </div>
      </>
    </>
  );
}

export default Generalhome;
