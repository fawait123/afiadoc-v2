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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, mixed } from "yup";

const Specialist = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([]);
  const { loadingTable, setLoadingTable } = useGlobalStore((state) => state);
  const [detail, setDetail] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  const schema = object().shape({
    name: string().required("Name is required"),
    picture: mixed().test("fileType", "Unsupported file format", (value) => {
      console.log(value);
      if (value.length > 0) {
        return [
          "image/jpg",
          "image/png",
          "image/svg",
          "image/jpeg",
          "image/svg+xml",
        ].includes(value[0].type);
      }

      return Object.keys(detail).length > 0 ? true : false;
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("picture", data.picture[0]);
      httpRequest({
        url: "/admin/specialist",
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      })
        .then((response) => {
          console.log(response);
          setShow(false);
          reset();
          getData();
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      if (data.picture.length > 0) {
        formData.append("picture", data.picture[0]);
      }
      httpRequest({
        url: "/admin/specialist",
        method: "put",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
        params: {
          id: detail?.id,
        },
      })
        .then((response) => {
          console.log(response);
          setShow(false);
          reset();
          getData();
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Nama Spesialis",
      render: (record) => (
        <>
          <img
            className="rounded-circle"
            style={{ width: 80, height: 80, objectFit: "contain" }}
            src={IMAGEPATH + record?.picture}
          />
          <strong>{record?.name}</strong>
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
                setValue("name", record?.name);
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
      url: "/admin/specialist",
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
  console.log(errors);
  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">List Data Spesialis</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    List Data Spesialis
                  </li>
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
          setValue("name", null);
          setDetail({});
          setShow(false);
          reset();
        }}
        className="modal"
        style={{ marginTop: "80px" }}
      >
        <form
          onSubmit={handleSubmit(
            Object.keys(detail).length > 0 ? onEdit : onSubmit
          )}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h5 className="modal-title">
                {Object.keys(detail).length > 0 ? "Edit" : "Tambah"} Data
                Spesialis
              </h5>
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
                  {...register("name", {
                    required: "Name is required",
                  })}
                  placeholder="Please input name"
                  className={`form-control ${errors.name && "is-invalid"}`}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
              <div className="form-group">
                <label className="control-label mb-10">
                  Image <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  {...register("picture", { required: "Picture is required" })}
                  className={`form-control ${errors.picture && "is-invalid"}`}
                />
                {errors.picture && (
                  <div className="invalid-feedback">
                    {errors.picture.message}
                  </div>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              onClick={handleSubmit}
            >
              {Object.keys(detail).length > 0 ? "Ubah" : "Simpan"}
            </button>
          </Modal.Footer>
        </form>
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
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              httpRequest({
                url: "/admin/specialist",
                method: "delete",
                params: {
                  id: detail?.id,
                },
              }).then((response) => {
                console.log(response);
                setDetail({});
                setShowConfirm(false);
                getData();
              });
            }}
          >
            IYA
          </button>
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

export default Specialist;
