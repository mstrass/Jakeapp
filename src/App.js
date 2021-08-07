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
        <img src="../logo.png" style = {{width: "80px", height: "60px"}} />
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
      <Jumbotron style = {{paddingLeft: "100px", paddingRight: "100px"}}>
        <h1 style = {{fontWeight: "1000"}}><Image src="..\logo.png" style = {{width: "120px", height: "80px"}}/> Strass Welding </h1>
        <p>
          On time with guaranteed high quality custom metal fabrication with
          fair and clear pricing.{" "}
        </p>
        <Image src="..\20151001_135507.jpg" fluid className="mb-3" />
        
      </Jumbotron>
      <div style={{padding:"20px"}}>
      <div style={{padding:"20px", backgroundColor:"lightgray", width:"50%", margin: "auto"}}>
      <h2 style={{padding:"10px"}}>⭐ 85 % business from referrals ⭐</h2>
      <h3 style={{padding:"10px"}}>⭐Positive reviews!⭐</h3>
      <p style={{padding:"10px"}}>⭐Our clients include homeowners, interior designers, builders
and architects for their custom fabrication for homes and businesses.⭐</p>
</div>
</div>
      <CardGroup style = {{paddingLeft: "100px", paddingRight: "100px"}}>
        <Card>
          <Card.Img variant="top" src="..\Card1.jpg" />
          <Card.Body>
            <Card.Title>Flexible</Card.Title>
            <Card.Text>Available for work across Western Colorado.</Card.Text>
            <div style = {{padding:"10px"}}>
      <Button variant="primary" href="work">
            More Work
          </Button>
          </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="..\Card2.jpg" />
          <Card.Body>
            <Card.Title>Professional</Card.Title>
            <Card.Text>Strong work ethic. Punctual. Honest</Card.Text>
            <div style = {{padding:"10px"}}>
      <Button variant="primary" href="work">
      More Work
          </Button>
          </div>
          </Card.Body>
          
        </Card>
        <Card>
          <Card.Img variant="top" src="..\Card3.jpg" />
          <Card.Body>
            <Card.Title>Reliable</Card.Title>
            <Card.Text>
              Establish long lasting working relationships.
            </Card.Text>
            <div style = {{padding:"10px"}}>
      <Button variant="primary" href="work">
      More Work
          </Button>
          </div>
          </Card.Body>
          
        </Card>
      </CardGroup>
      <div style = {{padding:"20px"}}>
      <Button variant="primary" href="contact">
            Contact for more information
          </Button>
          </div>
    </div>
  );
}

