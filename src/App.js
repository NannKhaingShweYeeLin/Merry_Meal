import React, { Component } from "react";
import {  Route, Switch } from "react-router-dom";
import { getCurrentUser } from './service/merrymeals';
import HomeComponent from "./component/HomeComponent";
import AboutUsComponent from "./component/AboutUsComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import Login from "./user/login/Login";
import Order from "./component/order";
import Signup from "./user/signup/Signup";
import ContactUsComponent from "./component/ContactUsComponent";
import GetMeal from "./Meal/GetMeal";
import OrderMeal from "./Meal/OrderMeal";
import CareGiver from "./Care/CareGiver";
import AboutMeal from "./Meal/AboutMeal";
import GetInvolve from "./GetInvolve/GetInvolve";
import Volunteer from "./GetInvolve/Volunteer";
import Delivery from "./GetInvolve/Delivery";
import InvolveOther from "./GetInvolve/InvolveOther";
import OrderAdult from "./Meal/OrderAdult";
import './App.css';
import OAuth2RedirectHandler from './user/oauth2/OAuth2RedirectHandler';
import NotFound from './NotFound';
import LoadingIndicator from './LoadingIndicator';
import PrivateRoute from './PrivateRoute';
import Alert from 'react-s-alert';
import Profile from './user/profile/Profile';
export const ACCESS_TOKEN = 'accessToken';
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: false,
        currentUser: null,
        loading: false
      }
  
      this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
  
    loadCurrentlyLoggedInUser() {
      this.setState({
        loading: true
      });
  
      getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });  
      });    
    }
    handleLogout() {
      localStorage.removeItem(ACCESS_TOKEN);
      this.setState({
        authenticated: false,
        currentUser: null
      });
      Alert.success("You're safely logged out!");
    }
    componentDidMount() {
      this.loadCurrentlyLoggedInUser();
    }
    render() {
      if(this.state.loading) {
        return <LoadingIndicator />
      }   
    return (
      <div className="app"> 
          <HeaderComponent authenticated={this.state.authenticated} onLogout={this.handleLogout}></HeaderComponent>
          <div className="app-body">
          <Switch>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route path="/about" component={AboutUsComponent}></Route>
            <Route path="/contact" component={ContactUsComponent}></Route> 
            <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Profile}></PrivateRoute>
            <Route path="/login" render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/signup" render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
            <Route path="/getmeal" component={GetMeal}></Route>
            <Route path="/ordermeal" component={OrderMeal}></Route>
            <Route path="/caregiver" component={CareGiver}></Route>
            <Route path="/aboutmeal" component={AboutMeal}></Route>
            <Route path="/getinvolve" component={GetInvolve}></Route>
            <Route path="/volunteer" component={Volunteer}></Route>
            <Route path="/delivery" component={Delivery}></Route>
            <Route path="/involveother" component={InvolveOther}></Route>
            <Route path="/orderadult" component={OrderAdult}></Route>
            
            <Route path="/order" component={Order}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          </div>
          <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />

          <FooterComponent></FooterComponent>
        
      </div>
    );
  }
}

export default App;


