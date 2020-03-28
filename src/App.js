import React, { useState } from "react";
import "./App.css";
import { useStaticKit } from '@statickit/react';
import { sendContactInformation } from '@statickit/functions';
import { StaticKitProvider } from "@statickit/react";
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
  Col
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function Header() {
  return (
    <Navbar className="color-nav" variant="light" expand="lg">
      <Navbar.Brand href="home" ><img src="../favicon-32x32.png" />
Jake's Welding Co.</Navbar.Brand>
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
        
        <Image src="..\-3962722664213478831.jpg" fluid className="mb-3" />
      </Jumbotron>

      <Alert variant="success">
        <Alert.Heading>Hi, nice to see you</Alert.Heading>
        <p>
          Jake is originally from Scottsdale, Arizona. He moved to
          Eagle,Colorado in 2018. After working in the hotel maintainence
          industry, he shifted his career into welding. He studied welding at
          Colorado Mountain College in Leadville, Colorado where he received
          high marks. He is currently training to earn a master welder
          certification. Jake loves to be outdoors, hiking, fishing, and off roading
          on the weekends.
        </p>
        <hr />
        <p className="mb-0">
           Reach out to Jake for any welding needs.
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
        <img className="d-block w-100" src="..\4.jpg" alt="P" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="..\5.jpg" alt="i" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="..\6.jpg" alt="g" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="..\7.jpg" alt="ng"/>
      </Carousel.Item>
    </Carousel>
  );
}
function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        Reach out today via the contact page.
      </div>
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
  const client = useStaticKit()  
  const handleSubmit = async(event) => {
    event.preventDefault();
    sendContactInformation(client, {
      subject: "Contact from Jake's App",
      fields: {body: ` You have been contacted by ${first} ${last}. Their email address is ${email} and their phone number is ${phone}}`}
    });
  }
  

  return (
    <>
      <Jumbotron>
        <h1>Contact Jake</h1>
        <p>Available for jobs across Western Colorado</p>
        <Image src="..\Capture.PNG" fluid className="mb-3" />
      </Jumbotron>

      <h1> To contact Jake, please enter your information below and he will contact you as soon as possible.
</h1>

    <Form onSubmit= {handleSubmit}>
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
                <Button type = "submit"
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


    

function App(){
return (
     <>
     <StaticKitProvider site="6651379c3e06">
      
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
            <ContactForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
    </StaticKitProvider>
   </>  
  );
}

export default App;
