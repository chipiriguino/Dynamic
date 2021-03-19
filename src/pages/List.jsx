import React from 'react'
import "./List.css"

export default function List() {
    return (
        <div className="list-home">
            <ul>
                <div className="align-list-home">
                <div className="run">
                    <img src="/images/corredora.png" alt="runner" width="80"></img>
                    <h6>F.DEPORTIVA</h6>
                </div>
                
                <div>
                    <img className="hueso-img" src="/images/hueso.png" alt="hueso" width="80"></img>
                    <h6>F.TRAUMATOLOGICA</h6>
                </div>
                </div>
                <div className="align-list-home">
                <div div className="run1">
                    <img className="cerebro" src="/images/cerebro.png" alt="cerebro" width="80"></img>
                    <h6>F.NEUROGOLOGICA</h6>
                </div>

                <div>
                    <img src="/images/puzzle.png" alt="puzzle" width="80"></img>
                    <h6>OSTEOPATIA</h6>
                </div>
                </div>
                <div className="align-list-home">
                <div div className="run">
                    <img className="cerebro" src="/images/circulo.png" alt="circulo" width="80"></img>
                    <h6>REHABILITACION</h6>
                </div>

                <div>
                    <img src="/images/brazo.png" alt="brazo" width="80"></img>
                    <h6>READAPTACION</h6>
                </div>
                </div>
                <div className="align-list-home">
                <div div className="run">
                    <img className="cerebro" src="/images/chincheta.png" alt="chincheta" width="80"></img>
                    <h6>PUNCION SECA</h6>
                </div>

                <div>
                    <img className="manos" src="/images/manos.png" alt="manos" width="80"></img>
                    <h6>TERAPIA MANUAL</h6>
                </div>
                </div>
                <div>
                    <img className="cerebro" src="/images/rayo.png" alt="rayo" width="80"></img>
                    <h6>ELECTROTERAPIA</h6>
                </div>

            </ul>
        </div>
    )
}
