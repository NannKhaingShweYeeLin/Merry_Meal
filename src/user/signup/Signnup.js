import React, { Component } from 'react'
import './Signup.css';



export class Signnup extends Component {
  render() {
    return (
      <div>
        <div class ="container col-4 register-form mt-4 p-4 mb-4 rounded-4">
        <h5 class="mb-5 mt-3">Meals on Wheel Register </h5>
        <form>
          <div class="mb-3 rounded-4">
              <link to ='' alt='../'><i class="fa-brands fa-google"></i></link> 
            <input type="email" placeholder="Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          <div class="mb-3 rounded-4">
            <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
           <div class="mb-3 rounded-4">
            <input type="email" placeholder="Password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
           <div class="mb-3 rounded-4">
            <input type="email" placeholder="Re-Password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
             <div class="mb-3 rounded-4">
        <select class="form-select" aria-label="Default select example">
        <option selected>Fill your type</option>
        <option value="1">Care-Giver</option>
        <option value="2">Partners</option>
        <option value="3">Volunteers</option>
        <option value="4">Members</option>
        </select>
          </div>     
          <div class="form-item d-flex justify-content-center mt-5 mb-3">
            <button type="submit" class="btn btn-success">Register</button>
          </div>
            {/* <Button variant="success">Success</Button>{ }    */}
</form>
        
     
      {/* <Form.Control size="lg" type="text" placeholder="Login with Google" />
      <br />
      <Form.Control size="lg" type="text" placeholder="Login with Facebook" />
      <br />  */}
      </div>
      </div>
    )
  }
}

export default Signnup
