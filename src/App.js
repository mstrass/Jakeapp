import React from 'react';
import './App.css';
import {Nav,Navbar,NavDropdown,Form,FormControl,Button,Card,Jumbotron,Image,Carousel,Alert,Row,Col,Container,ListGroup,ListGroupItem,CardGroup,Accordion} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";


function Header(){
  return( 
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
              <NavDropdown.Item href="contact">Contact About Pricing</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>   
  );
}
function Home(){
    return(
      <div>
        <Jumbotron>
            <h1>Jake's Mountain Welding</h1>
            <p>
              Available for jobs across Western Colorado
            </p>
              <Image src="..\20151001_135507.jpg" fluid className = "mb-3"/>
            <p>
              <Button variant="primary" href="about">Learn more</Button>
            </p>
        </Jumbotron>
  
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="..\20160922_141205.jpg" />
          <Card.Body>
            <Card.Title>Flexible</Card.Title>
            <Card.Text>
              Available anywhere on the western slope of Colorado and willing to consider outside travel.
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
            <Card.Text>
              Jake will provide high quality work.{' '}
            </Card.Text>
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
            Jake will provide high quality work. On time. Guaranteed. Clear pricing.


            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    </CardGroup>
    </div>)
}
function About() {
  return(
  <div>
        <Jumbotron>
            <h1>About Jake</h1>
            <p>
              Available for jobs across Western Colorado
            </p>
              <Image src="..\-3962722664213478831.jpg" fluid className = "mb-3"/>
            
        </Jumbotron>
      
          <Alert variant="success">
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
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
       </div> )
}
function Resume() {
  return(
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="..\IMG_20191108_121204.jpg"
        alt="Pipe framing"
      />
      <Carousel.Caption>
        <h3>Pipe Framing</h3>
        <p>High quality pipe welding</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="..\IMG_20191111_151955_1.jpg"
        alt="Boiler Removal"
      />
  
      <Carousel.Caption>
        <h3>Boiler Removal</h3>
        <p>Hotel boiler removal.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="..\russ-ward-3-AYozgadHw-unsplash.jpg"
        alt="Welding man"
      />
  
      <Carousel.Caption>
        <h3>Dude welding</h3>
        <p>Welding a Frame together.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>)
}
function Footer() {
  return(
    <footer className='footer mt-auto py-3 bg-dark text-white'>
        <div className='container'>Reach out today at: 555-555-5555 or via email at jake.strass@gmail.com</div>
      </footer>
  )

}
function Contact() {
  return(null)
}    
       
    
  
  
            
  

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path ="/resume">
              <Resume/>
            </Route>
            <Route path= "/contact">
              <Contact/>
            </Route>
            <Route path= "/">  
              <Home/>
            </Route>

          </Switch>
          <Footer/>  
      </div>
    </Router>
      
        



  );
}



export default App;
