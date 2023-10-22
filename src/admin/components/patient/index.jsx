import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";
import httpRequest from "../../../API/http";
import useGlobalStore from "../../../STORE/GlobalStore";
import { IMAGEPATH } from "../../../config";
import { Modal } from "react-bootstrap";
import { FaPencil, FaTrash } from "react-icons/fa6";

const Patient = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  const { loadingTable, setLoadingTable } = useGlobalStore((state) => state);
  const [detail, setDetail] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  const columns = [
    {
      title: "NIK",
      render: (record) => (
        <>
          <span>{record?.NIK}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Nama Pasien",
      render: (record) => (
        <>
          <img className="rounded-circle" src={IMAGEPATH + record?.photo} />
          <strong>{record?.name}</strong>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Tanggal Lahir",
      render: (record) => (
        <>
          <span>{`${record?.placebirth}, ${record?.birthdate}`}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Agama",
      render: (record) => (
        <>
          <span>{record?.religion}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Jenis Kelamin",
      render: (record) => (
        <>
          <span>{record?.gender == "L" ? "Laki Laki" : "Perempuan"}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Email",
      render: (record) => (
        <>
          <span>{record?.email}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "No. Handphone",
      render: (record) => (
        <>
          <span>{record?.phone}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Golongan Darah",
      render: (record) => (
        <>
          <span>{record?.blood}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Tinggi Badan",
      render: (record) => (
        <>
          <span>{record?.height}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Berat Badan",
      render: (record) => (
        <>
          <span>{record?.weight}</span>
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
    {
      title: "Aksi",
      sorter: (a, b) => a.length - b.length,
      render: (record) => {
        return (
          <>
            <FaPencil
              onClick={() => {
                setDetail(record);
                setShow(true);
              }}
              className="text-primary"
              style={{ cursor: "pointer" }}
            />{" "}
            &nbsp;
            <FaTrash
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setDetail(record);
                setShowConfirm(true);
              }}
            />
          </>
        );
      },
    },
  ];

  const getData = async (
    dataPage = null,
    dataLimit = null,
    dataSeach = null
  ) => {
    setLoadingTable(true);
    await httpRequest({
      url: "/admin/patient",
      method: "get",
      params: {
        page: dataPage ? dataPage : page,
        limit: dataLimit ? dataLimit : limit,
        search: dataSeach,
        isAdmin: true,
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
                <h3 className="page-title">List Data Pasien</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">List Data Pasien</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="col-md-8">
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
                    <div className="col-sm-4">
                      <div className="text-end">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Cari data pasien..."
                          onChange={(e) => {
                            getData(1, 10, e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                        onChange: (page, pageSize) => {
                          // setPage(page);
                          // setLimit(pageSize);
                          getData(page, pageSize);
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

      {/* modal form */}
      <Modal
        show={show}
        onHide={() => {
          setDetail({});
          setShow(false);
        }}
        className="modal"
        style={{ marginTop: "80px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Tambah Data Dokter</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-primary submit-btn">
            Simpan
          </button>
        </Modal.Footer>
      </Modal>

      {/* modal confirm */}
      <Modal
        show={showConfirm}
        onHide={() => {
          setDetail({});
          setShowConfirm(false);
        }}
        className="modal"
        style={{ marginTop: "80px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">KONFIRMASI</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>apakah anda yakin ingin menghapus data {detail?.name} ?</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger btn-sm">IYA</button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setDetail({});
              setShowConfirm(false);
            }}
          >
            TIDAK
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Patient;
