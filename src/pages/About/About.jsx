import React from 'react'
import './About.css';

export default function About() {
    return (
        <div className="list">
            <h3>SOBRE NOSOTROS</h3>
            <ul>
                <div className="list-about">
                    <img src="/images/informe.png" alt ="fisio" width="100" />
                    <h5>Clínica especializada en fisioterapía, rehabilitación y osteopatía</h5>
                </div>

                <div className="list-about">
                    <img src="/images/location.png" alt ="fisio" width="100" />
                    <h5>Clínica en el centro de Santa Pola (Alicante)</h5>
                </div>

                <div className="list-about">
                    <img src="/images/fisio.png" alt ="fisio" width="100" />
                    <h5>Ofrecemos experiencia, un trato y servicio personalizado para cada paciente </h5>
                </div>

                <div className="list-about">
                    <img src="/images/libros.png" alt ="fisio" width="100" />
                    <h5>En continua formación para dar el mejor tratamiento a nuestros pacientes</h5>
                </div>
            </ul>
        </div>
    )
}
