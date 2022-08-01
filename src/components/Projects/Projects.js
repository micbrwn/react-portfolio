import React from "react";
import { Jumbotron, Carousel, Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


export default function Projects() {
  return (
    <section>
      
      <Jumbotron className="tron">
        <h1>Projects</h1>
        <p>
          Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
          Curabitur
        </p>
      </Jumbotron>
      

      <Container>
        <div className="d-flex justify-content-around">
          <Carousel className="card-carousel position-absolute">

            <Carousel.Item interval={5000}>
              <Card style={{ width: "30rem" }}>
                <Card.Img variant="top" src={require("../../assets/images/weatherdash.png")} />
                <Card.Body>
                  <Card.Title>Weather Dashboard</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex justify-content-center btn">
                    <Button href="https://micbrwn.github.io/Weather-Dashboard/" target="blank" variant="primary">Weather</Button>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <Card style={{ width: "30rem" }}>
                <Card.Img
                  variant="top"
                  src={require('../../assets/images/chirp-mg.png')}/>
                <Card.Body>
                  <Card.Title>Chirp</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex justify-content-center btn">
                    <Button href="https://chirp-oneandonly.herokuapp.com/" target="blank" variant="primary">Chirp</Button>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <Card style={{ width: "30rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../../assets/images/passwordgenerator.png")}/>
                <Card.Body>
                  <Card.Title>Password Generator</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. 
                  </Card.Text>
                  <div className="d-flex justify-content-center btn">
                    <Button href="https://micbrwn.github.io/password-generator/" target="blank" variant="primary">Password</Button>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
              <Card style={{ width: "30rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../../assets/images/cheers.png")}/>
                <Card.Body>
                  <Card.Title>Cheers</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. 
                  </Card.Text>
                  <div className="d-flex justify-content-center btn">
                    <Button href="https://kishanshah98.github.io/Travel-Guide/" target="blank" variant="primary">Cheers</Button>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

          </Carousel>
        </div>
      </Container>

      
    </section>
  );
}
