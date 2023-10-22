import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { uploadicon } from "../../imagepath";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import httpRequest from "../../../../API/http";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../../../admin/components/paginationfunction";
import useGlobalStore from "../../../../STORE/GlobalStore";
import { IMAGEPATH } from "../../../../config";
const Tablerecords = () => {
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  const { loadingTable, setLoadingTable } = useGlobalStore((state) => state);

  const columns = [
    {
      title: "Nama Dokter",
      render: (record) => (
        <>
          <img
            className="rounded-circle"
            src={IMAGEPATH + record?.doctor?.photos}
          />
          <strong>{record?.doctor?.name}</strong>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Nama Pasien",
      render: (record) => (
        <>
          <img
            className="rounded-circle"
            src={IMAGEPATH + record?.patient?.photo}
          />
          <strong>{record?.patient?.name}</strong>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Nomor Registrasi",
      render: (record) => (
        <>
          <span>{record?.registrationID}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Tanggal Daftar",
      render: (record) => (
        <>
          <span>{record?.date}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Tanggal Tunda",
      render: (record) => (
        <>
          <span>{record?.due_date || "TIDAK ADA"}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Status",
      render: (record) => (
        <>
          <span
            className={`badge ${
              record?.status == "done" ? "bg-primary" : "bg-warning"
            } text-white`}
          >
            {record?.status?.toUpperCase()}
          </span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Dibuat",
      render: (record) => (
        <>
          <span>{record?.createdAt}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
  ];

  const getData = (status = "process") => {
    setLoadingTable(true);
    httpRequest({
      url: "/admin/registration",
      method: "get",
      params: {
        status: [status],
      },
    })
      .then((response) => {
        const result = response?.data?.results?.data;
        setRows(result);
        setLoadingTable(false);
      })
      .catch((e) => {
        console.log(e);
        setLoadingTable(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body pt-0">
              {/* Tab Menu */}
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      onClick={() => getData("process")}
                      to="#tab_proccess"
                      data-bs-toggle="tab"
                    >
                      Proses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={() => getData("reschedule")}
                      to="#tab_reschedule"
                      data-bs-toggle="tab"
                    >
                      Ditunda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#tab_done"
                      onClick={() => getData("done")}
                      data-bs-toggle="tab"
                    >
                      Selesai
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={() => getData("cancel")}
                      to="#tab_cancel"
                      data-bs-toggle="tab"
                    >
                      Dibatalkan
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /Tab Menu */}
              {/* Tab Content */}
              <div className="tab-content pt-0">
                {/* Medical Records Tab */}
                <div id="tab_proccess" className="tab-pane fade show active">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <Table
                          loading={loadingTable}
                          pagination={{
                            total: rows.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                            onChange: (page, pageSize) => {
                              getData(page, pageSize);
                            },
                          }}
                          style={{ overflowX: "auto" }}
                          columns={columns}
                          dataSource={rows}
                          rowKey={(record) => record.id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Medical Records Tab */}
                {/* Prescription Tab */}
                <div className="tab-pane fade" id="tab_reschedule">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <Table
                          loading={loadingTable}
                          pagination={{
                            total: rows.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                            onChange: (page, pageSize) => {
                              getData(page, pageSize);
                            },
                          }}
                          style={{ overflowX: "auto" }}
                          columns={columns}
                          dataSource={rows}
                          rowKey={(record) => record.id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Prescription Tab */}
                {/* tab done  */}
                <div className="tab-pane fade" id="tab_done">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <Table
                          loading={loadingTable}
                          pagination={{
                            total: rows.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                            onChange: (page, pageSize) => {
                              getData(page, pageSize);
                            },
                          }}
                          style={{ overflowX: "auto" }}
                          columns={columns}
                          dataSource={rows}
                          rowKey={(record) => record.id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* tab done */}
                {/* tab cancel */}
                <div className="tab-pane fade" id="tab_cancel">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <Table
                          loading={loadingTable}
                          pagination={{
                            total: rows.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                            onChange: (page, pageSize) => {
                              getData(page, pageSize);
                            },
                          }}
                          style={{ overflowX: "auto" }}
                          columns={columns}
                          dataSource={rows}
                          rowKey={(record) => record.id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* tab cancel */}
              </div>
              {/* Tab Content */}
            </div>
          </div>
        </div>
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        style={{ marginTop: "75px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add Medical Records</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <form id="medical_records_form">
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Title Name</label>
                      <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Enter Title Name"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Patient</label>
                      <select className="form-select form-control">
                        <option>Myself</option>
                        <option>Child_1</option>
                        <option>Self</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>Hospital Name</label>
                      <input
                        type="text"
                        name="hospital"
                        className="form-control"
                        placeholder="Enter name here.."
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>Upload</label>
                      <div className="upload-medical-records">
                        <input
                          className="form-control"
                          type="file"
                          name="user_file"
                          id="user_files_mr"
                        />
                        <div className="upload-content dropzone">
                          <div className="text-center">
                            <div className="upload-icon mb-2">
                              <img src={uploadicon} alt />
                            </div>
                            <h5>Drag &amp; Drop</h5>
                            <h6>
                              or <span className="text-danger">Browse</span>
                            </h6>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>Symptoms</label>
                      <input
                        type="text"
                        data-role="tagsinput"
                        className="input-tags form-control"
                        defaultValue="Fever, Fatigue"
                        name="services"
                        id="services"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>Date</label>
                      <div className="form-group">
                        <DatePicker
                          selected={new Date()}
                          className="form-control date-icon"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="submit-section text-center">
                    <button
                      type="submit"
                      id="medical_btn"
                      className="btn btn-primary submit-btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Tablerecords;
