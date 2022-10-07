import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Paymentsection from "../components/Paymentsection";
import Openpay from "../components/Openpay";

const Checkout = (props) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [urlPayment, setUrlPayment] = useState("");
  const [data, setData] = useState([]);

  let payload = {
    method: "card",
    amount: 45,
    currency: "PEN",
    description: "Tour Delfin Rosado",
    order_id: "13",
    customer: {
      name: name,
      last_name: lastname,
      phone_number: phone,
      email: email,
    },
    confirm: "false",
    send_email: "true",
    redirect_url: "http://www.amasun.pe/pagorecibido.html",
  };

  const postCheckout = async () => {
    const MERCHANT_ID = "myonzy4zn8ejikze0cjq";

    const configHeaders = {
      headers: {
        ContentType: "application/json",
        Authorization: "Basic c2tfODdhODcwYTUzYThkNGVmZjg4ZWM1ZTEzMGU4NTVhYzk6",
      },
    };
    const url = `https://sandbox-api.openpay.pe/v1/${MERCHANT_ID}/charges`;
    const result = await axios
      .post(url, payload, configHeaders)
      .catch((error) => console.log(error));

    setData(result.data);
    setUrlPayment(result.data.payment_method.url);
    console.log(urlPayment);
    return console.log(data);
  };

  return (
    <div>
      <div className="row">
        <div className="col ms-5">
          <div
            className=""
            style={{ marginTop: "100px", borderBottom: "1px solid grey" }}
          >
            <Link to={"/"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/Flecha.svg"}
                className="me-3"
                style={{ height: "50px", width: "30px" }}
                alt="..."
              />
            </Link>
            <span className="">REGRESAR RESERVA</span>
          </div>
          <form>
            <div className="container">
              <div className="mt-3 mb-3">
                <img
                  src={process.env.PUBLIC_URL + "/assets/icons/numerouno.svg"}
                  className="me-3"
                  style={{ height: "50px", width: "30px" }}
                  alt="..."
                />
                <strong className="mt-5">Datos personales</strong>
              </div>
              <div className="">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Nombre"
                      aria-label="First name"
                      value={name}
                      onChange={(event) => setName(event.currentTarget.value)}
                    />
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option defaultValue={"0"}>DNI</option>
                      <option value="1">RUC</option>
                      <option value="2">Pasaporte</option>
                    </select>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option defaultValue={"0"}>Codigo del pais</option>
                      <option value="1">+51</option>
                      <option value="2">+1</option>
                    </select>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Correo electronico"
                      aria-label="Correo electronico"
                      value={email}
                      onChange={(event) => setEmail(event.currentTarget.value)}
                    />
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option defaultValue={"0"}>Provincia</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="col">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Apellido"
                      aria-label="Last name"
                      value={lastname}
                      onChange={(event) =>
                        setLastName(event.currentTarget.value)
                      }
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="N de documento"
                      aria-label="document"
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Telefono"
                      value={phone}
                      onChange={(event) => setPhone(event.currentTarget.value)}
                      aria-label="phone"
                    />
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option defaultValue={"0"}>Departamento</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option defaultValue={"0"}>Distrito</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Direccion"
                      aria-label="direction"
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Observaciones"
                      aria-label="direction"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                    {/* <button
                className="mb-5 mt-5"
                onClick={postCheckout}
                style={{
                  backgroundColor: "#A8CF45",
                  color: "white",
                  borderStyle: "none",
                  height: "40px",
                  borderRadius: "5px",
                }}
              >
                CONTINUAR
              </button> */}
                  </div>
                </div>
              </div>
              {/* <div className="col text-end">
          <span>Barra</span>
        </div> */}
            </div>
          </form>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Pago
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Sera redirigido a la pasarela de pago de OpenPay. Esta de
                  acuerdo?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <a href={urlPayment ? urlPayment : ""}>
                    <button
                      style={{
                        backgroundColor: "#A8CF45",
                        color: "white",
                        borderStyle: "none",
                        height: "40px",
                        borderRadius: "5px",
                      }}
                      type="button"
                      className="btn btn-primary"
                    >
                      Continuar
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col container">
            <div
              className="mt-5 mb-3 pt-5"
              style={{ borderTop: "1px solid grey" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/numerodos.svg"}
                className="me-3"
                style={{ height: "50px", width: "30px" }}
                alt="..."
              />
              <strong>Metodo de pago</strong>
            </div>
            <div className="row payment-set">
              <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Tarjeta de credito o debito
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="icons-pay ">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/image7.svg"}
                    className=""
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/image8.svg"}
                    className=""
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/image9.svg"}
                    className=""
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/image10.svg"}
                    className=""
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="row payment-set">
              <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Transferencias bancarias
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="icons-pay">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/image133.svg"}
                    className=""
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="form-check mt-5 mb-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                He leido y acepto los terminos y condiciones
              </label>
            </div>
            <div className="text-center mb-5">
              <button
                onClick={postCheckout}
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{
                  backgroundColor: "#A8CF45",
                  color: "white",
                  borderStyle: "none",
                  height: "40px",
                  borderRadius: "5px",
                }}
              >
                REALIZAR PAGO
              </button>
            </div>
          </div>
        </div>
        <div className="col" style={{ marginTop: "200px" }}>
          <Paymentsection></Paymentsection>
          <Openpay></Openpay>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
