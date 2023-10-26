import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import httpRequest from "../../../../API/http";
import moment from "moment";
import { FaBell } from "react-icons/fa6";
import socketClient from "../../../../libraries/socket-client";
import { notification } from "antd";
import useGlobalStore from "../../../../STORE/GlobalStore";

function Notification() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const { user } = useGlobalStore((state) => state);
  const handleNotification = (type, title, text) => {
    notification.config({
      placement: "topRight",
    });
    notification[type]({
      message: title,
      description: text,
    });
  };
  const getData = () => {
    httpRequest({
      url: "/admin/notification",
      method: "get",
      params: {
        page: 1,
        limit: 10,
        isRead: false,
      },
    })
      .then((response) => {
        const results = response?.data?.results?.data;
        setCount(results?.count);
        setData(results?.rows);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
    socketClient.on("push-notification", (data) => {
      const parseData = JSON.parse(data);
      getData();
      console.log(user);
      if (parseData?.userID == user?.id) {
        handleNotification("info", parseData?.title, parseData?.content);
      }
    });
  }, []);
  return (
    <>
      {/* Notifications */}
      <li className="nav-item dropdown noti-nav me-3 pe-0">
        <Link
          to="#"
          className="dropdown-toggle nav-link p-0"
          data-bs-toggle="dropdown"
        >
          <i className="fa-solid fa-bell" />{" "}
          <span className="badge">{count}</span>
        </Link>
        <div className="dropdown-menu notifications dropdown-menu-end ">
          <div className="topnav-dropdown-header">
            <span className="notification-title">Notifications</span>
          </div>
          <div className="noti-content">
            <ul className="notification-list">
              {data.map((item, index) => {
                return (
                  <li className="notification-message" key={index}>
                    <Link to="#">
                      <div className="media d-flex">
                        <span className="avatar">
                          <FaBell style={{ fontSize: 16 }} />
                        </span>
                        <div className="media-body">
                          <h6>
                            {item?.title}{" "}
                            <span className="notification-time text-sm">
                              {moment(item?.createdAt).format("DD MMMM YYYY") +
                                " " +
                                moment(item?.createdAt).format("HH:MM")}{" "}
                              WIB
                            </span>
                          </h6>
                          <p className="noti-details">{item?.content}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </li>
      {/* /Notifications */}
    </>
  );
}

export default Notification;
