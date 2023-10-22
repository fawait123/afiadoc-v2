import React, { useEffect, useState } from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import Footer from "../../footer";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../header.jsx";
import httpRequest from "../../../../API/http.js";
import { Form, Image, Row, Select, Table, Modal as ModalAntd } from "antd";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { InputCustom } from "../../../../componentcustom/inputCustom.js";
import {
  itemRender,
  onShowSizeChange,
} from "../../../../admin/components/paginationfunction.js";
import useGlobalStore from "../../../../STORE/GlobalStore/index.js";

const Dependent = (props) => {
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  const { loadingTable, setLoadingTable } = useGlobalStore((state) => state);
  const [detail, setDetail] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  const columns = [
    {
      title: "NIK",
      render: (record) => <span>{record?.NIK}</span>,
    },
    {
      title: "Nama Pasien",
      render: (text, record) => {
        return (
          <Row justify={"start"} align={"middle"}>
            <Image
              width={80}
              height={80}
              style={{ objectFit: "contain", borderRadius: 50 }}
              src={record?.photo}
            />
            <span>{record?.name}</span>
          </Row>
        );
      },
    },
    {
      title: "Tanggal Lahir",
      render: (record) => (
        <span>{`${record?.placebirth}, ${record?.birthdate}`}</span>
      ),
    },
    {
      title: "Jenis Kelamin",
      render: (record) => (
        <span>{record?.gender == "L" ? "Laki Laki" : "Perempuan"}</span>
      ),
    },
    {
      title: "Agama",
      render: (record) => <span>{record?.religion}</span>,
    },
    {
      title: "Email",
      render: (record) => <span>{record?.email}</span>,
    },
    {
      title: "No. Handphone",
      render: (record) => <span>{record?.phone}</span>,
    },
    {
      title: "Golongan Darah",
      render: (record) => <span>{record?.blood}</span>,
    },
    {
      title: "Berat Badan",
      render: (record) => <span>{record?.weight}</span>,
    },
    {
      title: "Tinggi Badan",
      render: (record) => <span>{record?.height}</span>,
    },
    {
      title: "Aksi",
      key: "action",
      render: (record) => {
        console.log(record);
        return (
          <>
            <FaPencil
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setDetail(record);
                setShow(true);
              }}
            />
            &nbsp;&nbsp;
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

  const getData = (pageData = null, limitData = null, search) => {
    setLoadingTable(true);
    httpRequest({
      url: "/admin/patient",
      method: "get",
      params: {
        page: pageData ? pageData : page,
        limit: limitData ? limitData : limit,
        search,
      },
    })
      .then((response) => {
        const result = response?.data?.results?.data?.rows;
        setRows(result);
        setPage(response?.data?.results?.data?.page);
        setLimit(response?.data?.results?.data?.limit);
        setCount(response?.data?.results?.data?.count);
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
                    <div className="col-sm-8">
                      <div className="col-md-8">
                        <a
                          href="#modal_form"
                          onClick={() => setShow(true)}
                          className="btn btn-primary btn-sm"
                          tabIndex={0}
                        >
                          Tambah Spesialis
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="text-end">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Cari data spesialis..."
                          onChange={(e) => {
                            getData(1, 10, e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  {/* Dependent Tab */}
                  <div className="card card-table mb-0">
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
                  {/* /Dependent Tab */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal form */}
      <Modal
        show={false}
        onHide={() => {
          setDetail({});
          setShow(false);
        }}
        className="modal"
        style={{ marginTop: "80px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add new member</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form layout="vertical">
            <InputCustom
              label={"Name"}
              name={"name"}
              rules={[{ required: true }]}
            />
            <Form.Item>
              <Select>
                <Select.Option>halo</Select.Option>
              </Select>
            </Form.Item>
          </Form>
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

      {/* modal antd */}
      <ModalAntd
        title="Basic Modal"
        open={show}
        onOk={() => null}
        onCancel={() => null}
      >
        <Form.Item>
          <Select>
            <Select.Option>ajksdjh</Select.Option>
          </Select>
        </Form.Item>
      </ModalAntd>
      <Footer {...props} />
    </div>
  );
};

export default Dependent;
