import React, { Component } from "react";
import img1 from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';

import "./HeaderComponent.css";

export class HeaderComponent extends Component {
  render() {
    return (
      <section class="ftco-section ">
        
        <nav class="navbar bg-body- ">
        { this.props.authenticated ? (
  <div class="container-fluid">
  <img class="lg" src={img1} alt="..." />
  <span class="me-auto text1">“Enjoy your delicious meal with a side of smiles”</span>

  <div class="d-flex" >
  <Button href="/profile" className="btn btn-secondary me-2" id="p" >P</Button> 

 <Button onClick={this.props.onLogout} className="btn btn-danger me-2"  >LOGOUT</Button> 

      <Button href="https://buy.stripe.com/test_6oE022fiM0Yf4h2eUU" className="btn btn-warning">Donate</Button> 
    </div>
  </div>
        ):(
<div class="container-fluid">
  <img class="lg" src={img1} alt="..." />
  <span class="me-auto text1">“Enjoy your delicious meal with a side of smiles”</span>

  <div class="d-flex" >
  
    
 <Button href="/login" className="btn btn-info me-2"  >Login</Button> 

      <Button href="https://buy.stripe.com/test_6oE022fiM0Yf4h2eUU"  className="btn btn-warning">Donate</Button> 
    </div>
  </div>
        )}
</nav>

        <Navbar collapseOnSelect expand="lg" id="nav2" className="sticky-top "  >
          <Container>
            <Row className="justify-content-md-center">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ">
                  <Col xs lg="4">
                    <Nav.Link id="h" href="/">HOME</Nav.Link>
                  </Col>

                  <Col xs lg="4">
                    <NavDropdown
                      title="GET MEALS"
                      id="collapsible-nav-dropdown"
                      className="h"
                      href="/getmeal">
                      
                      <NavDropdown.Item   href="/getmeal">
                        GET MEALS
                      </NavDropdown.Item>
                      <NavDropdown.Item  href="/ordermeal">
                        ORDER MEALS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/orderadult">
                        MEALS FOR ORDER ADULTS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/caregiver">
                        FOR CARE GIVERS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/aboutmeal">
                        ABOUT MEALS
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Col>

                  <Col xs lg="4">
                    <NavDropdown
                      title="GET INVOLVED"
                      href="/about"
                      id="collapsible-nav-dropdown"
                    >
                       <NavDropdown.Item href="/getinvolve">
                        GET INVOLVED 
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/delivery">
                        DELIVERY MEALS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/volunteer">
                        VOLUNTEER
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/involveother">
                        INVOLVED IN OTHER WAY
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Col>

                  <Col xs lg="4">
                    <Nav.Link id="h" href="/about">ABOUT</Nav.Link>
                  </Col>

                  <Col xs lg="4">
                    <Nav.Link id="h" href="/contact">CONTACT</Nav.Link>
                  </Col>
                </Nav>
              </Navbar.Collapse>
            </Row>
          </Container>
        </Navbar>
        <br></br>

        
      </section>
      
    )}};

export default HeaderComponent;