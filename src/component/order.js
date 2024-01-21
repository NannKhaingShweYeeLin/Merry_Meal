import React, { Component } from 'react';
import './order.css';
import { Link } from 'react-router-dom';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: '', // Initialize the success message state
      address: '',
      meal: '',
      showAlert: false,
      alertMessage: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const { address } = this.state;

    const myitkyinaLocation = {
      latitude: 25.383,
      longitude: 97.400,
    };

    // Check if the address is within Myitkyina city
    if (this.isWithinMyitkyinaCity(address, myitkyinaLocation)) {
      this.setState({
        successMessage: 'Your order for hot meals is supported and has been placed successfully. Contact will be made soon.',
      });
    } else {
      this.setState({
        successMessage: 'Your order is supported for frozen meals as the address is not within 10 kilometers. Contact will be made soon.',
      });
    }

    // Set a timer to clear the success message after 7 seconds
    setTimeout(() => {
      this.setState({ successMessage: '' });
    }, 7000);
  };

  isWithinMyitkyinaCity = (address, location) => {
    // Here, we can compare the provided address with a list of Myitkyina city addresses 
    //or use a geospatial calculation to determine if it's within the city.
    // For simplicity, we can check if the address contains "Myitkyina" (case-insensitive) as a part of the address.
    const normalizedAddress = address.toLowerCase();
    return normalizedAddress.includes('yangon');
  };

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  };


  

  render() {
    const { successMessage, address } = this.state;

    return (
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Meals on Wheel Order</h1>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <div className="form-item">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <br></br>

            <div class="mb-4 p-7 rounded-7 text-wrap">
            <label ><bold><h4>Select this menu</h4></bold></label>
              <select class="form-select" aria-label="Default select Your type" name="meal" required>
                <option value="1">Vegetable Curry with Basmati Rice</option>
                <option value="2">Creamy Tomato Basil Soup with Grilled Cheese</option>
                <option value="3">Homestyle Beef Stew</option>
                <option value="4">Grilled Chicken Caesar Salad</option>
                <option value="5">Vegetarian Lasagna</option>
                <option value="6">Baked Salmon with Lemon Dill Sauce</option>
                <option value="7">Chicken and Vegetable Stir-Fry</option>
                <option value="8">Spaghetti Bolognese</option>
                <option value="9">Pork Tenderloin with Apple Chutney</option>
              </select>
            </div>
            <br></br>
            <div className="form-item">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone Number"
                required />
            </div>
            <br></br>
            <div className="form-item">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                value={address}
                onChange={this.handleAddressChange}
                required/></div> <br></br>
            <div className="form-item">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
          {/* Display the success message if it exists */}
          {successMessage && <div className="success-alert">{successMessage}</div>}
          <span className="signup-link">
            <Link to="/ordermeal">Back to order!</Link>
          </span>
        </div><br></br> <br></br> <br></br>
      </div> ); }}
export default Order;