function Work() {
  return (
    <>
    
<div class="pa-gallery-player-widget" style={{width:"100%", height:"800px", display:"none"}}
  data-link="https://photos.app.goo.gl/L7NzW3JiJPNvpDb39"
  data-title="welding projects"
  data-description="34 new photos added to shared album"
  data-delay="3">
  <object data="https://lh3.googleusercontent.com/6J_6-O8n__hP12SC6WGKqSV9_1_wov569IldZGixmk8hoQ0S3ks0-LLNyGyBUOIbqQzOWCnvvLsYNnZ4aLPd_yXF7mJECONJ0ZP5t0ucFeQ5w40AfFtLhnfaVk1gVVlpPIASpr4fiw=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/ktJk6D-odFK91u9vxurA3VbeziZhxe_j5W2Ji7Qeb8D-STooI5Zi1rpsfO6pkDLxu_a8Vh3xRBuQHjQpk43DydL4vtb-nQuWMSu31uAavTQmldopH_o5jEb8IzDFBAMiEGBHO59Yvg=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/IQPupwEYJSa_R5k_1GVHtJqGR7W7nR7b0sdLC3IMPfQDjLXyl79MtBAizYApKo-wIsIZmzd9MFGRndOp6jsavkcusVnAqIGZHjvefiK__XAuzv6AGk7REotOdpGx9SA1ZLlNF3t60g=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/0q0RebhiKaK4t0aWxGTp8vbVBeBGP5ZgPB2XrpNRIVbMIX6VzS38wTGwwjNfVBEPwPxMQ3490k3sxR9_dv5XARTHCtM9LYyYZJ53jXUPQ26fFqy3OcCC4Xz8NAl2GchCvA7Zy5gFiw=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/csR5qKK2Y-iC0N53KvBwbpEuSW4IztGSqelwFEScLV3GsI0YcRI_sJ7y5eNfZbfCVKg47TGztCLD-e17FhoACSyXHaHhCXTssI_GG-oT_4ICv0cUuR-xJRZC3pUWXu1cj8u3-aNeDg=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/H8AaSGm_GRaLQCFWI2_JrUdhx9hr8EiCDymqtCgQKvjLQRY8Dsi7TgrXBW0aPBBQiEggmb9MP49VsDmuKmLbO5rQQPADrx1KNni3GgNbFESi6iJDLKqJ7qYVX1MSuuHQSvnpeHiL7A=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/sAwBZY6Y2-W4J0ZKig7gHoDFXyxfliLuqzlrOE5pchSOKRT5mJDDhTONRvbRjz7N4soYUZVUEdG_fm-pHQZSDA7xXEKKvHiNu6C9wPgYtOvJQXi6O2AG5H-0KWVmrycKeNgY0AP4sg=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/_V6XKpd26IEwS3S-2Y_aUPrZifkJUeC2PvK96rirJrkzh_Dp_ctj-zgtkhi9_zHFnE4C5HT2PJAG9F0cuUyToTK9ym8OfGrMfL_u3lSlrOcmqVs8NbQj33O4Ko0H8bX4GHQPNqSZFg=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/4z5jR0Uh09lg4nGVt1TyQ0OZ_7Ymz8hEM4j4Ua-t7JhftzX8qKOLHXPhfSPxI7MLCIL7pGwa-Zl0EyLrj4KPSeG32Ef1Di_Lf0UHbDYImM1FLfM7SVdG_EJO6IXAQVGbIQB7S8r-Aw=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/6dwt64ODYx6CfITaPmICo3fpWBrKEPK60_o3JRK5dQgoXYwY5iqG9AEZIZO0G98AQ5Wne8-TWmqkyEwpa2AWl5sBp2sPS2K9SXI-OlzhH0IDOp0uhFmZspiRsDU26PU9uDFu5ZWj4A=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/lN-OJnxHhx4UbzGF2mm0ENeLje67XQmGIO1E0b26jk-S7VBG6toevXQ5TJBZMGdxlaIBT6k2JoD92LmPXYIdUciJR1VsHMhbM-_thuwW2fGB254aphU17T_pVPXqo9svY2l6YTlvjQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/2pp5iduGhG43xprlnN-hJCkkH3n2LTK6V98dZsRf0317yAKKt-V4o7GJeuX7Po164FfZzOFBHtw7tcYfU-4dsVmDVbXE-t06HB2rKfXixW7gYWkn3qTE1p1XIPuEAXwWUd0GEYQLBQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/qm8xdtL3KL5ghm6TfSPVSAQZKEjltefzY64I1tTZaa9H1Z0GWB_HkRextNoDvzu560MkisMz-INmt9-SOQAQ8hLkUGgVD9v2xo6YRhZZIkV6bjFvS6Tr6phfulJ2TA_PfXvTDXQx6g=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/o-H-0a_Dzdck4bmRYIGc7m0IhyAOPbW_CEsvaCSe3XHGrHuXs5-gpb8SNhHxJNm-u_vIYXGfYPBl3kv-6mOkQYkSszoH6hM18L61luFzcqyImOzRzCLgdpnLL0NblZxuPWcHlMnLFA=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/pKTMa7dJ6j80V0E0lc-g9mlv2DPgmLJTjbWG99W44tTY3ODNGDZyo8tfyckw94JH1cDAbdtbmitCxgyQqcg99NrVu2YBZ2DyLe45QeMeyknpXIc9t_W3-3qjajjT3vBKPCFLX1UP7A=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/x7WtnnCHKmtC7bxSXTbMxQ5_l_be3-E4nMqla7IZqfnTsxWFB59GEm266jA7L_VQ13skC7Vv2yYMtEjUJ3780KgMEV6d7tRRwa_XXWGmSWle1HGYVqwi8a9RV4-zPio-NSH09oQbqg=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/7vaKa_qqLkemCAPzJH4BRKEJDEe2ROtxwqGsN5sCTQsKtFKZomOoqAR9cxVNkgNUp1PK2_GuBJSQ8U5Vqj5rxF5IHVz0k_sdWk91c7HWXjy01sah2MaGNG37le6II-NXhadjh_s_DQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/xKAd4wGydmw8tgMFmVaLt_GMU15Lgw5xW-lCGDNnu6aBgXt-MqsfNdtQMCN7c_2ZKLrkIp5AcvLwNTtGAfelAYS4V1w9E6kYUMu7GucmnC2HTrZJoQ-Z5usnXR8LBmemV6kya667hA=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/YeBYmBM3o-HKzxsbL1NV1lZwOr-uiSBg8_0-ltze1rf2kbvoSNKHvPxAdxe59G5ZCTjKKUBk-mGotyMJ_Nv6p02nhCVQk-KCJN5oictCxg4uM9DJ7vjYKhtdxuE7cGo1GiMGoyZxkw=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/86REHuZgU9de5AU2G2e2JTHaQhPecKS1qHgDD_mFkRJkUmM2xIHUzztj3X3vy6jxJDLDsiHAOzBDUP_bzRaMneQXmcVFkKVA6meS4BKoR0LJypqPvepSAbSCCCJ4yJu-L5T46qrwmw=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/I7FkQLBtqUpoIupNcCfMJPBi_4TKomBDMMtimzC30xPo8_TPaY5QClHr8uBFMm7Nlae1oaodtGq-0RmMFgBR-URSBQyaLxxB2L2SHhU0QuXdP76k7Im2RO7_bz0CgSdxb1gT-xsGEw=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/C7EDsUPmdnKeQJsYLYCRP63y5SOK4k0Fsco3g4RrgWQ05N5ehga3V0jBaZ-U8FUA7dWtaREa1swMc0e9aO56VQRqUQpN9JQFNwbbt1YtLL2U__BGs4Ve8dDomM3oLCoqH0bMFl7IUg=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/UNmNwJCatKIITOH031Sn7D5hdbAol1iHIsuxWpz4V_eLI5VR1neznMwrYZIPlp8TxsF8RAgSwkNQbKjOI0Kf1xQC8Z1iAbQYIUOgJFlydS1sk_ED3J6-hYNG4Tpu1EnEbiIJuV2ukA=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/nlW9huo2cpFVWJXKAKsv4h0V8Dy-Dlow-04cAIrC9OV9wY72cvNIkvzqPclj_G4PYPu8ruImJehb3eImBfljr4oOadWVvseIOfofYuDFYIXfhETgn2t8mwWzo1ypYgooi6kKAQVMFQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/Tv3EVaBUwdSqO5Gt1w1lZ0JOJjpkR73Fwf04Fqbrfiyu-yVVyMyCyFlLyTj9CxrpdSM9l4udQuC_2nfmbnSnbR5KrpuDHaxAvmQwYgx6H2K7dxjygy9mbsljq03R8xdh2qHKwOe1Ng=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/lmbypHWRKqgWCeKNQr06cZKGV217YFqxiLjf811qa-wXU0VJkW-SxE7-6_HjP1TAb2VRjfseh1pf3RiYBorn969IxV1-zUrM01PVkf4hDYxW5BH0LNl4uamAihInKhHkLQMO39NFkQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/CAlhNQ39jJY3iS3k_0Dmx9k5YOJB7kUHRhxEZdp527QmrQqTvMWwqaB0pAIdC0TNCDXu7ieBE3oybvMDI8N1QfuGiqV3JHD_tsH7aPeCWzxM7TcGmldN0Kkre8zI2RTZM40aGWmxIw=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/1_Kg0lWafNHp45r9MXd9n_0QlQYRiHcU9dN4i0eDX_QjiUzI5eKYfELsQPIsmkalLdUd7tJaUEcFxiiCWIxa2WR-CWdXMfKjq06xuAjAxHJ4URcqXJnJsmakct0-rMV3Hnu8SJv93A=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/ZPrXxYRPHsGfWGxO849D-iwzRS6Qe26_E7D88YpuPS35K7eAUrTkTR0A54brgZ0S-1KFE0CnsGxPEncTx0OzmiXvvH-za7F48aRStKxFJoFb6VwzvLrtmSSqnUkGUGPQ2_Q3j1Zybw=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/U37oal7APsjWLZ7yNJNTYTKTl_Y9h3mSAYbQ8P884BSoErgzAdi6LPr30TYkSetKbAdOP7AF9gxzWb_uV_xgyLjo6_w6RF_qltJxn50BzCfqiVR5T2KR2dTvmpphut-EPNOE4xKVxQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/8wA6kZZ1oqizvwoIXJr21p7zv_kGjXH8Lyq6LOaI5bpQ0wUYGboCrBOakMy9waVRelWcVdrfWIh1aCzyePUFdB0WdTLYBaRxyWu5RsfDPYCdA_--k12eS6Npi4JuNAqV7sP6pujyRA=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/-HDKGdk25ogi1ziEKXSVvERSat6eL13ZK-JAvmOEEsYfDhD89MdHPSR9KxcjovpiWP7vuxZFewzKSZMNtMg57LA9_tsFcIqxYKodDhurbnnbqaJ_zQOFrZEvnQB1KmOOmbENuiPp8g=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/8M6S1eXOwOWd2AutxfSApF6SEEoPeSBVV1jRZnpMayAgCI8FYtdWUO9IEhBNvZwJ1umrLfc2cG7c0O5uCxOe9SaBUV67G-_VCSThwdYKTJaxPDP7EkLK0KCU8cFWdlwelVUTzEpWHQ=w1920-h1080"></object>
  <object data="https://lh3.googleusercontent.com/q4HBtCspPyS2x4ONt8X0CynGxop6pNJDneHx-ndPf5UXhWNVW9RLiC7-Kz7yxnH_lFDF86OecR8Gut0Qy22rUtNpZkZtOodxarbYkhBj_Aw7QX9WSshmFxSjVegZoAn9hfodckSYiw=w1920-h1080"></object>
</div>

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
  const [comment, setComment] = useState("")
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
    <h1>Contact Strass Welding</h1>
    <Container>
      <Row>
        <Col>
      <Carousel>
        <p>Available for jobs across Western Colorado</p>
        <Image src="..\Capture.PNG" fluid className="mb-3" />
      </Carousel>
      </Col>
      <Col>
      <h3 style={{paddingTop: "150px"}}>
        {" "}
        To contact Strass Welding, please enter your information below and he will contact
        you as soon as possible.
      </h3>
      </Col>
      </Row>
      </Container>

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
            </Form.Row>
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
              name="comment"
              placeholder="Please leave a brief overview of your request"
              value={comment}
              onChange={event => {
                setComment(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter this information
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row style = {{
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
