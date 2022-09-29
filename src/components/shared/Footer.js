import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row espace-line-footer">
            <div className="col">
              <div className="col mt-5 mb-5">
                <strong className="title-footer">Sobre Amasun</strong>
                <div>
                  <a className="none-type" href="www.amasun.com.pe">
                    Aventura con delfines
                  </a>
                </div>
                <div>
                  <a className="none-type" href="www.amasun.com.pe">
                    Paquetes
                  </a>
                </div>
                <div>
                  <a className="none-type" href="www.amasun.com.pe">
                    Tienda virtula
                  </a>
                </div>
                <div>
                  <a className="none-type" href="www.amasun.com.pe">
                    promociones
                  </a>
                </div>
                <div>
                  <a className="none-type" href="www.amasun.com.pe">
                    Nosotros
                  </a>
                </div>
              </div>
            </div>
            <div className="col mt-5 mb-5">
              <strong className="title-footer">Sobre Amasun</strong>
              <div>
                <a className="none-type" href="www.amasun.com.pe">
                  Protocolos Covid - 19
                </a>
              </div>
              <div>
                <a className="none-type" href="www.amasun.com.pe">
                  Preguntas frecuentes
                </a>
              </div>
              <div>
                <a className="none-type" href="www.amasun.com.pe">
                  Terminos y condiciones
                </a>
              </div>
              <div>
                <a className="none-type" href="www.amasun.com.pe">
                  Politicas de privacidad
                </a>
              </div>
              <div>
                <a className="none-type" href="www.amasun.com.pe">
                  Cambios y devoluciones
                </a>
              </div>
              <div>
                <a className="none-type" href="www.amasun.com.pe">
                  Libro de reclamaciones
                </a>
              </div>
            </div>
            <div className="col mt-5 mb-5">
              <div className="col">
                <strong className="title-footer">Mi cuenta</strong>
                <div>
                  <a className="none-type" href="www.amasun.com.pe">
                    Iniciar sesion
                  </a>
                </div>
                <div>
                  <a className="none-type" href="www.amasun.com.pe">
                    Registrarme
                  </a>
                </div>
                <strong className="title-footer">Contáctanos</strong>
                <div>
                  <a className="none-type" href="www.amasun.com.pe">
                    info@amasun.com.pe
                  </a>
                </div>
                <div>
                  <a className="none-type" href="www.amasun.com.pe">
                    Celular: 999 999 999
                  </a>
                </div>
              </div>
            </div>
            <div className="col mt-5 mb-5">
              <div className="col">
                <strong className="title-footer">Siguenos</strong>
                <div className="row mb-3">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/tiktok.svg"}
                    style={{
                      height: "60px",
                      width: "60px",
                      color: "white",
                    }}
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/facebook.svg"}
                    style={{
                      height: "60px",
                      width: "60px",
                      color: "white",
                    }}
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/instagram.svg"}
                    style={{
                      height: "60px",
                      width: "60px",
                      color: "white",
                    }}
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/icons/youtube.svg"}
                    style={{
                      height: "60px",
                      width: "60px",
                      color: "white",
                    }}
                    alt="..."
                  />
                </div>
                <div className="row">
                  <strong className="title-footer mb-3">Metodo de pago</strong>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/image2.png"}
                    style={{
                      height: "30px",
                      width: "60px",
                      color: "white",
                    }}
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/image31.png"}
                    style={{
                      height: "30px",
                      width: "70px",
                      color: "white",
                    }}
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/image33.png"}
                    style={{
                      height: "30px",
                      width: "80px",
                      color: "white",
                    }}
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/image34.png"}
                    style={{
                      height: "30px",
                      width: "90px",
                      color: "white",
                    }}
                    alt="..."
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/logo2.png"}
                    style={{
                      height: "30px",
                      width: "90px",
                      color: "white",
                    }}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-brand p-5">
            <div>
              <span style={{ color: "white" }}>
                Amasun© 2021 - Todos los derechos reservados
              </span>
            </div>
            <div>
              <div className="row">
                <img
                  src={process.env.PUBLIC_URL + "/assets/icons/logo.svg"}
                  style={{
                    height: "50px",
                    width: "250px",
                    color: "white",
                  }}
                  alt="..."
                />
                {/* <img
                  src={process.env.PUBLIC_URL + "/assets/images/image174.png"}
                  style={{
                    height: "60px",
                    width: '100px', color: "white"
                  }}
                  alt="..."
                /> */}
              </div>
            </div>
            <div>
              <span style={{ color: "white" }}>
                Desarrollado por Smartbrand
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
