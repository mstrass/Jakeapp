import React, { useState, useEffect } from "react";
import "./App.css";

import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  Jumbotron,
  Image,
  Carousel,
  Alert,
  CardGroup,
  Accordion,
  Col,
  Container,
  Row
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StaticKitProvider } from "@statickit/react";
import { useForm, ValidationError } from '@statickit/react';

function Header() {
  return (
    <Navbar className="color-nav" variant="light" expand="lg">
      <Navbar.Brand href="home">Jake's Welding Co.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <NavDropdown title="More info" id="basic-nav-dropdown">
            <NavDropdown.Item href="resume">Resume</NavDropdown.Item>
            <NavDropdown.Item href="contact">
              Contact for Pricing
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
function Home() {
  return (
    <div>
      <Jumbotron>
        <h1>Jake's Welding Co.</h1>
        <p>Available for jobs across Western Colorado</p>
        <Image src="..\20151001_135507.jpg" fluid className="mb-3" />
        <p>
          <Button variant="primary" href="about">
            Learn more
          </Button>
        </p>
      </Jumbotron>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="..\20160922_141205.jpg" />
          <Card.Body>
            <Card.Title>Flexible</Card.Title>
            <Card.Text>
              Available anywhere on the western slope of Colorado and willing to
              consider outside travel.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="..\20160914_154825.jpg" />
          <Card.Body>
            <Card.Title>Professional</Card.Title>
            <Card.Text>Jake will provide high quality work. </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="..\Hanging Lake.jpg" />
          <Card.Body>
            <Card.Title>Reliable</Card.Title>
            <Card.Text>
              Jake will provide high quality work. On time. Guaranteed. Clear
              pricing.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
function About() {
  return (
    <div>
      <Jumbotron>
        <h1>About Jake</h1>
        <p>Available for jobs across Western Colorado</p>
        <Image src="..\-3962722664213478831.jpg" fluid className="mb-3" />
      </Jumbotron>

      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Jake is originally from Scottsdale, Arizona and moved to
          Eagle,Colorado in 2018. After working in the hotel maintainence
          industry, he shifted his career into welding. He studied welding at
          Colorado Mountain College in Leadville, Colorado where he recieved
          high marks. He is currently working on getting a master welder
          certification. He loves to be outdoors fishing and going off roading
          on the weekends.
        </p>
        <hr />
        <p className="mb-0">
          Reach out and meet Jake yourself. Find out how to reach him on the
          contact page.
        </p>
        <Button href="../contact">
          Click here for his contact information
        </Button>
      </Alert>
    </div>
  );
}
function Resume() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="..\1.jpg" alt="Pipe framing" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="..\2.jpg" alt="Boiler Removal" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="..\3.jpg" alt="Welding man" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="..\4.jpg" alt="Pipe framing" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="..\5.jpg" alt="Pipe framing" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="..\6.jpg" alt="Pipe framing" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="..\7.jpg" alt="Pipe framing" />
      </Carousel.Item>
    </Carousel>
  );
}
function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        Reach out today at: 555-555-5555 or via email at jake.strass@gmail.com
      </div>
    </footer>
  );
}
function Contact(props) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isFirstValid, setIsFirstValid] = useState(false);
  const [isLastValid, setIsLastValid] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isAlpha, setIsAlpha] = useState(false);
  const [isNumeric, setIsNumeric] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const handleSubmit = event => {
    const [state, handleSubmit] = useForm("contactForm");
    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }};
  

  return (
    <>
      <Jumbotron>
        <h1>Contact Jake</h1>
        <p>Available for jobs across Western Colorado</p>
        <Image src="..\Capture.PNG" fluid className="mb-3" />
      </Jumbotron>

      <h1>Enter your information below.</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                  disabled={
                    state.submitting+
                    !isFirstValid +
                    !isLastValid +
                    isAlpha +
                    !isEmailValid +
                    isNumeric
                  }
                  onClick={() => alert("Thank you, we will be in contact soon")}
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
function App({ Component, pageProps }) {
  return (
    <Router>
      <div className="App">
        <StaticKitProvider site="6651379c3e06">
          <Component {...pageProps} />
        </StaticKitProvider>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
