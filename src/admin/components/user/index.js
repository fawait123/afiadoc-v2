import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";
import httpRequest from "../../../API/http";
import useGlobalStore from "../../../STORE/GlobalStore";

const User = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState([]);
  const { loadingTable, setLoadingTable } = useGlobalStore((state) => state);

  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to={`/admin/profile?id=${record?.id}`}>
            <img
              className="rounded-circle"
              src={record?.photo ? record?.photo : "/logo.png"}
            />
          </Link>
          <Link to={`/admin/profile?id=${record?.id}`}>{text}</Link>
        </>
      ),
      sorter: (a, b) => a.DoctorName.length - b.DoctorName.length,
    },
    {
      title: "Username",
      dataIndex: "username",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
      render: (record) => {
        return (
          <>
            <span>{record}</span>
          </>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
      render: (record) => {
        return (
          <>
            <span>{record}</span>
          </>
        );
      },
    },
    {
      title: "Akses",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
      render: (record) => {
        return (
          <>
            <span>{record?.role?.name}</span>
          </>
        );
      },
    },
    {
      title: "Status Akun",
      render: (text, record) => {
        return (
          <div className="status-toggle">
            <input
              id={`rating${record?.id}`}
              className="check"
              type="checkbox"
              checked={record?.is_active}
            />
            <label
              htmlFor={`rating${record?.id}`}
              className="checktoggle checkbox-bg"
            >
              checkbox
            </label>
          </div>
        );
      },
      sorter: (a, b) => a.AccountStatus.length - b.AccountStatus.length,
    },
  ];

  const getData = async (current = null, pageSize = null) => {
    setLoadingTable(true);
    await httpRequest({
      url: "/admin/user",
      method: "get",
      params: {
        page: current == null ? page : current,
        limit: pageSize == null ? limit : pageSize,
      },
    })
      .then((response) => {
        const data = response?.data?.results?.data;
        setCount(data?.count);
        setLimit(data?.limit);
        setPage(data?.page);
        setRows(data?.rows);
        setLoadingTable(false);
      })
      .catch((e) => {
        console.log("e", e);
        setLoadingTable(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">List of Doctors</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">List of Doctors</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      loading={loadingTable}
                      pagination={{
                        total: count,
                        current: page,
                        pageSize: limit,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                        onChange: (current, pageSize) => {
                          getData(current, pageSize);
                        },
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={rows}
                      rowKey={(record) => record.id}
                      //  onChange={this.handleTableChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
