import React, { Component } from "react";
import "./HomeComponent.css";
import "./HeaderComponent.css";
import img1 from "../images/home-cover.jpg";
import img2 from "../images/home-donate.jpg";
import img3 from "../images/home-meal.jpg";
import img4 from "../images/home-get-involve.jpg";
export class HomeComponent extends Component {
  render() {
    return (
      <div class="home">
        <section class="home" id=" home ">
          <div class="container-cover ">
            <img src={img1} class="img-fluid" alt=" " />
            <div class="cover-text">
              <span>hello</span>
              <h1>
                Welcome To
                <br /> The Meal on wheels family
              </h1>
              <a
                href="https://donate.stripe.com/test_14k7vQeHw5ur5ygeUV"
                class="btn"
              >
                Donate Now
              </a>

              <a href="/register" class="play">
                <i class="fa-solid fa-right-to-bracket"></i>
              </a>
            </div>
          </div>
        </section>
        <div class="donate-section container mt-4 mb-4">
          <div class="row">
            <div class="card col-3">
              <img src={img2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Donate</h5>
                <p class="card-text">
                  Your generosity can make a world of difference in the lives of
                  those we serve. When you choose to donate to MerryMeals,
                  you're not just giving a meal; you're giving hope,
                  companionship, and a brighter tomorrow.
                </p>
                <a href="#">
                  <button type="button" class="btn btn-info">
                    Info
                  </button>
                </a>
              </div>
            </div>

            <div class="card offset-1 col-3">
              <img src={img3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Get Meals</h5>
                <p class="card-text">
                  Ordering meals with MerryMeals is a simple and convenient
                  process. Whether you're an older adult, a caregiver, or just
                  looking for a tasty addition to your day, we're here to meet
                  your needs.
                </p>
                <a href="#">
                  <button type="button" class="btn btn-info">
                    Info
                  </button>
                </a>
              </div>
            </div>

            <div class="card offset-1 col-3">
              <img src={img4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Get Involved</h5>
                <p class="card-text">
                  At MerryMeals, we believe in the power of community and the
                  impact of a helping hand. There are several ways you can get
                  involved and make a meaningful difference in the lives of
                  those we serve.
                </p>
                <a href="#">
                  <button type="button" class="btn btn-info">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* donate section end */}
        {/* introduction start */}
        <div class="container intro">
          <div class="jumbotron">
            <h1>Introduction </h1>
            <p>
              At MerryMeals, we understand that a nourishing meal isn't just
              about sustenance; it's about savoring life's flavors and sharing
              moments of happiness. Our mission is simple yet profound: to
              brighten the lives of seniors, individuals with disabilities, and
              those in need by delivering more than just meals—we deliver a warm
              and caring embrace.
            </p>
            <p>
              In a world that often moves too fast, we believe in slowing down
              to ensure that no one is left hungry or lonely. Our dedicated team
              of chefs, volunteers, and community supporters works tirelessly to
              create a culinary experience that delights the palate and warms
              the heart. We're more than a meal service; we're a lifeline, a
              source of companionship, and a reminder that kindness can be
              delivered one plate at a time.
            </p>
            <p>
              As you explore our website, you'll discover the essence of
              MerryMeals—how we started, who we are, and what we offer to make
              mealtimes not just nourishing but delightful. Whether you're
              seeking our services, considering volunteering, or interested in
              supporting our cause, we invite you to be a part of our MerryMeals
              family, where every moment shared is a celebration of life.
            </p>
            <p>
              Join us on this heartwarming journey as we spread the joy of good
              food, community, and compassion, one MerryMeal at a time.
            </p>
          </div>
        </div>
        {/* introduction end */}
        {/* the issue start */}
        <div class="container intro">
          <div class="jumbotron">
            <h1>The Issue</h1>
            <p>
              Nourishing More Than Just Bodies In a world filled with abundance,
              it's disheartening to realize that there are individuals in our
              communities who struggle to access one of life's most basic
              necessities: a nutritious meal. The issue we address at MerryMeals
              is not just about food; it's about ensuring that no one,
              especially our vulnerable neighbors, goes to bed hungry or feels
              isolated.
            </p>
            <h5>Food Insecurity</h5>
            <p>
              Food insecurity is a pressing concern that affects millions of
              people, including seniors, individuals with disabilities, and
              those facing financial hardships. Factors such as limited
              mobility, fixed incomes, and health challenges can make it
              challenging for them to prepare or obtain balanced and wholesome
              meals.
            </p>
            <p>
              For many, the choice often boils down to buying groceries or
              covering other essential expenses like rent and medication. In
              such circumstances, proper nutrition can become a luxury.
            </p>
            <h5>Social Isolation</h5>
            <p>
              {" "}
              The issue goes beyond the kitchen table. Loneliness and social
              isolation are equally worrisome problems, particularly among
              seniors. Many elderly individuals, bereaved or without close
              family nearby, may find themselves without the companionship they
              need to maintain a fulfilling life. Sharing a meal with someone
              can be a simple yet profound way to combat this social isolation.
            </p>
            <h5>Our Response</h5>
            <p>
              MerryMeals was founded with the belief that we can do better for
              our neighbors facing these challenges. Our organization is not
              just about delivering meals; it's about delivering hope, comfort,
              and a sense of belonging. We aim to address food insecurity and
              social isolation simultaneously by:
            </p>
            <p>
              Delivering Nutritious Meals: Our chefs craft delicious,
              well-balanced meals tailored to the dietary needs of our clients,
              ensuring that they receive the nourishment they require.
            </p>
            <p>
              Providing Companionship: Beyond food, our volunteers provide a
              friendly face and a listening ear. We believe that a kind word and
              a smile can brighten someone's day as much as a hot meal.
            </p>
            <p>
              Building Community: MerryMeals is more than a service; it's a
              community. We organize events, support groups, and activities that
              foster connections and build lasting relationships among our
              clients and volunteers.
            </p>
            <p>
              By addressing both the physical and emotional aspects of this
              issue, we aim to not only fill empty stomachs but also warm
              hearts, one delivery at a time. Together, we can make a difference
              and ensure that everyone in our community has access to nourishing
              meals and the comfort of companionship.
            </p>
          </div>
        </div>
        {/* the issue end  */}
        {/* deliver section start */}
        <div class="container intro">
          <div class="jumbotron">
            <h1>What We deliver </h1>
            <h5>A Taste of Compassion and Care</h5>
            <p>
              At MerryMeals, we take pride in not only delivering food but also
              delivering compassion, care, and a touch of culinary delight to
              your doorstep. Our mission is to ensure that every meal we provide
              is not just nourishing but also a source of comfort and happiness.
            </p>
            <h5>Fresh, Nutritious Meals</h5>
            <p>
              {" "}
              We understand that a balanced diet is essential for overall
              well-being, especially for seniors and individuals with dietary
              restrictions. That's why our team of talented chefs prepares each
              meal with utmost care. Our menu options cater to various dietary
              preferences and restrictions, ensuring that you receive a meal
              tailored to your specific needs. Whether it's a classic favorite
              or an adventurous new dish, you can count on MerryMeals to deliver
              flavors that please your palate and nourish your body.
            </p>
            <h5>Diverse Menu Choices</h5>
            <p>
              Variety is the spice of life, and we bring that philosophy to your
              plate. Our diverse menu rotates regularly, offering a wide
              selection of dishes to suit your tastes. From hearty soups and
              wholesome salads to mouthwatering entrees and delectable desserts,
              we aim to provide a mealtime experience that you can look forward
              to every time we knock on your door.
            </p>
            <h5>Special Dietary Considerations</h5>
            <p>
              We understand that dietary requirements can vary greatly. Whether
              you have specific allergies, require a vegetarian or vegan diet,
              or need meals prepared for medical reasons, we are here to
              accommodate your needs. Just let us know, and we'll ensure that
              your meals are prepared with the utmost attention to detail.
            </p>
            <h5>Companionship and Warmth</h5>
            <p>
              At MerryMeals, we believe that a meal is more than just food—it's
              an opportunity to connect and share stories. When our dedicated
              volunteers deliver your meals, they come not only with a warm tray
              but also with a warm heart. Our volunteers are here to chat, lend
              an ear, and brighten your day. We cherish the moments spent
              together, knowing that a friendly face and a kind word can make a
              world of difference.
            </p>
            <h5>Community Support</h5>
            <p>
              We're more than just a meal service; we're a community that cares.
              Beyond food delivery, MerryMeals offers support groups, social
              events, and opportunities to connect with others who may be facing
              similar challenges. We believe that a sense of belonging is just
              as important as a well-prepared meal.
              <p></p>At MerryMeals, every delivery is a delivery of love, care,
              and nourishment. Join us on this journey, and let us bring a taste
              of compassion to your doorstep.
            </p>
          </div>
        </div>
        {/* deliver section end */}
       
        
      </div>
    );
  }
}

export default HomeComponent;
