import React, { Component } from 'react';

import './Signup.css';
import { Link, Redirect } from 'react-router-dom';
import {signup} from '../../service/merrymeals';
import fbLogo from '../../images/fb-logo.png';
import googleLogo from '../../images/google-logo.png';
import Alert from 'react-s-alert';

export const API_BASE_URL = 'http://localhost:8080';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;


class Signup extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Signup with Merry Meals</h1>
                    <SocialSignup />
                    {/* OR Seperator between Social SignUp and Local SignUp Form */}
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <br></br>
                    <SignupForm {...this.props} />
                    <span className="login-link">Already have an account? <Link to="/login"  >Login!</Link></span>
                </div>
                <br></br>
                <br></br>
                <br></br>
                
            </div>
        );
    }
}

//Social SignUp form 
class SocialSignup extends Component {
    render() {
        return (
            <div className="social-signup">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Sign up with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Sign up with Facebook</a>
            </div>
        );
    }
}

//Local SignUp Form
class SignupForm extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            age:'',
            type:'',
            gender:'',
            address:'',
            userNameError: '',
            passwordError: '',
            showAlert: false,
            selectedOption: null,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        }); 
        
        if (inputName === 'password') {
            if (!inputValue.match(/^(?=.*[0-9])[a-zA-Z0-9#]{6,20}$/)) {
                this.setState({
                    passwordError:
                        'Invalid password format. It should be 6 to 20 characters, contain at least one number, and only contain letters, numbers, and "#" symbols.',
                });
            } else {
                this.setState({
                    passwordError:'',
                });
            }
        }

        if (!this.state.gender) {
            this.showAlert('Please select your gender.');
            return;
          }
      
    }

    handleSubmit(event) {
        event.preventDefault();   

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
        .then(response => {
            Alert.success("You're successfully registered. Please login to continue!");
            this.props.history.push("/login");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
        });
        
    }

    // gender alert start
      showAlert = (message) => {
        this.setState({ showAlert: true, alertMessage: message });
    
        // Automatically hide the alert after a few seconds
        setTimeout(() => {
          this.setState({ showAlert: false });
        }, 3000); // Adjust the timeout as our needed
      };

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="text" name="userName" 
                        className="form-control" placeholder="Name"
                        value={this.state.userName} onChange={this.handleInputChange} required/>
                </div>
                <br></br>
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Email"
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <br></br>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <br></br>

                <div class="mb-4 p-7 rounded-7 text-wrap">
                <select class="form-select" aria-label="Default select Your type" value={this.state.type} onChange={this.handleInputChange} 
                type="text" name="type" required>
                <option value="">Select your type</option>
                <option value="Care-Giver">Care-Giver</option>
                <option value="Partners" >Partners</option>
                <option value="Volunteers">Volunteers</option>
                <option value="Members" >Members</option>
                </select>
                </div>  


                <div class="mb-4 p-7 rounded-7 text-wrap">
                <select class="form-select" aria-label="Select your gender" value={this.state.gender} onChange={this.handleInputChange} 
                type="text" name="gender" required>
                    <option value="">Select Gender</option>
               <option value="Male">Male</option>
                <option value="Female" >Female</option>
                </select>
                </div>

                {this.state.showAlert && (
                    <div className="alert alert-danger">
                    {this.state.alertMessage}
                    </div>
                )}

                <div className="form-item">
                    <input  type="number"  name="age" min="16" max="50" 
                        className="form-control" placeholder="Age Quantity (between 16 and 50)"
                        value={this.state.age} onChange={this.handleInputChange} required/>
                </div>

                <br></br>
                <div className="form-item">
                    <input type="address" name="address" 
                        className="form-control" placeholder="Address"
                        value={this.state.address} onChange={this.handleInputChange} required/>
                </div>
                <br></br>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary" >Sign Up</button>
                </div>
            </form>                    

        );
    }
}
export default Signup;