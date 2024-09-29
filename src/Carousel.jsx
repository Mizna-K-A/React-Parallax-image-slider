import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import custom CSS

function CarouselComponent() {
  return (
    <Carousel controls={true} indicators={true} touch={true}>
      <Carousel.Item style={{height:'80vh'}}>
        <img
          className="d-block w-100"
          src="https://www.holidaymonk.com/wp-content/uploads/2023/05/Travel-Guide-to-Vietnam.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:'80vh'}}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:'80vh'}}>
        <img
          className="d-block w-100"
          src="https://www.therodinhoods.com/wp-content/uploads/2017/04/travel-industry-air.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
