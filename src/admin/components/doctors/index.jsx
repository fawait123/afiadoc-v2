import React, { useEffect, useState } from "react";
import { Image, Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";
import httpRequest from "../../../API/http";
import moment from "moment";
import useGlobalStore from "../../../STORE/GlobalStore";
import { IMAGEPATH } from "../../../config";
import { Modal } from "react-bootstrap";
import Utils from "../../../helpers/utils";
import { FaEye, FaPencil, FaTrash } from "react-icons/fa6";

const Doctors = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  const { loadingTable, setLoadingTable } = useGlobalStore((state) => state);
  const [detail, setDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);
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
      title: "STR",
      render: (record) => (
        <>
          <span>{record?.STR}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Nama Dokter",
      dataIndex: "name",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to={`/admin/profile?id=${record?.id}`}>
            <img className="rounded-circle" src={IMAGEPATH + record?.photos} />
          </Link>
          <Link to={`/admin/profile?id=${record?.id}`}>{text}</Link>
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
      title: "Tanggal Lahir",
      sorter: (a, b) => a.length - b.length,
      render: (record) => {
        return (
          <>
            <span>{`${record?.placebirth}, ${record?.birthdate}`}</span>
          </>
        );
      },
    },
    {
      title: "Spesialis",
      sorter: (a, b) => a.length - b.length,
      render: (record) => {
        return (
          <>
            <span>{record?.specialist?.name}</span>
          </>
        );
      },
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
      title: "Tanggal Daftar",
      render: (record) => (
        <>
          <span className="user-name">
            {moment(record.createdAt).format("DD MM YYYY")}
          </span>
          <br />
          <span>{moment(record.createdAt).format("hh:mm:ss")}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Pendidikan",
      render: (record) => (
        <>
          {record?.academics?.map((item, index) => (
            <span
              key={index}
              className="badge bg-primary text-white"
            >{`${item?.name} ${item?.year_entry}-${item?.year_out}`}</span>
          ))}
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Alamat",
      render: (record) => (
        <>
          <span>{Utils.formatAddress(record?.addresses)}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
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
              checked={record?.user?.is_active}
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
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Dokumen",
      render: (record) => (
        <>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setDetail(record);
              setShowDetail(true);
            }}
          >
            <FaEye />
          </button>
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
      url: "/admin/doctor",
      method: "get",
      params: {
        page: dataPage ? dataPage : page,
        limit: dataLimit ? dataLimit : limit,
        search: dataSeach,
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
                <h3 className="page-title">List Data Dokter</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">List Data Dokter</li>
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
                          Tambah Dokter
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="text-end">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Cari data dokter"
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

      {/* modal detail */}
      <Modal
        show={showDetail}
        onHide={() => {
          setDetail({});
          setShowDetail(false);
        }}
        className="modal"
        style={{ marginTop: "80px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Detail Dokumen {detail?.name}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4">
              <Image src={detail?.photo} alt="Foto Profil" />
            </div>
            <div className="col-md-4">
              <Image src={detail?.practice} alt="Foto Praktik" />
            </div>
            <div className="col-md-4">
              <Image src={detail?.ktp} alt="Foto KTP" />
            </div>
          </div>
        </Modal.Body>
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

export default Doctors;
