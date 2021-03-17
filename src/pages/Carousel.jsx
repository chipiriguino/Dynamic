import React from 'react' 
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';

export default function Carousel1() {
  
    return (
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Captura de pantalla 2021-03-17 a las 11.09.46.png" height="200"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Captura de pantalla 2021-03-17 a las 11.10.37.png" height="200"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3></h3>
      <p></p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/Captura de pantalla 2021-03-17 a las 11.10.19.png" height="200"
      alt="Third slide"/>
      
    <Carousel.Caption>
      {/* <h3></h3>
   <p></p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </div>
    )
}
