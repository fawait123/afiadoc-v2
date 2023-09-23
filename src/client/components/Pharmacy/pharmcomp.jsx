import React from "react";

import { SRLWrapper } from "simple-react-lightbox";
import { feature01, feature02, feature03, feature04 } from "./image";

const PharmacyComp = () => {
  return (
    <div>
      <SRLWrapper>
        <ul className="clinic-gallery">
          <li>
            <a>
              <img src={feature01} alt="Feature" />
            </a>
          </li>
          <li>
            <a>
              <img src={feature02} alt="Feature" />
            </a>
          </li>
          <li>
            <a>
              <img src={feature03} alt="Feature" />
            </a>
          </li>
          <li>
            <a>
              <img src={feature04} alt="Feature" data-attribute="SRL" />
            </a>
          </li>
        </ul>
      </SRLWrapper>
    </div>
  );
};

export default PharmacyComp;
