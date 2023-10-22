import React, { useEffect, useState } from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import Footer from "../../footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../header.jsx";
import httpRequest from "../../../../API/http.js";
import { Form, Image, Row, Table } from "antd";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { InputCustom } from "../../../../componentcustom/inputCustom.js";

const columns = [
  {
    title: <strong>NIK</strong>,
    dataIndex: "NIK",
    key: "NIK",
    render: (text) => <span>{text}</span>,
  },
  {
    title: <strong>Nama</strong>,
    dataIndex: "name",
    key: "name",
    render: (text, record) => {
      return (
        <Row justify={"start"} align={"middle"}>
          <Image
            width={80}
            height={80}
            style={{ objectFit: "contain", borderRadius: 50 }}
            src={record?.photo}
          />
          <span>{text}</span>
        </Row>
      );
    },
  },
  {
    title: <strong>Tanggal Lahir</strong>,
    dataIndex: "birthdate",
    key: "birthdate",
    render: (text, record) => <span>{`${record?.placebirth}, ${text}`}</span>,
  },
  {
    title: <strong>Jenis Kelamin</strong>,
    dataIndex: "gender",
    key: "gender",
    render: (text) => <span>{text == "L" ? "Laki Laki" : "Perempuan"}</span>,
  },
  {
    title: <strong>Agama</strong>,
    dataIndex: "religion",
    key: "religion",
    render: (text) => <span>{text}</span>,
  },
  {
    title: <strong>Email</strong>,
    dataIndex: "email",
    key: "email",
    render: (text) => <span>{text}</span>,
  },
  {
    title: <strong>No. Handphone</strong>,
    dataIndex: "phone",
    key: "phone",
    render: (text) => <span>{text}</span>,
  },
  {
    title: <strong>Golongan Darah</strong>,
    dataIndex: "blood",
    key: "blood",
    render: (text) => <span>{text}</span>,
  },
  {
    title: <strong>Berat Badan</strong>,
    dataIndex: "weight",
    key: "weight",
    render: (text) => <span>{text}</span>,
  },
  {
    title: <strong>Tinggi Badan</strong>,
    dataIndex: "height",
    key: "height",
    render: (text) => <span>{text}</span>,
  },
  {
    title: <strong>Aksi</strong>,
    key: "action",
    render: (_, record) => {
      return (
        <>
          <FaPencil className="text-primary" style={{ cursor: "pointer" }} />{" "}
          &nbsp;&nbsp;&nbsp;
          <FaTrash className="text-danger" style={{ cursor: "pointer" }} />
        </>
      );
    },
  },
];

const Dependent = (props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);

  const getData = () => {
    httpRequest({
      url: "/admin/patient",
      method: "get",
      params: {
        page,
        limit,
      },
    }).then((response) => {
      const result = response?.data?.results?.data?.rows;
      setRows(result);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Data Pasien</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data Pasien
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-6">
                      <h3 className="card-title">Data Pasien</h3>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-end">
                        <a
                          href="#modal_form"
                          onClick={() => setShow(true)}
                          className="btn btn-primary btn-sm"
                          tabIndex={0}
                        >
                          Tambah Pasien
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  {/* Dependent Tab */}
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <Table
                        columns={columns}
                        dataSource={rows}
                        style={{ overflow: "scroll" }}
                      />
                      ;
                    </div>
                  </div>
                  {/* /Dependent Tab */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="modal"
        style={{ marginTop: "80px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add new member</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="modal-body">
              <Form layout="vertical">
                <InputCustom
                  label={"Name"}
                  name={"name"}
                  rules={[{ required: true }]}
                />
              </Form>
            </div>
            <div className="modal-footer text-center">
              <button type="submit" className="btn btn-primary submit-btn">
                Save Changes
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* <!-- Edit Dependent Modal--> */}
      <div
        id="edit_form"
        className="modal fade custom-modal"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        // eslint-disable-next-line react/no-unknown-property
        show={edit}
        onClick={() => setEdit(false)}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form
              action="#"
              encType="multipart/form-data"
              autoComplete="off"
              method="post"
            >
              <div className="modal-header">
                <h5 className="modal-title">Edit member</h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="control-label mb-10">
                    {" "}
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    defaultValue="Christopher"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">Relationship </label>
                  <input
                    type="text"
                    name="relationship"
                    className="form-control"
                    defaultValue="son"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">Gender </label>
                  <select className="form-select form-control" name="gender">
                    <option defaultValue="">Select</option>
                    <option defaultValue="Male" selected>
                      Male
                    </option>
                    <option defaultValue="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">DOB </label>
                  <DatePicker
                    name="dob"
                    id="editdob"
                    selected={date}
                    onChange={handleChange}
                    className="form-control date-icon"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label mb-10">Photo </label>
                  <input
                    type="file"
                    name="profile_image"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer text-center">
                <button type="submit" className="btn btn-primary submit-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- /Edit Dependent Modal--> */}
      <Footer {...props} />
    </div>
  );
};

export default Dependent;
