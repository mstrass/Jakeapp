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
  Col
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="home">Jake's Mountain Welding</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <NavDropdown title="More info" id="basic-nav-dropdown">
            <NavDropdown.Item href="resume">Resume</NavDropdown.Item>
            <NavDropdown.Item href="customers">Customers</NavDropdown.Item>
            <NavDropdown.Item href="contact">
              Contact About Pricing
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
        <h1>Jake's Mountain Welding</h1>
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
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>

      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
function Resume() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          width={1920}
          height={1080}
          alt="1920x1080"
          className="d-block w-100"
          src="..\1.jpg"
          alt="Pipe framing"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={1920}
          height={1080}
          alt="1920x1080"
          className="d-block w-100"
          src="..\2.jpg"
          alt="Boiler Removal"
        />
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

function Contact() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [validated, setValidated] = useState(false);
  const onSubmit = event => {
    event.preventDefault();
    console.log(first, last, email, phone);
  };
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  useEffect(() => console.log({ first, last, email, phone }), [
    first,
    last,
    email,
    phone
  ]);
  return (
    <>
      <Jumbotron>
        <h1>Contact Jake</h1>
        <p>Available for jobs across Western Colorado</p>
        <Image src="..\Capture.PNG" fluid className="mb-3" />
      </Jumbotron>

      <h1>Enter your information below.</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FormControl
              required
              name="firstname"
              value={first}
              placeholder="First name"
              bg="light"
              onChange={event => setFirst(event.target.value)}
            />

            <Form.Control.Feedback>looks good</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </Form>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FormControl
              required
              name="lastname"
              value={last}
              placeholder="Last name"
              onChange={event => setLast(event.target.value)}
            />
            <Form.Control.Feedback>looks good</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </Form>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FormControl
              required
              name="email"
              placeholder="Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <Form.Control.Feedback>looks good</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
      </Form>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <FormControl
              required
              name="phone"
              placeholder="Phone number"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
            <Form.Control.Feedback>looks good</Form.Control.Feedback>
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
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
