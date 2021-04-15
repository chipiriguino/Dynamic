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

                <div className="list-about query-fisio">
                    <img src="/images/fisio.png" alt ="fisio" width="100" />
                    <h5 className="h5-query">Ofrecemos experiencia, un trato y servicio personalizado para cada paciente </h5>
                </div>

                <div className="list-about">
                    <img src="/images/libros.png" alt ="fisio" width="100" />
                    <h5>En continua formación para dar el mejor tratamiento a nuestros pacientes</h5>
                </div>
            </ul>
            <p className="hidden1">Recuerda que pudes contactarnos a través del botón de WhatsApp que puedes encontrar bajo a la derecha.<br></br>
                No dudes en informarte o preguntar cualquier duda.<br></br>Estamos deseando conocerte</p>
        </div>
    )
}
