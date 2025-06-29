// About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="section-title">
        <span className="line"></span>
        <h2>About Us</h2>
      </div>

      <div className="about-content">
        <div className="left">
          <img src="/assets/wjia23u1efh1yelqydes.png" alt="About" />
        </div>
        <div className="right">
          <p>
            Chlothzy is your go-to destination for premium fashion that speaks
            elegance, confidence, and modern style. We believe in celebrating
            every body type through bold and beautiful silhouettes—especially
            our signature bodycon dresses designed to turn heads. Our curated
            collections reflect the latest trends while maintaining timeless
            quality. Whether you're dressing up for a party or owning your
            everyday look, Chlothzy ensures you're always fashion-forward with
            comfort and flair.
          </p>
          <h3>Mission</h3>
          <p>
            At Chlothzy, our mission is to empower individuals through style. We
            aim to offer easy access to high-quality, trendsetting apparel that
            makes you feel confident in your own skin—especially with our
            standout bodycon range.
          </p>
        </div>
      </div>
      <div className="section-title">
        <span className="line"></span>
        <h2>WHY CHOOSE US</h2>
      </div>
      <div class="row">
        <div class="col-6 col-md-4">
          <h4>Flattering Fits:</h4>
          <p>
            Our bodycon dresses are crafted to enhance every curve with premium
            stretchable fabrics.
          </p>
        </div>
        <div class="col-6 col-md-4">
          <h4>Effortless Shopping:</h4>
          <p>
            Browse, choose, and flaunt – our site makes fashion accessible and
            seamless to shop.
          </p>
        </div>
        <div class="col-6 col-md-4">
          <h4>Fashion that Empowers:</h4>
          <p>
            At Chlothzy, we’re all about bold confidence—each dress is designed
            to make a statement
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
