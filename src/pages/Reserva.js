import React from "react";
import Carrusel from "../components/Carrusel";
import Acordeon from "../components/Acordeon";
import Informacion from "../components/Informacion";

const Reserva = () => {
  return (
    <div>
      <div>
        <img
          className="mt-5 w-100 h-100"
          src={process.env.PUBLIC_URL + "/assets/images/imageOne.png"}
          alt=""
        />
      </div>
      <div className="container mt-3 mb-5">
        <select
          className="form-select-lg mt-5"
          aria-label="Default select example"
        >
          <option defaultValue>Open this select menu</option>
          <option value={1}>Bote 1</option>
          <option value={2}>Bote 2</option>
          <option value={3}>Bote 3</option>
        </select>
        <select
          className="form-select-lg ms-3"
          aria-label="Default select example"
        >
          <option defaultValue>Open this select menu</option>
          <option value={1}>Bote 1</option>
          <option value={2}>Bote 2</option>
          <option value={3}>Bote 3</option>
        </select>
        <select
          className="form-select-lg ms-3"
          aria-label="Default select example"
        >
          <option defaultValue>Open this select menu</option>
          <option value={1}>Bote 1</option>
          <option value={2}>Bote 2</option>
          <option value={3}>Bote 3</option>
        </select>
        <select
          className="form-select-lg ms-3"
          aria-label="Default select example"
        >
          <option defaultValue>Open this select menu</option>
          <option value={1}>Bote 1</option>
          <option value={2}>Bote 2</option>
          <option value={3}>Bote 3</option>
        </select>
        <button type="button" className="btn btn-success btn-lg ms-3">
          Buscar
        </button>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Carrusel></Carrusel>
          </div>
          <div className="col">
            <div className="container text-start">
              <h3>Avistamiento de delfines en el Río Amazonas</h3>
              <p>Cusco, Peru</p>
              <div>
                <del>S/130</del>
              </div>
              <div>
                <strong>S/130</strong>
              </div>

              <div className="row">
                <div className="col">
                  <strong>Tarifa por persona</strong>
                </div>
                <div className="col">
                  <p>2horas</p>
                </div>
              </div>
            </div>
            <Acordeon />
          </div>
        </div>
      </div>
      <Informacion />
    </div>
  );
};

export default Reserva;
