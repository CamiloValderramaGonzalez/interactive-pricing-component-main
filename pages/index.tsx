import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Slider from "../components/slider";
import { priceSegments } from "../consts/priceSegments";

const Home: NextPage = () => {
  const [valueSlider, setSlider] = useState(50);
  const [valueCost, setCost] = useState(16);
  const [valueViewsCount, setViewsCount] = useState("100K PAGEVIEWS");
  const [valueYearly, setYearly] = useState(false);
  const [valueSliderStyle, setSliderStyle] = useState(
    "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 50%,  hsl(224, 65%, 95%) 50%,  hsl(224, 65%, 95%) 100%)"
  );

  const onChangeYearly = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearly(e.target.checked);
    calcPrice(valueSlider, e.target.checked);
  };

  const HandleChange = (value: number) => {
    let background: string =
      "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
      value +
      "%,  hsl(224, 65%, 95%) " +
      value +
      "%,  hsl(224, 65%, 95%) 100%)";
    setSliderStyle(background);
    calcPrice(value, valueYearly);
    setSlider(value);
  };

  const calcPrice = (value: number, yearly: boolean) => {
    let result = priceSegments.find((x) => x.min <= value && x.max >= value);
    let cost = yearly ? result?.yerarlyCost : result?.montlyCost;
    setCost(cost || 0);
    setViewsCount(result?.viewCount || "");
  };

  return (
    <div>
      <Head>
        <title>Challenge</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="header">
        <div className="header_content container">
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </div>
      </header>
      <main>
        <div className="container">
          <article className="card">
            <div className="card_body">
              <p className="card_view" id="pageviews-count">
                {valueViewsCount}
              </p>
              <Slider style={valueSliderStyle} onChange={HandleChange}></Slider>
              <h2 className="card_price">
                <span id="price">${valueCost}.00</span>
                <span className="card_duration">/month</span>
              </h2>
              <div className="card_content">
                <p>Monthly Billing</p>
                <input
                  type="checkbox"
                  name="checkanually"
                  className="switch"
                  aria-label="input"
                  id="toggle_discount"
                  onChange={onChangeYearly}
                  value={valueYearly.toString()}
                />
                <p className="card_billing">Yearly Billing</p>
                <p className="card_discount">
                  25%<span> discount</span>
                </p>
              </div>
            </div>
            <div className="card_footer">
              <ul className="card_list">
                <li className="card_item">{" Unlimited websites"}</li>
                <li className="card_item">{" 100% data ownership"}</li>
                <li className="card_item">{" Email reports"}</li>
              </ul>
              <button className="btn btn--primary">Start my trial</button>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Home;
