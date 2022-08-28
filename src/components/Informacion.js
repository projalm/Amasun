import React from "react";

const Informacion = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Información para COVID-19</h5>
            <p>
              Informate mas sobre nuestro Protocolos COVID-19 donde encontraras
              todo lo necesario para viajar con seguridad en nuestros tours y
              paquetes
            </p>
          </div>
          <div className="col">
            <div class="accordion" id="accordionExampleDos">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingDos">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDos"
                    aria-expanded="false"
                    aria-controls="collapseDos"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseDos"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingDos"
                  data-bs-parent="#accordionExampleDos"
                >
                  <div class="accordion-body">
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
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTres">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTres"
                    aria-expanded="false"
                    aria-controls="collapseTres"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseTres"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTres"
                  data-bs-parent="#accordionExampleDos"
                >
                  <div class="accordion-body">
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
