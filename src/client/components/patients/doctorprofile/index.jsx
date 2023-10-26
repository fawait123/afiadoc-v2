/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Content from "./content";
import Pagecontent from "./pagecontent";
import Utils from "../../../../helpers/utils";
import httpRequest from "../../../../API/http";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DoctorProfile = (props) => {
  const { doctorID } = useParams();
  const [show, setShow] = useState(false);
  const [videocall, setvideocall] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [state, setState] = useState(false);
  const [photoIndex, setphotoIndex] = useState(false);
  const [doctor, setDoctor] = useState({});

  const getData = async () => {
    await httpRequest({
      url: "public/doctor",
      method: "get",
      params: {
        page: 1,
        limit: 10,
        doctorID,
      },
    })
      .then((response) => {
        console.log(response);
        setDoctor(response?.data?.results?.data?.rows[0] || {});
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Doctor Profile</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Doctor Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <Pagecontent data={doctor} />
          <Content />
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default DoctorProfile;
