import React, { useEffect, useState } from "react";
import Carrusel from "../components/Carrusel";
import Bote from "../components/Bote";
import Acordeon from "../components/Acordeon";
import Informacion from "../components/Informacion";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import BoatDoce from "../components/BoatDoce";

const Reserva = (props) => {
  const [hora, setHora] = useState();
  const [adulto, setAdulto] = useState("");
  const [nino, setNino] = useState("");
  const [bote, setBote] = useState(0);
  const [fecha, setFecha] = useState("");
  const [allBotes, setAllBotes] = useState([]);
  const [optionBoats, setOptionBoats] = useState([]);
  const [dataReserves, setDataReserves] = useState([]);
  const [colorSeats, setColorSeats] = useState();
  const [seats, setSeats] = useState();
  const [action, setAction] = useState(0);

  let date;
  let dataValue;

  //HOOK PARA TRAER LOS NOMBRES DE LOS BOTES
  useEffect(() => {
    const url = "https://amasun.satelital.org/api/v1/boats";

    const configHeaders = {
      headers: {
        ContentType: "application/json",
        Accept: "application/json",
        Authorization: "Bearer 1|mwIpmBWyBSvzLkco5v0bmJGHLhgMYXBXYK3conAC",
      },
    };
    axios.get(url, configHeaders).then((res) => {
      setAllBotes(res.data.data);
    });
  }, []);

  //FUNCION PARA OBTENER LA DATA SEGUN EL FILTRO
  const obtainDataReserve = async () => {
    let urlDateReserve = `https://amasun.satelital.org/api/v1/departures?date=2022-09-25&time=${hora}`;
    const configHeaders = {
      headers: {
        ContentType: "application/json",
        Accept: "application/json",
        Authorization: "Bearer 1|mwIpmBWyBSvzLkco5v0bmJGHLhgMYXBXYK3conAC",
      },
    };
    await axios
      .get(urlDateReserve, configHeaders)
      .then((res) => {
        date = res.data.data;
      })
      .catch((error) => console.log(error));

    dataValue = date.find((e) => e.id === +bote);
    if (dataValue === undefined) {
      return alert("Este bote no tiene fechas disponibles");
    }
    setSeats(dataValue);
    setColorSeats(dataValue.boat.seatscount);
  };

  //FUNCION PARA QUE APAREZCA EL LA SECCION DE DETALLES DE RESERVA
  const buscar = () => {
    let element = document.getElementById("sinreserva");
    let element2 = document.getElementById("conreserva");
    if (!element.classList.contains("hidden")) {
      element.classList.add("hidden");
      element2.classList.remove("hidden");
    }
  };

  const oninput = () => {
    let element = document.getElementById("reserva");

    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
  };

  return (
    <div>
      <header
        className="ms-4 bote-name"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/imageOne.png"
          })`,
          height: "600px",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="" style={{ paddingTop: "250px", color: "white" }}>
          {seats ? seats.boat.name : ""}
        </h1>
      </header>
      <div className="container">
        <form
          className="container-reserva-input d-flex justify-content-around row mt-3 mb-5 shadow-box"
          style={{ borderRadius: "5px" }}
        >
          <div className="col">
            <div>
              <label htmlFor="bote" className="form-label">
                Bote
              </label>
            </div>
            <select
              // className="form-select-lg ms-3"
              aria-label="Default select example"
              onChange={(event) => {
                setBote(event.currentTarget.value);
              }}
              value={bote}
              className="input-class"
              placeholder="bote"
              id="bote"
              name="bote"
              onClick={oninput}
            >
              {allBotes.map((element, index) => {
                return (
                  <option key={index} value={element.id}>
                    {element.boat_name} {element.id}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col">
            <div>
              <label htmlFor="bote" className="form-label ms-2">
                Fecha de reserva
              </label>
            </div>
            <input
              className="input-class"
              type="date"
              id="fecha"
              name="trip-start"
              value={fecha}
              min="2022-09-14"
              max="2025-12-31"
              onClick={oninput}
              onChange={(event) => setFecha(event.currentTarget.value)}
            />
          </div>
          <div className="col">
            <div>
              <label htmlFor="bote" className="form-label ms-2">
                Hora de salida
              </label>
            </div>
            <select
              // className="form-select-lg ms-3"
              aria-label="Default select example"
              onChange={(event) => setHora(event.currentTarget.value)}
              value={hora}
              className="input-class"
              id="hora"
              onClick={oninput}
            >
              <option defaultValue>Hora de salida</option>
              <option value={"14:00:00"}>14:00:00 </option>
              <option value={"16:00:00"}>16:00:00</option>
            </select>
          </div>
          <div className="col">
            <div>
              <label htmlFor="bote" className="form-label ms-2">
                Asientos
              </label>
            </div>
            <input
              className="input-class"
              type="number"
              id="adultos"
              name="adultos"
              min="0"
              placeholder="Asientos"
              max="100"
              onClick={oninput}
              onChange={(event) => setNino(event.currentTarget.value)}
            />
          </div>
          <div className="col">
            <div>
              <label htmlFor="bote" className="form-label ms-2">
                Niños de 3 a 8 años
              </label>
            </div>
            <input
              className="input-class"
              type="number"
              id="ninos"
              name="ninos"
              placeholder="Niños"
              onClick={oninput}
              min="0"
              max="100"
              onChange={(event) => setAdulto(event.currentTarget.value)}
            />
          </div>
          <div className="col mt-4">
            <button
              onClick={() => {
                obtainDataReserve();
                buscar();
              }}
              type="button"
              className="btn btn-success btn-lg ms-3"
              style={{ backgroundColor: "#A8CF45", color: "white" }}
            >
              Buscar
            </button>
          </div>
        </form>
      </div>

      <div className="bote-zone container mt-5  mb-5 hidden" id="reserva">
        <div className="col">
          <div className="row">
            <div className="col">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                style={{ backgroundColor: "grey" }}
                value=""
                aria-label="..."
              />
              <label
                className="form-check-label ms-1"
                htmlFor="flexCheckDefault"
              >
                Asientos ocupados(
                {seats ? seats.boat.seatscount : 0})
              </label>
            </div>
            <div className="col">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
              <label
                className="form-check-label ms-1"
                htmlFor="flexCheckDefault"
              >
                Asientos disponibles(
                {seats ? 12 - seats.boat.seatscount : 0})
              </label>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <BoatDoce
              sitsone={colorSeats >= 1 ? "gray" : "white"}
              sitstwo={colorSeats >= 2 ? "gray" : "white"}
              sitsthree={colorSeats >= 3 ? "gray" : "white"}
              sitsfour={colorSeats >= 4 ? "gray" : "white"}
              sitsfive={colorSeats >= 5 ? "gray" : "white"}
              sitssix={colorSeats >= 6 ? "gray" : "white"}
              sitsseven={colorSeats >= 7 ? "gray" : "white"}
              sitseight={colorSeats >= 8 ? "gray" : "white"}
              sitsnine={colorSeats >= 9 ? "gray" : "white"}
              sitsten={colorSeats >= 10 ? "gray" : "white"}
              sitseleven={colorSeats >= 11 ? "gray" : "white"}
              sitstwelve={colorSeats >= 12 ? "gray" : "white"}
            ></BoatDoce>
          </div>
          <div className="col">
            <p>Esquema referencial</p>
            <p>
              *Los Asientos son asignasods de forma aletoria para propocionar el
              peso del bote
            </p>
          </div>
        </div>
        <div className="col pt-3 ">
          <div className="col check-reserve shadow-sm" id="sinreserva">
            <div className="mt-5 ms-5">
              <strong>Resumen de reserva</strong>
            </div>
            <div className="text-center mt-3 mb-3">
              <img
                className=""
                src={process.env.PUBLIC_URL + "/assets/icons/boteicon.svg"}
                alt=""
              />
            </div>
            <div className="text-center">
              <strong>Aún no has dado a buscar una fecha y hora</strong>
            </div>
            <div className="mb-5 text-center">
              <strong>
                Tu reserva aparerá aquí una vez selecciones algún filtro
              </strong>
            </div>
          </div>
          <div
            className="col hidden check-reserve ps-3 shadow-sm"
            id="conreserva"
          >
            <div className="mt-3 ">
              <strong>Resumen de reserva</strong>
            </div>
            <div className="col">
              <span>Adutos {adulto}</span>
              <div className="row">
                <div className="col">
                  <span>
                    {fecha} | {hora}
                  </span>
                </div>
                <div className="col text-end me-3">
                  <strong>{`S/${
                    seats ? seats.price_adult * adulto : 0
                  }`}</strong>
                </div>
              </div>
            </div>
            <div className="col">
              <span>Niños {nino}</span>
              <div className="row">
                <div className="col">
                  <span>
                    {fecha} | {hora}
                  </span>
                </div>
                <div className="col text-end me-3">
                  <strong>{`S/${seats ? seats.price_child * nino : 0}`}</strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <strong>Total a pagar</strong>
              </div>
              <div className="col text-end me-3">
                <strong>{`S/${
                  seats
                    ? seats.price_child * nino + seats.price_adult * adulto
                    : 0
                }`}</strong>
              </div>
            </div>
            <Link to={"/checkout"}>
              <button className="button-reserve mt-2 mb-2">
                CONFIRMAR RESERVA
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Carrusel></Carrusel>
          </div>
          <div className="col ">
            <div
              className="container text-start shadow-box"
              style={{ height: "250px", padding: "40px", borderRadius: "20px" }}
            >
              <h3>{seats ? seats.boat.name : ""}</h3>
              <p style={{ color: "#557B4D" }}>
                {seats ? seats.location.name : "Escoja un tour el el buscador"}
              </p>
              <div>
                <del>{`S/${
                  seats
                    ? seats.boat.price_adult
                    : "Escoja un tour el el buscador"
                }`}</del>
              </div>
              <div>
                <strong>{`S/${
                  seats
                    ? seats.boat.price_adult
                    : "Escoja un tour el el buscador"
                }`}</strong>
              </div>

              <div className="row">
                <div
                  className="col"
                  style={{
                    backgroundColor: "rgba(237, 47, 89, 0.2)",
                    paddingTop: "7px",
                    width: "10px",
                    color: "#ED2F59",
                    borderRadius: "20px",
                    marginTop: "5px",
                  }}
                >
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
