import React from 'react'
import './About.css';

export default function About() {
    return (
        <div className="list">
            <div >
            <ul>
                <div className="list-about">
                    <img src="/images/informe.png" alt ="fisio" width="100" />
                    <p>Clínica especializada en fisioterapía, rehabilitación y osteopatía</p>
                </div>

                <div className="list-about">
                    <img src="/images/location.png" alt ="fisio" width="100" />
                    <p>Clínica ubicada en el centro de Santa Pola (Alicante)</p>
                </div>

                <div className="list-about">
                    <img src="/images/fisio.png" alt ="fisio" width="100" />
                    <p>Ofrecemos experiencia, un trato y servicio personalizado para cada paciente </p>
                </div>

                <div className="list-about">
                    <img src="/images/libros.png" alt ="fisio" width="100" />
                    <p>En continua formación para dar el mejor tratamiento</p>
                </div>
            </ul>
            </div>
        </div>
    )
}
