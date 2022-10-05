import React, { useEffect, useState } from "react";
import Carrusel from "../components/Carrusel";
import Acordeon from "../components/Acordeon";
import Informacion from "../components/Informacion";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Reserva = (props) => {
  const [hora, setHora] = useState("");
  const [adulto, setAdulto] = useState("");
  const [nino, setNino] = useState("");
  const [bote, setBote] = useState("0");
  const [fecha, setFecha] = useState("");
  const [allBotes, setAllBotes] = useState([]);
  const [optionBoats, setOptionBoats] = useState([]);

  useEffect(() => {
    const obtenerBoter = async () => {
      const url =
        "https://amasun.satelital.org/api/v1/departures?date=2022/09/25&time=14:00:00";

      const configHeaders = {
        headers: {
          ContentType: "application/json",
          Accept: "application/json",
          Authorization: "Bearer mwIpmBWyBSvzLkco5v0bmJGHLhgMYXBXYK3conAC",
        },
      };

      const result = await axios.get(url, configHeaders);
      setAllBotes(result.data.data);
    };
    obtenerBoter();
  }, []);

  let options = [];

  for (let i = 0; i < allBotes.length; i++) {
    options.push(allBotes[i].boat.name);
  }

  console.log(allBotes);
  const data = [
    {
      id: 1,
      boteName: "Avistamiento de delfines en el Río Amazonas",
      reservedSits: 6,
      cantidadAdultos: "",
      cantidadNInos: "",
      cantidadAdultos: "",
      precioNinos: 200,
      precioAdulto: 230,
    },
    {
      id: 2,
      boteName: "Atardecer en el rio",
      reservedSits: 5,
      cantidadAdultos: "",
      cantidadNInos: "",
      precioNinos: 300,
      precioAdulto: 330,
    },
    {
      id: 3,
      boteName: "Vista a las ballenas",
      reservedSits: 2,
      cantidadAdultos: "",
      cantidadNInos: "",
      cantidadAdultos: "",
      precioNinos: 80,
      precioAdulto: 130,
    },
  ];

  let totalAdulto = data[bote].precioAdulto * adulto;
  let totalNino = data[bote].precioNino * nino;

  console.log(props);
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
      <div
        className="container bote-name"
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
          {data[bote].boteName}
        </h1>
      </div>
      <div className="container-reserva-input d-flex justify-content-around row mt-3 mb-5">
        {/* <label for="bote" class="form-label row ms-2">
          Bote
        </label> */}
        <div className="col">
          <div>
            <label for="bote" className="form-label">
              Bote
            </label>
          </div>
          <select
            // className="form-select-lg ms-3"
            aria-label="Default select example"
            onChange={(event) => setBote(event.currentTarget.value)}
            value={bote}
            className="input-class"
            placeholder="bote"
            id="bote"
            name="bote"
            onClick={oninput}
          >
            {options.map((element, index) => {
              return <option value={index}>{element}</option>;
            })}
          </select>
        </div>
        <div className="col">
          <div>
            <label for="bote" className="form-label ms-2">
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
            <label for="bote" className="form-label ms-2">
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
            <option value={"7:00 am a 9:00 am"}>7:00 am a 9:00 am </option>
            <option value={"2:00 pm a 4:00 pm"}>2:00 pm a 4:00 pm</option>
          </select>
        </div>
        <div className="col">
          <div>
            <label for="bote" className="form-label ms-2">
              Asientos
            </label>
          </div>
          <input
            className="input-class"
            type="number"
            id="ninos"
            name="ninos"
            min="0"
            placeholder="Asientos"
            max="100"
            onClick={oninput}
            onChange={(event) => setNino(event.currentTarget.value)}
          />
        </div>
        <div className="col">
          <div>
            <label for="bote" className="form-label ms-2">
              Niños de 3 a 8 años
            </label>
          </div>
          <input
            className="input-class"
            type="number"
            id="adultos"
            name="adultos"
            placeholder="Niños"
            onClick={oninput}
            min="0"
            max="100"
            onChange={(event) => setAdulto(event.currentTarget.value)}
          />
        </div>
        <div className="col mt-4">
          <button
            onClick={buscar}
            type="button"
            className="btn btn-success btn-lg ms-3"
            style={{ backgroundColor: "#A8CF45", color: "white" }}
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="bote-zone container mt-5 mb-5 hidden" id="reserva">
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
              <label className="form-check-label ms-1" for="flexCheckDefault">
                Asientos ocupados({data[bote].reservedSits})
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
              <label className="form-check-label ms-1" for="flexCheckDefault">
                Asientos disponibles({12 - data[bote].reservedSits})
              </label>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <img
              className=""
              src={process.env.PUBLIC_URL + "/assets/images/bote.jpg"}
              alt=""
              style={{ width: "700px", height: "250px" }}
            />
          </div>
          <div className="col">
            <p>Esquema referencial</p>
            <p>
              *Los Asientos son asignasods de forma aletoria para propocionar el
              peso del bote
            </p>
          </div>
        </div>
        <div className="col">
          <div className="col check-reserve shadow-sm" id="sinreserva">
            <div className="mt-5 ms-5">
              <strong>Resumen de reserva</strong>
            </div>
            <div className="text-center">
              <img
                className=""
                src={process.env.PUBLIC_URL + "/assets/icons/ellipse46.svg"}
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
                  <strong>{`S/${data[bote].precioAdulto * adulto}`}</strong>
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
                  <strong>{`S/${data[bote].precioNinos * nino}`}</strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <strong>Total a pagar</strong>
              </div>
              <div className="col text-end me-3">
                <strong>{`S/${
                  data[bote].precioNinos * nino +
                  data[bote].precioAdulto * adulto
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
              <h3>{data[bote].boteName}</h3>
              <p style={{ color: "#557B4D" }}>Cusco, Peru</p>
              <div>
                <del>{`S/${data[bote].precioAdulto}`}</del>
              </div>
              <div>
                <strong>{`S/${data[bote].precioAdulto}`}</strong>
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
