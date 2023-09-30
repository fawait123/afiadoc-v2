import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const ButtonCustom = ({ loading, title, type = "primary", onClick }) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={`btn btn-${type} w-100`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? <LoadingOutlined /> : null}
      &nbsp; &nbsp;
      {title}
    </button>
  );
};

export default ButtonCustom;
