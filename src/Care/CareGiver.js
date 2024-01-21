import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../Care/CareComponent.css";
import caregiver from "../images/caregiver.jpg";
export class CareGiver extends Component {
  render() {
    return (
      <div class="care">
        <div class="container-fluid">
          <h2 class="mt-5 mb-3 text-primary">About Care Giver</h2>
          <p>
            At MerryMeals, we understand the importance of providing caregivers
            with the support they need. If you're a caregiver looking for
            assistance and respite, our services are here to help. We offer
            convenient and nutritious meal options, allowing you to focus on
            providing care and support to your loved one without the added
            burden of meal preparation. Join MerryMeals to find the support you
            need in your caregiving role.
          </p>
        </div>

        <div class="container">
          <h2 class="FAQ-care mt-5 mb-4 text-primary">FAQ For Care Givers</h2>
          <p>
            <h5 class="text-info">
              How can MerryMeals assist caregivers in their role?
            </h5>
            MerryMeals understands that caregiving can be demanding. We offer
            caregiver-friendly meal options, saving you the time and effort of
            meal preparation. Our goal is to support caregivers in providing
            love and care to their loved ones without the added stress of
            cooking.
          </p>
          <p>
            <h5 class="text-info">
              Are there specific meal options for caregivers to choose from?
            </h5>
            Yes, we provide a selection of caregiver-friendly meal options
            designed for convenience and nutrition. These options are created
            with the needs of both the caregiver and the care recipient in mind,
            allowing you to focus on your caregiving responsibilities.
          </p>
          <p>
            <h5 class="text-info">
              {" "}
              Can caregivers also participate in volunteer activities at
              MerryMeals?
            </h5>
            Absolutely! Caregivers are welcome to join our team of volunteers if
            they wish to get involved. We offer various volunteer opportunities,
            so if you want to contribute beyond meal delivery, there are roles
            that may align with your interests and schedule.
          </p>
          <p>
            <h5 class="text-info">
              How can caregivers ensure the meals meet the dietary requirements
              of their loved ones?
            </h5>
            At MerryMeals, we prioritize tailoring meals to individual dietary
            needs. When you sign up for our services, you can discuss specific
            dietary requirements with our team, ensuring that the meals we
            deliver meet the specific needs of your loved one.
          </p>
        </div>

        <div class="card mb-5 offer-section mt-5  bg-light border border-0">
          <div class="row g-0 m-3">
            <div class="col-md-5">
              <img src={caregiver} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-7 ">
              <div class="card-body">
                <p class="card-text">
                  We're here to support you in your caregiving journey. If you
                  have any questions or need further assistance, please feel
                  free to reach out to us through our contact information. Thank
                  you for considering MerryMeals as a partner in your caregiving
                  role.
                </p>
                <div class="d-flex justify-content-center order-btn">
                  <Link to="/register" class="btn btn-info">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CareGiver;
