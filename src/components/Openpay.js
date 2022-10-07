import React from "react";

const Openpay = () => {
  return (
    <form action="#" method="POST" id="payment-form">
      <input type="hidden" name="token_id" id="token_id" />
      <input
        type="hidden"
        name="use_card_points"
        id="use_card_points"
        defaultValue="false"
      />
      <div className="pymnt-itm card active">
        <h2>Tarjeta de crédito o débito</h2>
        <div className="pymnt-cntnt">
          <div className="card-expl">
            <div className="credit">
              <h4>Tarjetas de crédito</h4>
            </div>
            <div className="debit">
              <h4>Tarjetas de débito</h4>
            </div>
          </div>
          <div className="sctn-row">
            <div className="sctn-col l">
              <label>Nombre del titular</label>
              <input
                type="text"
                placeholder="Como aparece en la tarjeta"
                autoComplete="off"
                data-openpay-card="holder_name"
              />
            </div>
            <div className="sctn-col">
              <label>Número de tarjeta</label>
              <input
                type="text"
                autoComplete="off"
                data-openpay-card="card_number"
              />
            </div>
          </div>
          <div className="sctn-row">
            <div className="sctn-col l">
              <label>Fecha de expiración</label>
              <div className="sctn-col half l">
                <input
                  type="text"
                  placeholder="Mes"
                  data-openpay-card="expiration_month"
                />
              </div>
              <div className="sctn-col half l">
                <input
                  type="text"
                  placeholder="Año"
                  data-openpay-card="expiration_year"
                />
              </div>
            </div>
            <div className="sctn-col cvv">
              <label>Código de seguridad</label>
              <div className="sctn-col half l">
                <input
                  type="text"
                  placeholder="3 dígitos"
                  autoComplete="off"
                  data-openpay-card="cvv2"
                />
              </div>
            </div>
          </div>
          <div className="openpay">
            <div className="logo">Transacciones realizadas vía:</div>
            <div className="shield">
              Tus pagos se realizan de forma segura con encriptación de 256 bits
            </div>
          </div>
          <div className="sctn-row">
            <a className="button rght" id="pay-button">
              Pagar
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Openpay;
