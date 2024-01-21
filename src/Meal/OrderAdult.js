import React, { Component } from "react";
import { Link,} from "react-router-dom";
import "../Meal/OrderAdult.css";
import orderadult from "../images/orderadult.jpg";
import meal1 from "../images/omeal1.jpg";
import meal2 from "../images/omeal2.jpg";
import meal3 from "../images/omeal3.jpg";
import meal4 from "../images/meal4.jpg";
import meal5 from "../images/meal5.jpg";
import meal6 from "../images/omeal4.jpg";
import meal7 from "../images/omeal5.jpg";
import meal8 from "../images/meal8.jpg";
import meal9 from "../images/omeal6.jpg";
export class OrderAdult extends Component {
  render() {
    return (
      <div class="order-adult">
        {/* Cover section start */}
        <section class="home" id=" home ">
          <div class="container-cover ">
            <img src={orderadult} class="img-fluid" alt=" " />
          </div>
        </section>

        {/* Cover section end  */}
        <hr class="border border-danger border-3 opacity-75"></hr>

        <div class="ordermeal-text">
          <p>
            Our meals for older adults are designed to prioritize both taste and
            nutrition. We understand the unique dietary requirements of seniors,
            and our experienced chefs craft menus that cater to those needs. Our
            goal is to provide balanced, flavorful meals that promote health and
            well-being. You can trust MerryMeals to deliver the nourishment your
            body deserves while indulging your taste buds.
          </p>
        </div>
        <hr class="border border-danger border-3 opacity-75 mb-5"></hr>
        <div class="container">
          <h2 class="aboutmeal-title mt-3 mb-5">Check Our Meal</h2>
        </div>
        {/* check our meal section start */}
        <div class="container check-meal">
          <div class="row mb-3">
            <div class="col-4">
              <div class="card check-meal">
                <img src={meal1} class="card-img-top" alt="..." />
                <div class="card-body mb-5 oA">
                  <h5 class="card-title">Baked Salmon with Lemon-Dill Sauce</h5>
                  <p class="card-text">
                    A heart-healthy choice featuring tender salmon baked to
                    perfection, served with a zesty lemon-dill sauce, steamed
                    broccoli, and quinoa. This dish provides essential Omega-3
                    fatty acids for brain and heart health.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$4</bold></div>
                  <br></br>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  <div class="d-flex justify-content-center order-btn">
                    <Link to="/order" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal2} class="card-img-top" alt="..." />
                <div class="card-body mb-5 oA">
                  <h5 class="card-title">Chicken and Vegetable Stir-Fry</h5>
                  <p class="card-text">
                    A colorful and low-sodium option with bite-sized chicken
                    pieces stir-fried with a variety of fresh, easy-to-chew
                    vegetables. Served over soft rice, it's packed with flavor
                    and nutrition.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$4</bold></div>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <Link to="/order" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <img src={meal3} class="card-img-top" alt="..." />
                <div class="card-body mb-5 oA">
                  <h5 class="card-title">
                    Vegetable Soup with Whole Grain Bread
                  </h5>
                  <p class="card-text">
                    A warm and comforting soup filled with a variety of
                    soft-cooked vegetables in a nourishing broth. Served with
                    whole-grain bread for added fiber, this meal is easy to
                    digest and fulfilling.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$4</bold></div>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <Link to="/order" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-4">
              <div class="card">
                <img src={meal4} class="card-img-top" alt="..." />
                <div class="card-body mb-5 oA">
                  <h5 class="card-title">
                    Spinach and Feta Stuffed Chicken Breast
                  </h5>
                  <p class="card-text">
                    This dish combines lean protein with the goodness of spinach
                    and feta cheese, providing a flavorful and calcium-rich
                    meal. It's served with mashed sweet potatoes for extra
                    nutrition.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$5</bold></div>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <Link to="/order" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal5} class="card-img-top" alt="..." />
                <div class="card-body mb-5 oA">
                  <h5 class="card-title">
                    Egg Salad Sandwich with a Side of Fruit Salad
                  </h5>
                  <p class="card-text">
                    A light and protein-rich choice featuring an egg salad
                    sandwich on soft whole-grain bread. It's complemented by a
                    fresh fruit salad that adds vitamins, fiber, and hydration.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$4</bold></div>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <Link to="/order" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal6} class="card-img-top" alt="..." />
                <div class="card-body mb-5 oA">
                  <h5 class="card-title">
                    Savory Oatmeal with Mushrooms and Herbs
                  </h5>
                  <p class="card-text">
                    A twist on breakfast, this savory oatmeal is seasoned with
                    earthy mushrooms and herbs, making it a comforting and
                    nutritious option. It's soft and easy to chew.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$4</bold></div>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <Link to="/order" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-4">
              <div class="card">
                <img src={meal7} class="card-img-top" alt="..." />
                <div class="card-body mb-5 oA">
                  <h5 class="card-title">Lentil and Vegetable Soup</h5>
                  <p class="card-text">
                    A protein-packed and fiber-rich soup featuring lentils,
                    soft-cooked vegetables, and a blend of spices. It's easy to
                    digest and perfect for a cozy meal.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$4</bold></div>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <Link to="/order" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <img src={meal8} class="card-img-top" alt="..." />
                <div class="card-body mb-5 oA">
                  <h5 class="card-title">
                    Mashed Sweet Potatoes and Baked Chicken Thighs
                  </h5>
                  <p class="card-text">
                    A simple yet satisfying meal with mashed sweet potatoes that
                    are soft and naturally sweet, paired with tender and
                    flavorful baked chicken thighs.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$4</bold></div>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <Link to="/order" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card">
                <img src={meal9} class="card-img-top" alt="..." />
                <div class="card-body mb-5 oA">
                  <h5 class="card-title">Beef and Barley Stew</h5>
                  <p class="card-text">
                    A classic stew featuring tender beef, soft-cooked barley,
                    carrots, and peas in a savory broth. This warm, hearty meal
                    is perfect for older adults and provides ample fiber.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$4</bold></div>
                  <br></br>
                  <div class="d-flex justify-content-center">
                    <Link to="/order" class="check-meal">
                      Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* check our meal section end */}
      </div>
    );
  }
}

export default OrderAdult;
