import React from "react";
import Carrusel from "../components/Carrusel";
import Acordeon from "../components/Acordeon";
import Informacion from "../components/Informacion";

const Reserva = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide tamano"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/imageOne.png"}
              className="d-block w-100 tamano"
              alt="aqui va la imagen"
            />
          </div>
        </div>
      </div>
      <div className="container">
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
              <del>S/130</del>
              <strong>S/130</strong>
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
