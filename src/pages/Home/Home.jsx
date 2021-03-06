import React from "react";
import "./Home.css";
// import Carousel1 from "../Carousel";
import List from "../List"

export default function Home() {
  return (
    <div className="home">
      {/* <div className="carousel">
        <Carousel1 />
      </div> */}
      <div className="align-query-home">
      <div>
        <img className="logo-home" src="/images/dynamic.png" alt="logo" width="100%"/>
      </div>
      <div className="query-list-home">
      <List />
      </div>
      </div>
      <div className="media-bono-align">
<div className="horario-body">
<h3>HORARIO</h3>
      <div className="horario">
        <img src="/images/calendario.png" alt="horario" width="100" />
        <div>
          <h6>DE LUNES A VIERNES</h6>
          <p>Mañanas 10:00 a 14:00</p>
          <p>Tardes 16:00 a 20:00</p>
          <h6>SABADOS ABIERTOS </h6>
          <h6>BAJO CITA PREVIA</h6>
          <p>Mañana 10:00 a 14:00</p>
        </div>
      </div>
      </div>

<div className="promociones-body">
<h3>PROMOCIONES</h3>
      <div className="bono">
        <h6>BONO DE 5 SESIONES</h6>
      </div>
      <br></br>
      <div className="bono">
        <h6>BONO DE 10 SESIONES</h6>
      </div>
      <div className="bono-text">
        <p>
          LOS BONOS TIENEN UNA CADUCIDAD DE 1 AÑO. LA SESION ES DE
          APROXIMADAMENTE 1 HORA
        </p>
        <h5>Consúltanos para conocer los precios</h5>
      </div>
      </div>
      </div>
    </div>
  );
}
