import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={789.99}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81HK1DyQEQL._AC_UL160_.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81HK1DyQEQL._AC_UL160_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startu"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81HK1DyQEQL._AC_UL160_.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Startp"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81HK1DyQEQL._AC_UL160_.jpg"
        />
        <Product
          id="12321341"
          title="The Lean Starup"
          price={789.99}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81HK1DyQEQL._AC_UL160_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="The Lea Startup"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81HK1DyQEQL._AC_UL160_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
