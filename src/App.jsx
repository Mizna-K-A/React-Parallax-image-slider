import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { Container, Row, Col, Button, Navbar, Nav, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; // Custom CSS for further styling
import Carousel from "./Carousel";

export default function App() {
  // State to manage modal visibility and the selected destination details
  const [show, setShow] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Data for destinations
  const destinations = [
    {
      id: 1,
      title: "Santorini, Greece",
      image: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_600,h_400,c_fit/ymt-web/2023/01/600x400-Santorini20Greece20Sunset.jpg",
      description: "Experience the beauty of Santorini.",
      details: "Santorini is known for its stunning sunsets, crystal-clear waters, and beautiful architecture. It's a must-visit for anyone who loves nature and history."
    },
    {
      id: 2,
      title: "Kyoto, Japan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoM9GgKX9XNcqqfWMlz7NZqT3QuqeFQzwWQ&s",
      description: "Discover the tradition and beauty of Japan.",
      details: "Kyoto offers centuries-old temples, traditional tea houses, and serene gardens. Explore Japan’s rich culture while taking in the breathtaking views."
    },
    {
      id: 3,
      title: "Maui, Hawaii",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HJQ7MzGcAGFE_wX12810ycmkGtzadMpXTg&s",
      description: "Relax on the beaches of Hawaii.",
      details: "Maui is a tropical paradise offering scenic beaches, volcanic landscapes, and countless water activities like snorkeling and surfing."
    }
  ];

  // Function to handle "Learn More" button click
  const handleLearnMore = (destination) => {
    setSelectedDestination(destination); // Set the selected destination details
    setShow(true); // Show the modal
  };

  // Function to close the modal
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">TravelWithUs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#destinations">Destinations</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Parallax Banner Section */}
      <Parallax
        bgImage="https://m.economictimes.com/thumb/msid-103866158,width-1600,height-900,resizemode-4,imgsize-71822/a-survey-highlights-that-44-per-cent-of-indians-choose-online-travel-agencies-for-bookings.jpg"
        strength={500}
        style={{ height: "800px" }}
      >
        <div className="banner">
          <h1 className="text-white">Explore the World with Us</h1>
          <Button variant="light" size="lg">Book Now</Button>
        </div>
      </Parallax>

      {/* Destination Section */}
      <section id="destinations" className="destinations-section py-5">
        <Container>
          <h2 className="text-center mb-5">Popular Destinations</h2>
          <Row>
            {destinations.map((destination) => (
              <Col md={4} key={destination.id}>
                <div className="card mb-4">
                  <img
                    src={destination.image}
                    className="card-img-top"
                    alt={destination.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{destination.title}</h5>
                    <p className="card-text">{destination.description}</p>
                    <Button
                      variant="primary"
                      onClick={() => handleLearnMore(destination)}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Carousel />

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Contact Us</h2>
          <Row>
            <Col md={6} className="mb-4" style={{ height: "370px" }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Get in Touch</h5>
                  <p className="card-text">Email: info@travelwithus.com</p>
                  <p className="card-text">Phone: +123 456 7890</p>
                  <Button variant="primary">Send Message</Button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="https://img.freepik.com/free-photo/view-travel-items-assortment-still-life_23-2149617645.jpg"
                className="img-fluid"
                alt="Contact Us"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-3">
        <Container>
          <p className="text-center mb-0">© 2023 TravelWithUs. All Rights Reserved.</p>
        </Container>
      </footer>

      {/* Modal for Destination Details */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDestination?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedDestination?.image}
            className="img-fluid mb-3"
            alt={selectedDestination?.title}
          />
          <p>{selectedDestination?.details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
