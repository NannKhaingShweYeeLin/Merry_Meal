import React, { Component } from 'react';
import '../login/Login.css';

import { login } from '../../service/merrymeals';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../images/fb-logo.png';
import googleLogo from '../../images/google-logo.png';
import Alert from 'react-s-alert';

export const API_BASE_URL = 'http://localhost:8080';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const ACCESS_TOKEN = 'accessToken';

class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error,
                    {timeout: 5000
                    });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 7000);
        }
    }
    
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/profile",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to Merry Meals</h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <br></br> 
                    <LoginForm {...this.props} />
                    <br></br> 
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
                <br></br> 
                <br></br> 
                <br></br> 
            </div>
        );
    }
}

// Social Login Form
class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Log in with Google</a>
                    <br></br> 
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
            </div>
        );
    }
}

// Local LoginForm
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            failedAttempts: 0, // Track failed login attempts
            isFormLocked: false, // Track form lock status
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Function to lock the form for a specified duration
    lockForm = (duration) => {
        this.setState({ isFormLocked: true });
        setTimeout(() => {
            this.setState({ isFormLocked: false, failedAttempts: 0 });
        }, duration);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.isFormLocked) {
            // Do nothing if the form is locked
            return;
        }

        const loginRequest = Object.assign({}, this.state);
        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("You're successfully logged in!");
                this.props.history.push("/login");
                window.location.reload();
            })
            .catch(error => {
                this.setState(prevState => ({
                    failedAttempts: prevState.failedAttempts + 1,
                }));

                if (this.state.failedAttempts === 3) {
                    // Lock the form for 10 seconds after 3 failed attempts
                    this.lockForm(10000);
                }

                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <br></br>
                <div className="form-item">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <br></br>
                <div className="form-item">
                    <button
                        type="submit"
                        className="btn btn-block btn-primary"
                        disabled={this.state.isFormLocked}
                    >
                        {this.state.isFormLocked ? 'Form Locked' : 'Login'}
                    </button>
                </div>
            </form>
        );
    }
}

export default Login;
