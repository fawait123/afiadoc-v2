import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import {
  IMG_fe_01,
  IMG_fe_02,
  IMG_fe_03,
  IMG_fe_04,
} from "../pages/searchdoctor/searchList/img";

const PharmcyComp = () => {
  return (
    <div>
      <SRLWrapper>
        <ul className="clinic-gallery">
          <li>
            <a>
              <img src={IMG_fe_01} alt="Feature" />
            </a>
          </li>
          <li>
            <a>
              <img src={IMG_fe_02} alt="Feature" />
            </a>
          </li>
          <li>
            <a>
              <img src={IMG_fe_03} alt="Feature" />
            </a>
          </li>
          <li>
            <a>
              <img src={IMG_fe_04} alt="Feature" data-attribute="SRL" />
            </a>
          </li>
        </ul>
      </SRLWrapper>
    </div>
  );
};

export default PharmcyComp;
