import React from 'react'
import "./Contact.css";


export default function Contact() {
    return (
        <div className="contacto">
            <h3>Contacto</h3>
            <div>
                <ul>
                    <div>
                        <img src="/images/location.png" alt="maps" width="100" />
                        <h5>C/ ESPOZ Y MINA 47 <br />(SANTA POLA - ALICANTE)</h5>
                    </div>

                    <div>
                        <img src="/images/telefono.png" alt="teléfono" width="100" />
                        <h5>623-39-27-68</h5>
                    </div>

                    <div>
                        <img src="/images/mail.png" alt="mail" width="100" />
                        <h5>CLYNICADYNAMIC@GMAIL.COM</h5>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/clinicadynamic/"><img src="/images/insta.png" alt="insta" width="100" /></a>
                        <a href="https://www.instagram.com/clinicadynamic/"><h5>@CLYNICADYNAMIC</h5></a>
                    </div>
                </ul>
                <p className="hidden">También pudes contactarnos a través del botón de WhatsApp que puedes encontrar bajo a la derecha.<br></br>
                No dudes en informarte o preguntar cualquier duda.<br></br>Estamos deseando conocerte</p>
            </div>
        </div>
    )
}
