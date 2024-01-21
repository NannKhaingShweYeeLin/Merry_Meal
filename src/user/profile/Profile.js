import React, { Component } from 'react';
import './Profile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.userName}/>
                                ) : (
                                    <div className="text-avatar">
                                     <span>{this.props.currentUser.userName && this.props.currentUser.userName[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <br></br>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.userName}</h2>
                           
                        </div>
                        <br></br>
        <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="1" >
          Email:
        </Col>
        <Col md="auto">{this.props.currentUser.email}</Col>
        
      </Row>
      <br></br>
      <br></br>
      <Row className="justify-content-md-center">
        <Col xs lg="1" >
          Address:
        </Col>
        <Col md="auto">{this.props.currentUser.address}</Col>
      </Row>
      
      <br></br>
      <br></br>
      <Row className="justify-content-md-center">
        <Col xs lg="1" >
          Age:    
        </Col>
        <Col md="auto">{this.props.currentUser.age}</Col>
      </Row>
      <br></br>
      <br></br>
      <Row className="justify-content-md-center">
        <Col xs lg="1" >
          Gender:
        </Col>
        <Col md="auto">{this.props.currentUser.gender}</Col>
      </Row>
      <br></br>
      <br></br>
      <Row className="justify-content-md-center">
        <Col xs lg="1" >
          Role:
        </Col>
        <Col md="auto">{this.props.currentUser.type}</Col>
      </Row>
      </Container>  </div> </div>    <br></br>     <br></br>      <br></br>   <br></br>   </div>   ); }}
export default Profile