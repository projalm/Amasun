import React from "react";
import { Link } from "react-router-dom";

const Paymentsection = () => {
  return (
    <div>
      <div className="col check-reserve ps-3 shadow-sm" id="conreserva">
        <div className="mt-3 ">
          <strong>Resumen de reserva</strong>
        </div>
        <div className="col">
          <span>Adutos 0</span>
          <div className="row">
            <div className="col">
              <span>2022-08-19 | 14:00:00</span>
            </div>
            <div className="col text-end me-3">
              <strong>{`S/0`}</strong>
            </div>
          </div>
        </div>
        <div className="col">
          <span>Niños 0</span>
          <div className="row">
            <div className="col">
              <span>2022-08-19 | 14:00:00</span>
            </div>
            <div className="col text-end me-3">
              <strong>{`S/0`}</strong>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <strong>Total a pagar</strong>
          </div>
          <div className="col text-end me-3">
            {/* <strong>{`S/${
              seats ? seats.price_child * nino + seats.price_adult * adulto : 0
            }`}</strong> */}
          </div>
        </div>
        <Link to={"/checkout"}>
          <button className="button-reserve mt-2 mb-2">
            CONFIRMAR RESERVA
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Paymentsection;
