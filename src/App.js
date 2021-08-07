import React, { useState } from "react";
import "./App.css";
import { useForm, ValidationError } from '@formspree/react';
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Card,
  Image,
  Jumbotron,
  CardGroup,
  Carousel,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Header() {
  return (
    <Navbar className="color-nav" variant="light" expand="lg">
      <Navbar.Brand href="home" style = {{fontWeight: "1000"}}>
        <img src="../favicon-32x32.png" />
        Strass Welding
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="work">Work</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
function Home() {
  return (
    <div>
      <Jumbotron>
        <h1 style = {{fontWeight: "1000"}}>Strass Welding</h1>
        <p>
          On time with guaranteed high quality custom metal fabrication with
          fair and clear pricing.{" "}
        </p>
        <Image src="..\20151001_135507.jpg" fluid className="mb-3" />
        <p>
          <Button variant="primary" href="contact">
            Contact for more information
          </Button>
        </p>
      </Jumbotron>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="..\Card1.jpg" />
          <Card.Body>
            <Card.Title>Flexible</Card.Title>
            <Card.Text>Available for work across Western Colorado.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="..\Card2.jpg" />
          <Card.Body>
            <Card.Title>Professional</Card.Title>
            <Card.Text>Strong work ethic. Punctual. Honest</Card.Text>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img variant="top" src="..\Card3.jpg" />
          <Card.Body>
            <Card.Title>Reliable</Card.Title>
            <Card.Text>
              Establish long lasting working relationships. Can provide
              references of previous work.
            </Card.Text>
          </Card.Body>
          
        </Card>
      </CardGroup>
    </div>
  );
}

function Work() {
  return (
    <>
    <Container>
      <Row>
        <Col></Col>
        <Col xs ={6}>
    <Carousel>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src="2.jpg"
      alt="First slide"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src="3.jpg"
      alt="First slide"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src="4.jpg"
      alt="First slide"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src="5.jpg"
      alt="First slide"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src="6.jpg"
      alt="First slide"
      />
      </Carousel.Item>
    </Carousel>
    </Col>
    <Col></Col>
    </Row>
    </Container>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container"></div>
      <p>Strass Welding - (602)695-5460 - P.O. Box 4866 Eagle CO, 81631 - strasswelding@gmail.com </p>  
    </footer>
  );
}
function ContactForm() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isFirstValid, setIsFirstValid] = useState(false);
  const [isLastValid, setIsLastValid] = useState(false);
  const [isAlpha, setIsAlpha] = useState(false);
  const [isNumeric, setIsNumeric] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [state, handleSubmit] = useForm("mwkaryar");
  if (state.succeeded) {
    return <p>We will be in contact soon!</p>;
}
  return (
    <>
      <Carousel>
        <h1>Contact StrassWelding</h1>
        <p>Available for jobs across Western Colorado</p>
        <Image src="..\Capture.PNG" fluid className="mb-3" />
      </Carousel>

      <h1>
        {" "}
        To contact StrassWelding, please enter your information below and he will contact
        you as soon as possible.
      </h1>

      <Form onSubmit={handleSubmit}>
        <Form.Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FormControl
              required
              name="firstname"
              value={first}
              placeholder="First name"
              onChange={event => {
                setFirst(event.target.value);
                setIsFirstValid(event.target.value.length > 0);
                setIsAlpha(event.target.value.search(/[^A-Za-z\s]/) !== -1);
              }}
            />

            <Form.Control.Feedback type="invalid">
              Please enter this information
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FormControl
              required
              name="lastname"
              value={last}
              placeholder="Last name"
              onChange={event => {
                setLast(event.target.value);
                setIsLastValid(event.target.value.length > 0);
                setIsAlpha(event.target.value.search(/[^A-Za-z\s]/) !== -1);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter this information
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FormControl
              required
              name="email"
              placeholder="Email"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
                setIsLastValid(event.target.value.length > 0);
                setIsEmailValid(event.target.value.search(/['@']/) !== -1);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter this information
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FormControl
              required
              name="phone"
              placeholder="Phone number"
              value={phone}
              onChange={event => {
                setPhone(event.target.value);
                setIsLastValid(event.target.value.length > 0);
                setIsNumeric(event.target.value.search(/[^A-Za-z\s]/) === -1);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter this information
            </Form.Control.Feedback>
            <Form.Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Button
                  type="submit"
                  disabled={
                    !isFirstValid +
                    !isLastValid +
                    isAlpha +
                    !isEmailValid +
                    isNumeric
                  }
                >
                  Submit
                </Button>
              </Form.Group>
            </Form.Row>
          </Form.Group>
        </Form.Row>
      </Form>
    </>
  );
}

function App() {
  return (
    <>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/contact">
                <ContactForm />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
    </>
  );
}

export default App;
