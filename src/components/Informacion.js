import React from "react";

const Informacion = () => {
  return (
    <div>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col">
            <h5>Informacion para COVID-19</h5>
            <p>
              Informate mas sobre nuestro Protocolos COVID-19 donde encontraras
              todo lo necesario para viajar con seguridad en nuestros tours y
              paquetes
            </p>
          </div>
          <div className="col">
            <div className="accordion" id="accordionExampleDos">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingDos">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDos"
                    aria-expanded="false"
                    aria-controls="collapseDos"
                  >
                    Preguntas frecuentes
                  </button>
                </h2>
                <div
                  id="collapseDos"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingDos"
                  data-bs-parent="#accordionExampleDos"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTres">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTres"
                    aria-expanded="false"
                    aria-controls="collapseTres"
                  >
                    Preguntas frecuentes
                  </button>
                </h2>
                <div
                  id="collapseTres"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTres"
                  data-bs-parent="#accordionExampleDos"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
