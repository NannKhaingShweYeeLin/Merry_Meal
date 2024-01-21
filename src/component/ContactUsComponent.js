import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component/ContactUsComponent.css";
class ContactUsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      successAlert: false,
      errorAlert: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.name || !this.state.email || !this.state.message) {
      this.showErrorAlert('Please fill in all fields content form.');
    } else {
      this.showSuccessAlert('Form submitted successfully!thanks your notice');
      // You can continue with form submission logic here
    }
  };

  showSuccessAlert = (message) => {
    this.setState({
      successAlert: true,
      errorAlert: false,
      successMessage: message,
    });

    setTimeout(() => {
      this.setState({ successAlert: false, successMessage: '' });
    }, 5000);
  };

  showErrorAlert = (message) => {
    this.setState({
      successAlert: false,
      errorAlert: true,
      errorMessage: message,
    });

    setTimeout(() => {
      this.setState({ errorAlert: false, errorMessage: '' });
    }, 5000);
  };

  render() {


    return (
      <div class="container contactus">
        {/* contact introduction section start */}
        <div class="jumbotron">
          <h1>Contact</h1>
          <p>
            We welcome your inquiries and feedback. If you have questions, want
            to get involved, or need assistance, please don't hesitate to reach
            out. You can email us us during our office hours with MerryMeal,
            infomerrymeal@gmail.com and use the contact form below to send us a
            message. Your input and engagement are essential in helping us bring
            nourishment and warmth to those in need. Thank you for considering
            MerryMeals as a partner in our mission to make a difference in our
            community.
          </p>
        </div>
        {/* contact introduction section end */}

        {/* site map  and contact form section start */}
        <div class="row mb-5">
          <div class="col-6 mt-3 col-sm-6 col-md-6 col-xl-6">
            <h2>Site Map</h2>
            <div class="sitemap mt-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.038876844947!2d103.892378!3d1.3198873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19149fe4a925%3A0x82606eb494fd093c!2sLithan%20Academy!5e0!3m2!1sen!2smm!4v1696482179087!5m2!1sen!2smm"></iframe>
            </div>
          </div>

          <div class=" col-6 col-sm-6 col-md-6 col-xl-6">
            <h1 class="mt-3 mb-3">Contact</h1>
            <Form className="site-contact rounded-3 p-4" onSubmit={this.handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> Name</Form.Label>
                <Form.Control type="text"
              name="name" placeholder="Enter Your Name" value={this.state.name}
              onChange={this.handleInputChange}/>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email"  placeholder="Enter Your Email" value={this.state.email} onChange={this.handleInputChange} />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Send Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" value={this.state.message} onChange={this.handleInputChange}/>
              </Form.Group>
              <div class="contact-btn d-flex justify-content-center mt-3 mb-3">
                <Button variant="warning" type="submit">
                  Send
                </Button>
              </div>
              {this.state.successAlert && (
          <div className="alert alert-success">
            {this.state.successMessage}
          </div>
        )}

        {this.state.errorAlert && (
          <div className="alert alert-danger">
            {this.state.errorMessage}
          </div>
        )}
            </Form>
            
          </div>
        </div>
        {/* site map  and contact form section end  */}

        {/* contact form section end  */}
      </div>
    );
  }
}

export default ContactUsComponent;
