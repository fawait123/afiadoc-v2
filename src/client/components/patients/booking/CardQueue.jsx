import React from "react";

export const CardQueue = (props) => {
  return (
    <div
      className="card"
      style={{
        // eslint-disable-next-line react/prop-types
        background: props.background,
      }}
    >
      <div
        className="card-body"
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            marginRight: 8,
          }}
        >
          <h1
            style={{
              // eslint-disable-next-line react/prop-types
              color: props.color,
            }}
          >
            {
              // eslint-disable-next-line react/prop-types
              props.index
            }
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
          }}
        >
          <p
            style={{
              // eslint-disable-next-line react/prop-types
              color: props.color,
              fontWeight: "bold",
            }}
          >
            {props?.data?.patient?.name}
          </p>
          <p
            style={{
              // eslint-disable-next-line react/prop-types
              color: props.color,
              fontWeight: "bold",
            }}
          >
            {props?.data?.registrationID}
          </p>
          <p
            style={{
              // eslint-disable-next-line react/prop-types
              color: props.color,
              fontWeight: "bold",
            }}
          >
            {props?.data?.time} WIB
          </p>
        </div>
      </div>
    </div>
  );
};
