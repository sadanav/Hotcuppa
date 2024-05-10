import React from "react";
import logo from "../assets/images/image.png";

const Home = () => {
  return (
    <div className="mt-4">
      <h3 className="text-center">
        <span>Welcome to </span>
        <span className="text-yellow">Hot</span>
        <span className="text-orange">Cuppa</span>
        <span className="text-yellow">Co.</span>
      </h3>
      <h6 className="text-center">Enjoy your day with delicious coffee!</h6>
      <div class="mt-5 home-card-wrap">
        <div className="home-logo">
          <img src={logo} />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <b>Company :-</b>
          </div>
          <div>Hot Cuppa Co.</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <b>Phone :-</b>
          </div>
          <div>+91 9687950934</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <b>Address :-</b>
          </div>
          <div>A/4, bangalore, 454545</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
