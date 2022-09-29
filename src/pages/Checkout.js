import React from "react";

const Checkout = () => {
  return (
    <div>
      <div
        className="container"
        style={{ marginTop: "200px", borderBottom: "1px solid grey" }}
      >
        <span className="">REGRESAR RESERVA</span>
      </div>
      <div className="container">
        <div className="mt-3 mb-3">
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
              />
              <select
                class="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>DNI</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                class="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Codigo del pais</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Correo electronico"
                aria-label="First name"
              />
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Provincia</option>
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
                aria-label="Last-name"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="N de documento"
                aria-label="Last-name"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Telefono"
                aria-label="Last-name"
              />
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Departamento</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Distrito</option>
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
                aria-label="First name"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Observaciones"
                aria-label="First name"
              />
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <button
                className="mb-5 mt-5"
                style={{
                  backgroundColor: "#A8CF45",
                  color: "white",
                  borderStyle: "none",
                  height: "40px",
                  borderRadius: "5px",
                }}
              >
                CONTINUAR
              </button>
            </div>
          </div>
        </div>
        {/* <div className="col text-end">
          <span>Barra</span>
        </div> */}
      </div>
      <div className="col container">
        <div className="mt-5 mb-3 pt-5" style={{ borderTop: "1px solid grey" }}>
          <strong>Metodo de pago</strong>
        </div>
        <div className="row payment-set">
          <div className="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
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
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Pago efectivo
              </label>
            </div>
          </div>
          <div className="col">
            <div className="icons-pay">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons/image11.svg"}
                className=""
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="row payment-set">
          <div className="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
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
        <div class="form-check mt-5 mb-5">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            He leido y acepto los terminos y condiciones
          </label>
        </div>
        <div className="text-center mb-5">
          <button
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
  );
};

export default Checkout;
