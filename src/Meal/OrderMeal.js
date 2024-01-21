import React, { Component } from "react";
import orderCover from "../images/order-meal.jpg";
import meal1 from "../images/meal1.jpg";
import meal2 from "../images/meal2.jpg";
import meal3 from "../images/meal3.jpg";
import meal4 from "../images/meal4.jpg";
import meal5 from "../images/meal5.jpg";
import meal6 from "../images/meal6.jpg";
import meal7 from "../images/meal7.jpg";
import meal8 from "../images/meal8.jpg";
import meal9 from "../images/meal9.jpg";
import { Link } from "react-router-dom";
import "../Meal/OrderMeal.css";
export class OrderMeal extends Component {
  render() {
    return (
      <div class="order-meal-home">
        {/* Cover section start */}
        <section class="home" id=" home ">
          <div class="container-cover ">
            <img src={orderCover} class="img-fluid" alt=" " />
          </div>
        </section>

        {/* Cover section end  */}

        <hr class="border border-danger border-3 opacity-75"></hr>
        <div class="ordermeal-text">
          <p>
            MerryMeals offers a range of meal options tailored to meet the
            diverse needs of our clients. Whether you're an older adult seeking
            nutritious and delicious meals, a caregiver looking to provide the
            best for your loved one, or simply looking for a convenient way to
            enjoy freshly prepared dishes, we have you covered.
          </p>
        </div>
        <hr class="border border-danger border-3 opacity-75 mb-5"></hr>
        <div class="container">
          <h2 class="aboutmeal-title mt-3 mb-5">Check Our Meal</h2>
        </div>
        {/* check our meal section start */}
        <div class="container  check-meal">
          <div class="row mb-3">
            <div class="col-4 ">
              <div class="card w-1 check-meal">
                <img src={meal1} class="card-img-top" alt="..." />
                <div class="card-body mb-5 omeal" >
                  <h5 class="card-title">Vegetable Curry with Basmati Rice</h5>
                  <p class="card-text">
                    Our Vegetable Curry is a flavorful and vegan-friendly
                    option. A medley of colorful vegetables is simmered in a
                    fragrant curry sauce and served with aromatic Basmati rice
                    for a satisfying, plant-based meal.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$3</bold></div>
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

            <div class="col-4 ">
              <div class="card w-18">
                <img src={meal2} class="card-img-top" alt="..." />
                <div class="card-body mb-5 omeal">
                  <h5 class="card-title">
                    Creamy Tomato Basil Soup with Grilled Cheese
                  </h5>
                  <p class="card-text">
                    Nothing beats the classic combination of a warm bowl of
                    Creamy Tomato Basil Soup and a crispy Grilled Cheese
                    sandwich. This comfort meal pairs a velvety tomato basil
                    soup with a gooey grilled cheese sandwich for a cozy and
                    familiar choice.
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

            <div class="col-4 ">
              <div class="card w-18">
                <img src={meal3} class="card-img-top" alt="..." />
                <div class="card-body mb-5 omeal">
                  <h5 class="card-title">Homestyle Beef Stew</h5>
                  <p class="card-text">
                    Our Homestyle Beef Stew is a comforting and hearty choice
                    for those who enjoy a classic dish. Tender beef chunks,
                    carrots, potatoes, and onions are simmered in a savory,
                    slow-cooked broth for a warm and nourishing meal.
                  </p>
                  <div className="d-flex justify-content-center text-danger fs-3" ><bold>$10</bold></div>
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
              <div class="card w-18">
                <img src={meal4} class="card-img-top" alt="..." />
                <div class="card-body mb-5 omeal">
                  <h5 class="card-title">Grilled Chicken Caesar Salad</h5>
                  <p class="card-text">
                    For a lighter option, our Grilled Chicken Caesar Salad
                    features tender grilled chicken breast on a bed of fresh,
                    crisp romaine lettuce, croutons, and Parmesan cheese. It's
                    drizzled with a creamy Caesar dressing for a satisfying and
                    healthy choice.
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
              <div class="card w-18">
                <img src={meal5} class="card-img-top" alt="..." />
                <div class="card-body mb-5 omeal">
                  <h5 class="card-title">Vegetarian Lasagna</h5>
                  <p class="card-text">
                    Our Vegetarian Lasagna is a delightful meatless option.
                    Layers of pasta, ricotta cheese, spinach, and a savory
                    marinara sauce are baked to perfection, providing a
                    comforting and delicious experience.
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
              <div class="card w-18">
                <img src={meal6} class="card-img-top" alt="..." />
                <div class="card-body mb-5 omeal">
                  <h5 class="card-title">Baked Salmon with Lemon Dill Sauce</h5>
                  <p class="card-text">
                    Our Baked Salmon with Lemon Dill Sauce is a culinary
                    delight. Succulent salmon fillets are oven-baked and served
                    with a zesty lemon-dill sauce, accompanied by steamed
                    asparagus and quinoa for a wholesome, flavorful meal..
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
              <div class="card w-18">
                <img src={meal7} class="card-img-top" alt="..." />
                <div class="card-body mb-5 omeal">
                  <h5 class="card-title"> Chicken and Vegetable Stir-Fry</h5>
                  <p class="card-text">
                    SFor those craving a taste of the Orient, our Chicken and
                    Vegetable Stir-Fry features tender pieces of chicken
                    stir-fried with a colorful array of fresh vegetables and a
                    savory stir-fry sauce. Served over a bed of steamed rice,
                    it's a delightful fusion of flavors.
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
              <div class="card w-18">
                <img src={meal8} class="card-img-top" alt="..." />
                <div class="card-body mb-5 omeal">
                  <h5 class="card-title">Spaghetti Bolognese</h5>
                  <p class="card-text">
                    Our Spaghetti Bolognese is a classic Italian favorite. Al
                    dente spaghetti is smothered in a rich, slow-simmered tomato
                    sauce with ground beef, garlic, and herbs, then topped with
                    Parmesan cheese for a satisfying and timeless dish.
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
              <div class="card w-18">
                <img src={meal9} class="card-img-top" alt="..." />
                <div class="card-body mb-5 omeal">
                  <h5 class="card-title">Pork Tenderloin with Apple Chutney</h5>
                  <p class="card-text">
                    Indulge in the sweet and savory flavors of our Pork
                    Tenderloin with Apple Chutney. Juicy pork tenderloin is
                    roasted to perfection and topped with a homemade apple
                    chutney, served alongside roasted vegetables for a
                    delightful and wholesome experience.
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

export default OrderMeal;
